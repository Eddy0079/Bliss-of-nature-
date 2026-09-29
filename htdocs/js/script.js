/**
 * ==============================================================================
 * BON HOLIDAYS - Main Interactive Scripts & Central Configuration
 * Static Vanilla JavaScript (Compatible with InfinityFree htdocs / Apache / Nginx)
 * ==============================================================================
 */

/* ==============================================================================
   1. CENTRAL CONFIGURATION - UPDATE YOUR DETAILS HERE
   ============================================================================== */
const BON_CONFIG = {
  // Brand & Contact
  brandName: "Bon Holidays",
  tagline: "Stay · Explore · Experience",
  
  // WhatsApp Number in international format without '+' (e.g., '919149074344' for India)
  // CHANGE THIS NUMBER TO YOUR WHATSAPP BUSINESS NUMBER:
  whatsappNumber: "919149074344",
  
  // Display phone & email
  phoneDisplay: "+91 91490 74344",
  companyEmail: "info@bonholidays.com",
  officeAddress: "Haridwar - Rishikesh Highway, Tapovan, Uttarakhand 249192",
  
  // Social Media Links (Easily update URLs here)
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=61594779811083",
    instagram: "https://instagram.com/bonholidays",
    youtube: "https://youtube.com/@bonholidays",
    whatsapp: "https://wa.me/919149074344"
  },

  // GOOGLE FORMS CONNECTION (OPTIONAL):
  // When you are ready to connect to Google Forms:
  // 1. Create a Google Form with matching fields.
  // 2. Inspect the form to find form action URL (e.g. https://docs.google.com/forms/d/e/.../formResponse)
  // 3. Put that URL in googleFormActionUrl below.
  // 4. Update the input 'name' attributes in the HTML to match Google's entry.XXXXXX IDs!
  googleFormActionUrl: "", 
};

/* ==============================================================================
   2. WHATSAPP ENQUIRY HELPERS
   ============================================================================== */

/**
 * Opens WhatsApp with a custom pre-filled message
 * @param {string} message - Text message to send
 */
function openWhatsAppWithMessage(message) {
  const cleanNumber = BON_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  const encodedMsg = encodeURIComponent(message.trim());
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

/**
 * Triggers package-specific WhatsApp enquiry
 * @param {string} packageName - Title of the package/resort
 * @param {string} [extraNotes] - Optional extra specifications
 */
function enquireOnWhatsApp(packageName, extraNotes = "") {
  let text = `Hello Bon Holidays! 👋\n\nI am interested in booking / enquiring about:\n📍 *${packageName}*`;
  if (extraNotes) {
    text += `\n\nDetails: ${extraNotes}`;
  }
  text += `\n\nPlease share availability, best dates, and pricing details. Thank you!`;
  openWhatsAppWithMessage(text);
}

/* ==============================================================================
   3. DOM READY INITIALIZATION
   ============================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileNav();
  initWhatsAppLinks();
  initResortGallery();
  initPackageEnquiryButtons();
  initEnquiryForm();
  initQuickSearchBar();
  initGalleryFilterAndLightbox();
  initFaqAccordions();
  initImageManager();
});

/* --------------------------------------------------------------------------
   Sticky Header Effect
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const drawer = document.querySelector(".mobile-nav-drawer");
  const backdrop = document.querySelector(".mobile-backdrop");
  const closeBtn = document.querySelector(".mobile-close-btn");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  links.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   Auto-bind WhatsApp elements with data-whatsapp-package
   -------------------------------------------------------------------------- */
function initWhatsAppLinks() {
  // Bind any button with data-whatsapp-package attribute
  const waButtons = document.querySelectorAll("[data-whatsapp-package]");
  waButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const packageName = btn.getAttribute("data-whatsapp-package") || "General Holiday Inquiry";
      enquireOnWhatsApp(packageName);
    });
  });

  // Bind general floating WhatsApp button if present
  const floatingWa = document.querySelector(".floating-whatsapp");
  if (floatingWa) {
    floatingWa.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsAppWithMessage("Hello Bon Holidays! I would like to plan my vacation to Uttarakhand.");
    });
  }
}

