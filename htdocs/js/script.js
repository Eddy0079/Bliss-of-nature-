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
    instagram: "https://www.instagram.com/bliss.of.nature.resort?stkn=Zmh6dXR0czdqNHBj",
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
    price: "Tariff on Request",
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
    price: "Tariff on Request",
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
    price: "Tariff on Request",
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
    price: "Tariff on Request",
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
    price: "Tariff on Request",
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
