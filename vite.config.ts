import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import sharp from 'sharp';

export default defineConfig(() => {
  return {
    root: 'htdocs',
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    plugins: [
      {
        name: 'image-upload-api',
        configureServer(server) {
          // List current images endpoint
          server.middlewares.use('/api/list-images', (req, res) => {
            try {
              const imagesDir = path.resolve(process.cwd(), 'htdocs/images');
              const files = fs.readdirSync(imagesDir).filter(f => /\.(jpg|jpeg|png|webp|svg)$/i.test(f));
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ files }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });

          // Upload image endpoint
          server.middlewares.use('/api/upload-image', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              return res.end('Method Not Allowed');
            }

            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                const { target, data } = JSON.parse(body);
                if (!target || !data) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ error: 'Target filename and image data are required.' }));
                }

                // Sanitize filename to prevent directory traversal
                const safeName = path.basename(target);
                const base64Data = data.replace(/^data:image\/[a-zA-Z0-9+\-.]+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');

                const htdocsImagesDir = path.resolve(process.cwd(), 'htdocs/images');
                if (!fs.existsSync(htdocsImagesDir)) {
                  fs.mkdirSync(htdocsImagesDir, { recursive: true });
                }

                const targetPath = path.join(htdocsImagesDir, safeName);

                // Use sharp to optimize as JPEG if target ends with .jpg/.jpeg
                if (/\.jpe?g$/i.test(safeName)) {
                  await sharp(buffer)
                    .jpeg({ quality: 85, progressive: true })
                    .toFile(targetPath);
                } else if (/\.png$/i.test(safeName)) {
                  await sharp(buffer)
                    .png({ quality: 90 })
                    .toFile(targetPath);
                } else {
                  await fs.promises.writeFile(targetPath, buffer);
                }

                // Sync to public/images if it exists
                const publicImagesDir = path.resolve(process.cwd(), 'public/images');
                if (fs.existsSync(publicImagesDir)) {
                  const publicPath = path.join(publicImagesDir, safeName);
                  await fs.promises.copyFile(targetPath, publicPath);
                }

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: true,
                  target: safeName,
                  path: `images/${safeName}?v=${Date.now()}`
                }));
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          });
        }
      }
    ],
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'htdocs/index.html'),
          about: path.resolve(__dirname, 'htdocs/about.html'),
          resorts: path.resolve(__dirname, 'htdocs/resorts.html'),
          packages: path.resolve(__dirname, 'htdocs/packages.html'),
          gallery: path.resolve(__dirname, 'htdocs/gallery.html'),
          contact: path.resolve(__dirname, 'htdocs/contact.html'),
          upload: path.resolve(__dirname, 'htdocs/upload.html'),
        },
      },
    },
  };
});