/* --------------------------------------------------------------------------
   Bliss of Nature Resort Media Preview Thumbnails
   -------------------------------------------------------------------------- */
function initResortGallery() {
  const mainImg = document.getElementById("resortMainImage");
  const thumbs = document.querySelectorAll(".resort-thumb-strip .thumb-item");

  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      thumbs.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      
      const newSrc = thumb.getAttribute("data-large");
      const newAlt = thumb.querySelector("img") ? thumb.querySelector("img").alt : "Bliss of Nature Resort";
      
      if (newSrc) {
        mainImg.src = newSrc;
        mainImg.alt = newAlt;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Package Cards View Details Modal & Quick Enquire
   -------------------------------------------------------------------------- */
const PACKAGE_DETAILS_MAP = {
  "bliss-of-nature": {
    title: "Bliss of Nature Resort Alpine Stay",
    duration: "Flexible / 2N-3D Stays",
    destination: "Kanatal (8,500 ft)",
    price: "₹3,499 / night",
    resort: "Bliss of Nature Resort, Kanatal",
    overview: "Perched high amidst aromatic deodar and cedar forests at 8,500 feet in Kanatal, Bliss of Nature Resort is our signature boutique mountain escape. Wake up to 180° uninterrupted snow peak vistas, unwind in handcrafted timber chalets, relish fresh mountain cuisine, and spend evenings around crackling bonfires under a canopy of stars.",
    itinerary: [
      { day: "Day 1", title: "Check-in & Mountain Sunset", desc: "Arrive at Bliss of Nature Resort. Welcome pahadi herbal tea. Relax on private mountain-view sit-outs and enjoy an evening lawn bonfire with acoustic music." },
      { day: "Day 2", title: "Alpine Sunrise & Mountain Leisure", desc: "Golden sunrise breakfast facing the Garhwal snow crests. Leisure day exploring the landscaped resort grounds, panoramic viewpoint observation, and customized barbecue dinner." },
      { day: "Day 3", title: "Morning Mountain Walk & Departure", desc: "Wholesome buffet breakfast, nature photography along the resort ridgeline, and smooth check-out." }
    ],
    inclusions: [
      "Luxury wooden cottage stay at Bliss of Nature Resort",
      "Daily buffet breakfast & dinner with local mountain specialties",
      "Evening lawn campfire & musical ambience",
      "Scenic mountain observation deck with 180° views",
      "Complimentary high-speed Wi-Fi & private parking"
    ]
  },
  "kaudia-trek": {
    title: "Kaudia Forest Wilderness Trek",
    duration: "Full Day / Half Day Trek",
    destination: "Kanatal (8,500 ft)",
    price: "₹999 / person",
    resort: "Base at Bliss of Nature Resort, Kanatal",
    overview: "An enchanting mountain trek winding through ancient deodar, pine, and oak groves in the protected Kaudia forest sanctuary. The trail reveals panoramic vistas of distant Himalayan snow peaks, freshwater springs, birdwatching opportunities, and pure alpine tranquility.",
    itinerary: [
      { day: "Morning", title: "Trailhead Departure & Pine Groves", desc: "Start from the trailhead near Kanatal. Walk under towering deodar canopies with crisp mountain air and singing Himalayan birds." },
      { day: "Midday", title: "Ridge Viewpoint & Forest Picnic", desc: "Reach the panoramic clearing overlooking deep valleys and terraced farms. Enjoy a packed Pahadi trail lunch and relaxation amidst wild wildflowers." },
      { day: "Afternoon", title: "Wildlife Spotting & Return", desc: "Spot Himalayan pheasants, barking deer tracks, and indigenous flora. Gentle return walk back to base." }
    ],
    inclusions: [
      "Certified local Himalayan trekking guide & escort",
      "Forest sanctuary entry permits",
      "Trail guidance & first-aid safety support"
    ]
  },
  "rishikesh-rafting": {
    title: "Rishikesh White Water River Rafting",
    duration: "Adventure Expedition (Half Day)",
    destination: "Shivpuri to Rishikesh",
    price: "₹1,499 / person",
    resort: "Ganga Valley, Rishikesh",
    overview: "Conquer the legendary white-water rapids of the sacred Ganga in Rishikesh. Paddle through exhilarating Grade III and IV rapids—including Roller Coaster, Golf Course, and Club House—paired with adrenaline-fueled cliff jumping and body surfing under certified river marshals.",
    itinerary: [
      { day: "Briefing", title: "Safety Drill & Equipment Fitting", desc: "Meet at Shivpuri launch point. Fitting with international-grade life vests, helmets, and a comprehensive paddle technique safety briefing." },
      { day: "The Rapids", title: "16 KM Rafting & Cliff Jump", desc: "Navigate thrilling Grade III & IV rapids. Stop at Maggie Point for an adrenaline cliff jump and float in calm river pools." },
      { day: "Finish", title: "NIM Beach Arrival & Return", desc: "Final rapid run ending at NIM Beach Rishikesh. Dry off, view action photos, and return transfer." }
    ],
    inclusions: [
      "16 KM River Rafting expedition from Shivpuri to Rishikesh",
      "Licensed river marshals, safety kayakers, and rescue support",
      "Imported high-buoyancy life jackets & safety helmets",
      "Cliff jumping and body surfing experience",
      "Transport from meeting office to launch point"
    ]
  },
  // Legacy aliases for backward compatibility with buttons
  "kanatal-bliss": {
    title: "Bliss of Nature Resort Alpine Stay",
    duration: "Flexible / 2N-3D Stays",
    destination: "Kanatal (8,500 ft)",
    price: "₹3,499 / night",
    resort: "Bliss of Nature Resort, Kanatal",
    overview: "Perched high amidst aromatic deodar and cedar forests at 8,500 feet in Kanatal, Bliss of Nature Resort is our signature boutique mountain escape. Wake up to 180° uninterrupted snow peak vistas, unwind in handcrafted timber chalets, relish fresh mountain cuisine, and spend evenings around crackling bonfires under a canopy of stars.",
    itinerary: [
      { day: "Day 1", title: "Check-in & Mountain Sunset", desc: "Arrive at Bliss of Nature Resort. Welcome pahadi herbal tea. Relax on private mountain-view sit-outs and enjoy an evening lawn bonfire with acoustic music." },
      { day: "Day 2", title: "Alpine Sunrise & Mountain Leisure", desc: "Golden sunrise breakfast facing the Garhwal snow crests. Leisure day exploring the landscaped resort grounds, panoramic viewpoint observation, and customized barbecue dinner." },
      { day: "Day 3", title: "Morning Mountain Walk & Departure", desc: "Wholesome buffet breakfast, nature photography along the resort ridgeline, and smooth check-out." }
    ],
    inclusions: [
      "Luxury wooden cottage stay at Bliss of Nature Resort",
      "Daily buffet breakfast & dinner with local mountain specialties",
      "Evening lawn campfire & musical ambience",
      "Scenic mountain observation deck with 180° views",
      "Complimentary high-speed Wi-Fi & private parking"
    ]
  },
  "rishikesh-glamping": {
    title: "Rishikesh White Water River Rafting",
    duration: "Adventure Expedition (Half Day)",
    destination: "Shivpuri to Rishikesh",
    price: "₹1,499 / person",
    resort: "Ganga Valley, Rishikesh",
    overview: "Conquer the legendary white-water rapids of the sacred Ganga in Rishikesh. Paddle through exhilarating Grade III and IV rapids—including Roller Coaster, Golf Course, and Club House—paired with adrenaline-fueled cliff jumping and body surfing under certified river marshals.",
    itinerary: [
      { day: "Briefing", title: "Safety Drill & Equipment Fitting", desc: "Meet at Shivpuri launch point. Fitting with international-grade life vests, helmets, and a comprehensive paddle technique safety briefing." },
      { day: "The Rapids", title: "16 KM Rafting & Cliff Jump", desc: "Navigate thrilling Grade III & IV rapids. Stop at Maggie Point for an adrenaline cliff jump and float in calm river pools." },
      { day: "Finish", title: "NIM Beach Arrival & Return", desc: "Final rapid run ending at NIM Beach Rishikesh. Dry off, view action photos, and return transfer." }
    ],
    inclusions: [
      "16 KM River Rafting expedition from Shivpuri to Rishikesh",
      "Licensed river marshals, safety kayakers, and rescue support",
      "Imported high-buoyancy life jackets & safety helmets",
      "Cliff jumping and body surfing experience",
      "Transport from meeting office to launch point"
    ]
  }
};

function initPackageEnquiryButtons() {
  const detailButtons = document.querySelectorAll("[data-view-package]");
  const modalBackdrop = document.getElementById("packageModal");
  const modalContent = document.getElementById("packageModalContent");
  const modalClose = document.getElementById("packageModalClose");

  if (!modalBackdrop || !modalContent) return;

  function closeModal() {
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  detailButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const pkgId = btn.getAttribute("data-view-package");
      const data = PACKAGE_DETAILS_MAP[pkgId];

      if (!data) {
        showToast("Package details coming soon!");
        return;
      }

      // Populate Modal Content
      modalContent.innerHTML = `
        <div style="padding: 2rem;">
          <span class="kicker">${data.destination}</span>
          <h2 style="font-size: 1.85rem; margin-bottom: 0.5rem;">${data.title}</h2>
          <div style="display: flex; gap: 1rem; align-items: center; font-size: 0.9rem; color: #475569; margin-bottom: 1.5rem; flex-wrap: wrap;">
            <span>⏱ ${data.duration}</span>
            <span>·</span>
            <span>🏨 ${data.resort}</span>
            <span>·</span>
            <strong style="color: #14532d; font-size: 1.15rem;">${data.price}</strong>
          </div>
          <p style="margin-bottom: 1.75rem; font-size: 1rem; line-height: 1.65;">${data.overview}</p>

          <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: #14532d;">Day-Wise Itinerary</h3>
          <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.75rem;">
            ${data.itinerary.map(item => `
              <div style="background: #f8faf9; padding: 1rem 1.25rem; border-radius: 8px; border-left: 3px solid #14532d;">
                <strong style="display: block; color: #0f172a; margin-bottom: 0.25rem;">${item.day}: ${item.title}</strong>
                <p style="margin: 0; font-size: 0.9rem; color: #475569;">${item.desc}</p>
              </div>
            `).join("")}
          </div>

          <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem; color: #14532d;">What's Included</h3>
          <ul style="margin-bottom: 2rem; display: flex; flex-direction: column; gap: 0.4rem;">
            ${data.inclusions.map(inc => `
              <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.925rem; color: #334155;">
                <span style="color: #14532d; font-weight: bold;">✓</span> ${inc}
              </li>
            `).join("")}
          </ul>

          <div style="display: flex; gap: 0.85rem; flex-wrap: wrap; padding-top: 1.25rem; border-top: 1px solid #e2e8f0;">
            <button class="btn btn-whatsapp" onclick="enquireOnWhatsApp('${data.title}', 'Duration: ${data.duration}')">
              Enquire on WhatsApp
            </button>
            <a href="contact.html?package=${encodeURIComponent(data.title)}" class="btn btn-primary">
              Book via Form
            </a>
          </div>
        </div>
      `;

      modalBackdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });
}

/* --------------------------------------------------------------------------
   Quick Booking / Search Bar Interaction
   -------------------------------------------------------------------------- */
function initQuickSearchBar() {
  const searchForm = document.getElementById("heroSearchForm");
  if (!searchForm) return;

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const dest = document.getElementById("searchDestination") ? document.getElementById("searchDestination").value : "";
    const date = document.getElementById("searchDate") ? document.getElementById("searchDate").value : "";
    const guests = document.getElementById("searchGuests") ? document.getElementById("searchGuests").value : "";

    const query = `Hi Bon Holidays! I am planning a holiday:\n• Destination: ${dest || 'Uttarakhand'}\n• Travel Date: ${date || 'Flexible'}\n• Guests: ${guests || '2 Adults'}\n\nPlease recommend available resorts and packages.`;
    openWhatsAppWithMessage(query);
  });
}

/* --------------------------------------------------------------------------
   Professional Enquiry Form (Connectable to Google Forms)
   -------------------------------------------------------------------------- */
function initEnquiryForm() {
  const form = document.getElementById("bonEnquiryForm");
  if (!form) return;

  // Check if URL has ?package= param to preselect
  const urlParams = new URLSearchParams(window.location.search);
  const preselectedPkg = urlParams.get("package");
  if (preselectedPkg && form.elements["packageSelect"]) {
    form.elements["packageSelect"].value = preselectedPkg;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["userName"] ? form.elements["userName"].value.trim() : "";
    const phone = form.elements["userPhone"] ? form.elements["userPhone"].value.trim() : "";
    const email = form.elements["userEmail"] ? form.elements["userEmail"].value.trim() : "";
    const pkg = form.elements["packageSelect"] ? form.elements["packageSelect"].value : "";
    const guests = form.elements["numGuests"] ? form.elements["numGuests"].value : "";
    const date = form.elements["travelDate"] ? form.elements["travelDate"].value : "";
    const msg = form.elements["userMessage"] ? form.elements["userMessage"].value.trim() : "";

    if (!name || !phone) {
      showToast("Please provide your name and phone number!");
      return;
    }

    // If user has configured Google Forms Action URL, submit via fetch
    if (BON_CONFIG.googleFormActionUrl) {
      try {
        const formData = new FormData(form);
        fetch(BON_CONFIG.googleFormActionUrl, {
          method: "POST",
          mode: "no-cors",
          body: formData
        }).catch(err => console.log("Google Form background post:", err));
      } catch (err) {
        console.log(err);
      }
    }

    // Success response notification
    showToast("Thank you, " + name + "! Your enquiry has been received.");

    // Option to direct to WhatsApp for instant confirmation
    setTimeout(() => {
      const confirmText = `New Enquiry from Website:\n• Name: ${name}\n• Phone: ${phone}\n• Email: ${email || 'N/A'}\n• Interested In: ${pkg || 'General Enquiry'}\n• Guests: ${guests || 'N/A'}\n• Date: ${date || 'Flexible'}\n• Note: ${msg || 'None'}`;
      
      const shouldOpenWa = confirm("Your enquiry has been noted! Would you like to connect directly on WhatsApp with our travel concierge now?");
      if (shouldOpenWa) {
        openWhatsAppWithMessage(confirmText);
      }
      form.reset();
    }, 600);
  });
}

/* --------------------------------------------------------------------------
   Gallery Category Filter & Lightbox Viewer
   -------------------------------------------------------------------------- */
function initGalleryFilterAndLightbox() {
  const filterBtns = document.querySelectorAll(".gallery-filter-tabs .filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-grid .gallery-item");

  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        galleryItems.forEach(item => {
          const cat = item.getAttribute("data-category");
          if (filter === "all" || cat === filter) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  // Lightbox click handler
  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  if (!lightbox || !lightboxImg) return;

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const title = item.querySelector(".gallery-overlay-title");
      const sub = item.querySelector(".gallery-overlay-sub");

      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      if (lightboxCaption && title) {
        lightboxCaption.innerHTML = `<strong>${title.innerText}</strong> ${sub ? `· ${sub.innerText}` : ''}`;
      }

      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });
}

/* --------------------------------------------------------------------------
   FAQ Accordions
   -------------------------------------------------------------------------- */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(fi => fi.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
}

/* --------------------------------------------------------------------------
   Toast Notification Utility
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.querySelector(".toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

/* ==============================================================================
   4. INTERACTIVE IMAGE MANAGER & RESORT PHOTO UPLOADER
   ============================================================================== */
const STORAGE_KEY_CUSTOM_IMAGES = "bon_custom_images";

function getStoredCustomImages() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_IMAGES);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.warn("Could not read custom images from localStorage:", err);
    return {};
  }
}

function saveStoredCustomImages(data) {
  try {
    localStorage.setItem(STORAGE_KEY_CUSTOM_IMAGES, JSON.stringify(data));
  } catch (err) {
    console.warn("Could not save custom images to localStorage:", err);
  }
}

function applyCustomImages() {
  const images = getStoredCustomImages();
  if (!images) return;

  // 1. Bliss of Nature Main Exterior
  if (images.bliss_main) {
    document.querySelectorAll("img").forEach(img => {
      const src = img.getAttribute("src") || "";
      if (src.includes("bliss-of-nature-1") || src.includes("destination-kanatal.jpg") || src.includes("package-kanatal.jpg")) {
        img.src = images.bliss_main;
      }
    });
  }

  // 2. Hero Background / Banner
  if (images.hero_bg) {
    const heroEl = document.querySelector(".hero");
    if (heroEl) {
      heroEl.style.backgroundImage = `linear-gradient(rgba(5, 46, 22, 0.72), rgba(5, 46, 22, 0.85)), url('${images.hero_bg}')`;
    }
    document.querySelectorAll("img").forEach(img => {
      const src = img.getAttribute("src") || "";
      if (src.includes("hero.jpg")) {
        img.src = images.hero_bg;
      }
    });
  }

  // 3. Resort Sit-out Deck (Photo 2)
  if (images.resort_deck) {
    document.querySelectorAll("img").forEach(img => {
      const src = img.getAttribute("src") || "";
      if (src.includes("bliss-of-nature-2")) {
        img.src = images.resort_deck;
      }
    });
  }

  // 4. Resort Chalet Suite (Photo 3)
  if (images.resort_suite) {
    document.querySelectorAll("img").forEach(img => {
      const src = img.getAttribute("src") || "";
      if (src.includes("bliss-of-nature-3")) {
        img.src = images.resort_suite;
      }
    });
  }

  // 5. Resort Evening Bonfire Lawn (Photo 4)
  if (images.resort_lawn) {
    document.querySelectorAll("img").forEach(img => {
      const src = img.getAttribute("src") || "";
      if (src.includes("bliss-of-nature-4")) {
        img.src = images.resort_lawn;
      }
    });
  }

  // 6. Kaudia Forest Trek
  if (images.kaudia_trek) {
    document.querySelectorAll("img").forEach(img => {
      const src = img.getAttribute("src") || "";
      if (src.includes("package-kaudia-trek") || src.includes("gallery-6")) {
        img.src = images.kaudia_trek;
      }
    });
  }

  // 7. Rishikesh Rafting
  if (images.rishikesh_rafting) {
    document.querySelectorAll("img").forEach(img => {
      const src = img.getAttribute("src") || "";
      if (src.includes("package-rishikesh") || src.includes("gallery-5")) {
        img.src = images.rishikesh_rafting;
      }
    });
  }

  // 8. Custom Gallery Additions
  if (Array.isArray(images.custom_gallery_items) && images.custom_gallery_items.length > 0) {
    const galleryGrid = document.querySelector(".gallery-grid");
    if (galleryGrid) {
      // Remove any previously inserted custom items to avoid duplicates
      galleryGrid.querySelectorAll(".custom-injected-item").forEach(el => el.remove());

      images.custom_gallery_items.forEach(item => {
        const div = document.createElement("div");
        div.className = "gallery-item custom-injected-item";
        div.setAttribute("data-category", item.category || "resort");
        div.innerHTML = `
          <img src="${item.src}" alt="${item.title || 'Bliss of Nature'}" style="width: 100%; height: 260px; object-fit: cover;">
          <div class="gallery-overlay">
            <div class="gallery-overlay-title">${item.title || 'Bliss of Nature Resort'}</div>
            <div class="gallery-overlay-sub">Guest Uploaded Photo</div>
          </div>
        `;
        galleryGrid.insertBefore(div, galleryGrid.firstChild);
      });
      // Re-bind click for lightbox
      initGalleryFilterAndLightbox();
    }
  }
}

function initImageManager() {
  // Apply any custom photos saved previously
  applyCustomImages();
}

function createImageModalDOM() {
  if (document.getElementById("imageUploadModal")) return;

  const modal = document.createElement("div");
  modal.id = "imageUploadModal";
  modal.className = "modal-backdrop";
  modal.innerHTML = `
    <div class="modal-dialog image-modal-dialog">
      <button class="modal-close-btn" id="closeImageModalBtn" aria-label="Close modal">✕</button>
      
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
        <span style="font-size: 1.5rem;">📷</span>
        <h3 style="margin: 0; font-size: 1.4rem; color: #14532d;">Upload Resort Photo</h3>
      </div>
      <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 1.25rem;">
        Upload your photo for <strong>Bliss of Nature Resort</strong>, Kaudia Trek, or Rishikesh Rafting. It updates the site in real-time.
      </p>

      <!-- Target Selection -->
      <div style="margin-bottom: 1.25rem;">
        <label style="display: block; font-size: 0.825rem; font-weight: 700; color: #334155; margin-bottom: 0.35rem;">
          Select Placement on Website:
        </label>
        <select id="imageTargetSelect" style="width: 100%; padding: 0.65rem 0.85rem; border: 1.5px solid #cbd5e1; border-radius: 8px; font-weight: 600; color: #1e293b; background: #fff;">
          <option value="bliss_main">🏔️ Bliss of Nature Resort (Main Card & Showcase)</option>
          <option value="hero_bg">🌅 Hero Banner Background</option>
          <option value="resort_deck">☕ Resort Mountain Sit-out Deck</option>
          <option value="resort_suite">🛏️ Resort Handcrafted Cedar Suite</option>
          <option value="resort_lawn">🔥 Evening Bonfire & Campfire Lawn</option>
          <option value="kaudia_trek">🌲 Kaudia Forest Wilderness Trek</option>
          <option value="rishikesh_rafting">🌊 Rishikesh River Rafting</option>
          <option value="gallery_add">📸 Add as New Photo in Gallery</option>
        </select>
      </div>

      <!-- Tabs: File Upload vs URL -->
      <div class="uploader-tabs">
        <button type="button" class="uploader-tab active" id="tabUploadFile">📁 From Computer / Phone</button>
        <button type="button" class="uploader-tab" id="tabPasteUrl">🔗 Paste Image URL</button>
      </div>

      <!-- Tab 1: File Input & Dropzone -->
      <div id="fileUploadSection">
        <div class="uploader-dropzone" id="dropzoneArea">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          <div style="font-weight: 700; color: #1e293b; margin-bottom: 0.25rem;">
            Choose a photo or drag & drop here
          </div>
          <div style="font-size: 0.8rem; color: #64748b;">
            JPG, PNG, or WebP (High Resolution supported)
          </div>
          <input type="file" id="imageFileInput" accept="image/*" style="display: none;">
        </div>
      </div>

      <!-- Tab 2: URL Input -->
      <div id="urlUploadSection" style="display: none; margin-bottom: 1.25rem;">
        <label style="display: block; font-size: 0.825rem; font-weight: 700; color: #334155; margin-bottom: 0.35rem;">
          Paste Direct Image URL:
        </label>
        <input type="url" id="imageUrlInput" placeholder="https://example.com/resort-photo.jpg" style="width: 100%; padding: 0.65rem 0.85rem; border: 1.5px solid #cbd5e1; border-radius: 8px; font-size: 0.9rem;">
        <button type="button" id="previewUrlBtn" class="btn btn-sm btn-outline" style="margin-top: 0.5rem;">Load Preview</button>
      </div>

      <!-- Live Preview -->
      <div id="imagePreviewContainer" style="display: none;">
        <label style="display: block; font-size: 0.825rem; font-weight: 700; color: #334155; margin-bottom: 0.25rem;">Preview:</label>
        <div class="uploader-preview-box">
          <img id="imagePreviewImg" src="" alt="Photo Preview">
        </div>
      </div>

      <div class="uploader-tip">
        <strong>💡 Instant Update:</strong> When you click "Apply Photo", the website immediately displays your uploaded image across the site and saves it to your browser. You can also paste links or send files in chat to embed them permanently into the site source.
      </div>

      <!-- Actions -->
      <div style="display: flex; gap: 0.75rem; justify-content: flex-end; align-items: center; margin-top: 1.25rem;">
        <button type="button" id="resetImagesBtn" class="btn btn-sm btn-outline" style="color: #dc2626; border-color: #fca5a5; margin-right: auto;">
          Reset to Default Photos
        </button>
        <button type="button" id="cancelImageModalBtn" class="btn btn-sm btn-outline">
          Cancel
        </button>
        <button type="button" id="applyImageBtn" class="btn btn-sm btn-primary" disabled>
          Apply Photo to Website
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Wire Modal Events
  wireImageModalEvents(modal);
}

let currentSelectedImageData = null;

function wireImageModalEvents(modal) {
  const closeBtn = document.getElementById("closeImageModalBtn");
  const cancelBtn = document.getElementById("cancelImageModalBtn");
  const dropzone = document.getElementById("dropzoneArea");
  const fileInput = document.getElementById("imageFileInput");
  const tabUpload = document.getElementById("tabUploadFile");
  const tabUrl = document.getElementById("tabPasteUrl");
  const fileSec = document.getElementById("fileUploadSection");
  const urlSec = document.getElementById("urlUploadSection");
  const urlInput = document.getElementById("imageUrlInput");
  const previewUrlBtn = document.getElementById("previewUrlBtn");
  const previewBox = document.getElementById("imagePreviewContainer");
  const previewImg = document.getElementById("imagePreviewImg");
  const applyBtn = document.getElementById("applyImageBtn");
  const resetBtn = document.getElementById("resetImagesBtn");
  const targetSelect = document.getElementById("imageTargetSelect");

  function close() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", close);
  if (cancelBtn) cancelBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  // Tab switching
  tabUpload.addEventListener("click", () => {
    tabUpload.classList.add("active");
    tabUrl.classList.remove("active");
    fileSec.style.display = "block";
    urlSec.style.display = "none";
  });

  tabUrl.addEventListener("click", () => {
    tabUrl.classList.add("active");
    tabUpload.classList.remove("active");
    fileSec.style.display = "none";
    urlSec.style.display = "block";
  });

  // Dropzone click & drag
  dropzone.addEventListener("click", () => fileInput.click());

  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dragover");
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files && fileInput.files[0]) {
      handleImageFile(fileInput.files[0]);
    }
  });

  // Process File with optional canvas resize to prevent storage overflow
  function handleImageFile(file) {
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file (JPG, PNG, WebP).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (evt) => {
      const originalDataUrl = evt.target.result;
      
      // Resize to reasonable maximum dimensions (1920px max)
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 1920;
        const MAX_HEIGHT = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Quality 0.85 jpeg
        const optimizedDataUrl = canvas.toDataURL("image/jpeg", 0.85);
        currentSelectedImageData = optimizedDataUrl;

        previewImg.src = optimizedDataUrl;
        previewBox.style.display = "block";
        applyBtn.disabled = false;
        applyBtn.innerText = "Apply Photo to Website";
      };
      img.src = originalDataUrl;
    };
    reader.readAsDataURL(file);
  }

  // URL Preview
  previewUrlBtn.addEventListener("click", () => {
    const val = urlInput.value.trim();
    if (!val) {
      alert("Please enter a valid image URL.");
      return;
    }
    currentSelectedImageData = val;
    previewImg.src = val;
    previewBox.style.display = "block";
    applyBtn.disabled = false;
  });

  // Apply Action
  applyBtn.addEventListener("click", () => {
    if (!currentSelectedImageData) return;

    const target = targetSelect.value;
    const currentStorage = getStoredCustomImages();

    if (target === "gallery_add") {
      if (!Array.isArray(currentStorage.custom_gallery_items)) {
        currentStorage.custom_gallery_items = [];
      }
      currentStorage.custom_gallery_items.unshift({
        src: currentSelectedImageData,
        title: "Bliss of Nature Resort, Kanatal",
        category: "resort"
      });
    } else {
      currentStorage[target] = currentSelectedImageData;
    }

    saveStoredCustomImages(currentStorage);
    applyCustomImages();
    close();
    showToast("Photo updated successfully on website!");
  });

  // Reset Action
  resetBtn.addEventListener("click", () => {
    if (confirm("Reset all custom photos back to default images?")) {
      localStorage.removeItem(STORAGE_KEY_CUSTOM_IMAGES);
      location.reload();
    }
  });
}

function openImageModal() {
  const modal = document.getElementById("imageUploadModal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}
