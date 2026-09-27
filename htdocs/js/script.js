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
  
  // WhatsApp Number in international format without '+' (e.g., '919876543210' for India)
  // CHANGE THIS NUMBER TO YOUR WHATSAPP BUSINESS NUMBER:
  whatsappNumber: "919876543210",
  
  // Display phone & email
  phoneDisplay: "+91 98765 43210",
  companyEmail: "info@bonholidays.com",
  officeAddress: "Haridwar - Rishikesh Highway, Tapovan, Uttarakhand 249192",
  
  // Social Media Links (Easily update URLs here)
  socialLinks: {
    facebook: "https://facebook.com/bonholidays",
    instagram: "https://instagram.com/bonholidays",
    youtube: "https://youtube.com/@bonholidays",
    whatsapp: "https://wa.me/919876543210"
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
  "kanatal-bliss": {
    title: "Kanatal Mountain Bliss & Stargazing",
    duration: "3 Days / 2 Nights",
    destination: "Kanatal (8,500 ft)",
    price: "₹5,499 / person",
    resort: "Bliss of Nature Resort, Kanatal",
    overview: "Perched high amidst lush oak and deodar forests, Kanatal offers raw mountain tranquility. Stay at the signature Bliss of Nature Resort with panoramic 180° views of the snow-clad Garhwal Himalayas, nightly bonfires, forest nature walks, and crystal-clear stargazing.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Sunset Bonfire", desc: "Check-in at Bliss of Nature Resort. Welcome Garhwali herbal drink. Evening sunset walk through Surkanda ridge followed by warm bonfire and acoustic music under the stars." },
      { day: "Day 2", title: "Forest Trek & Stargazing", desc: "Sunrise Himalayan view breakfast. Guided nature hike through Kaudia Deodar forest reserve. Evening telescope stargazing session and barbeque dinner." },
      { day: "Day 3", title: "Surkanda Devi & Farewell", desc: "Morning yoga session on terrace lawn. Visit ancient Surkanda Devi Temple (9,995 ft) for 360° views. Departure with sweet mountain memories." }
    ],
    inclusions: [
      "2 Nights luxury cottage stay at Bliss of Nature Resort",
      "All daily buffet meals (Breakfast & Dinner)",
      "Evening bonfire with snacks & music",
      "Guided Kaudia forest eco-trail walk",
      "Stargazing session with telescope"
    ]
  },
  "rishikesh-glamping": {
    title: "Rishikesh River Glamping & Rafting",
    duration: "3 Days / 2 Nights",
    destination: "Rishikesh & Shivpuri",
    price: "₹4,999 / person",
    resort: "Luxury Riverside Camp, Shivpuri",
    overview: "Experience the adrenaline and spiritual serenity of Rishikesh. Luxurious alpine river-facing glamping tents, exhilarating Grade III/IV river rafting, cliff jumping, Ganga Aarti at Parmarth Niketan, and gourmet riverside dining.",
    itinerary: [
      { day: "Day 1", title: "Riverside Camp Check-in", desc: "Arrive at picturesque riverside camp. Afternoon body surfing and river swimming. Evening beach volleyball and riverside bonfire with snacks." },
      { day: "Day 2", title: "White River Rafting & Ganga Aarti", desc: "16 KM thrilling rafting expedition from Shivpuri to NIM Beach including Cliff Jump. Evening visit to Parmarth Niketan for Divine Ganga Aarti." },
      { day: "Day 3", title: "Waterfall Hike & Departure", desc: "Morning nature hike to Neer Garh waterfall. Healthy organic breakfast and check-out." }
    ],
    inclusions: [
      "2 Nights AC riverside swiss luxury tent stay",
      "All meals (2 Breakfast, 2 Lunch, 2 Dinner)",
      "16 KM River rafting with licensed safety marshals & equipment",
      "Cliff jump and body surfing experience",
      "Nightly riverside bonfire"
    ]
  },
  "chopta-trek": {
    title: "Chopta Tungnath Alpine Meadow Trek",
    duration: "4 Days / 3 Nights",
    destination: "Chopta, Tungnath & Chandrashila",
    price: "₹7,499 / person",
    resort: "Bon Alpine Camps, Chopta",
    overview: "Known as the Mini Switzerland of India, Chopta features rolling alpine meadows (bugyals) framed by majestic Chaukhamba peaks. Trek to the world's highest Shiva shrine at Tungnath (12,100 ft) and Chandrashila summit (13,100 ft).",
    itinerary: [
      { day: "Day 1", title: "Rishikesh to Chopta Scenic Drive", desc: "Scenic mountain drive along Alaknanda and Mandakini rivers. Check-in at meadow camp. Sunset over Chaukhamba." },
      { day: "Day 2", title: "Tungnath & Chandrashila Summit", desc: "Early morning trek (4.5 km) through rhododendron woods to Tungnath and breathtaking Chandrashila peak. Return to camp by evening." },
      { day: "Day 3", title: "Deoria Tal Lake Exploration", desc: "Short trek to the emerald Deoria Tal lake with reflection of Chaukhamba peaks. Campfire and folk stories." },
      { day: "Day 4", title: "Morning Meadow Walk & Return", desc: "Morning birdwatching walk and return transfer with scenic stops." }
    ],
    inclusions: [
      "3 Nights Swiss tent stay with mountain views",
      "Nutritious mountain meals (Breakfast & Dinner)",
      "Certified local trekking guide and forest entry permits",
      "Bonfire and stargazing assistance",
      "First aid and emergency oxygen support"
    ]
  },
  "chardham-yatra": {
    title: "Sacred Char Dham Spiritual Yatra",
    duration: "10 Days / 9 Nights",
    destination: "Yamunotri, Gangotri, Kedarnath, Badrinath",
    price: "₹24,999 / person",
    resort: "Curated Pilgrim Hotels & Cottages",
    overview: "A transformative journey through the Himalayas visiting the four sacred dhams. Complete VIP darshan coordination, comfortable stays, experienced mountain drivers, and hygienic satvik food.",
    itinerary: [
      { day: "Day 1-2", title: "Haridwar to Barkot & Yamunotri", desc: "Drive to Barkot. Trek to Yamunotri Temple and holy Surya Kund bath." },
      { day: "Day 3-4", title: "Uttarkashi & Gangotri Dham", desc: "Visit Gangotri Temple via scenic Harsil Valley along the sparkling Bhagirathi." },
      { day: "Day 5-7", title: "Guptkashi & Divine Kedarnath", desc: "Trek or helicopter to Kedarnath. Special evening prayer and temple darshan." },
      { day: "Day 8-10", title: "Badrinath, Mana & Rishikesh", desc: "Darshan at Badrinath Temple, visit Mana (India's First Village), and return via Devprayag." }
    ],
    inclusions: [
      "9 Nights comfortable verified hotel/guesthouse stays",
      "Pure vegetarian satvik breakfast and dinner daily",
      "Dedicated sanitized vehicle with seasoned mountain driver",
      "Biometric registration & Yatra permit coordination",
      "All toll taxes, parking, and driver allowances"
    ]
  },
  "mussoorie-escape": {
    title: "Mussoorie & Dhanaulti Hills Escape",
    duration: "3 Days / 2 Nights",
    destination: "Mussoorie & Dhanaulti",
    price: "₹5,999 / person",
    resort: "Heritage Pine Valley Resort",
    overview: "Relive classic hill station charm. Walk along colonial Mall Road, visit Kempty and Bhatta Falls, experience the quiet cedar tranquility of Dhanaulti Eco Park, and witness the famous Mussoorie Winterline sunset.",
    itinerary: [
      { day: "Day 1", title: "Mussoorie Arrival & Mall Road", desc: "Check in. Evening stroll through historic Mall Road, Camel's Back Road sunset point." },
      { day: "Day 2", title: "Dhanaulti & Eco Park Excursion", desc: "Day trip to peaceful Dhanaulti. Walk through towering deodar trees and visit Surkanda Devi Temple." },
      { day: "Day 3", title: "Waterfalls & Departure", desc: "Visit scenic waterfalls, souvenir shopping, and departure." }
    ],
    inclusions: [
      "2 Nights stay in Deluxe Valley View Room",
      "Daily breakfast and chef's special dinner",
      "Sightseeing cab for Dhanaulti and Mussoorie attractions",
      "All taxes and parking charges"
    ]
  },
  "corbett-wildlife": {
    title: "Jim Corbett Wildlife & Wilderness Safari",
    duration: "3 Days / 2 Nights",
    destination: "Jim Corbett National Park, Ramnagar",
    price: "₹6,999 / person",
    resort: "Corbett Riverside Jungle Resort",
    overview: "Enter the kingdom of the Royal Bengal Tiger. Stay at a riverside jungle resort, take an open 4x4 Gypsy safari into Corbett's deepest forest zones, and unwind with evening folk performances by the bonfire.",
    itinerary: [
      { day: "Day 1", title: "Resort Arrival & Kosi River", desc: "Check-in at jungle resort. Relax by the Kosi river. Evening wildlife movie screening and bonfire dinner." },
      { day: "Day 2", title: "4x4 Open Jeep Safari", desc: "Early morning thrilling Jeep safari into Corbett National Park (Bijrani/Jhirna/Dhela zone) with wildlife naturalist guide. Afternoon relaxation by pool." },
      { day: "Day 3", title: "Corbett Falls & Return", desc: "Visit Corbett Heritage Museum and Corbett Falls before heading home." }
    ],
    inclusions: [
      "2 Nights jungle cottage accommodation",
      "All meals included (Breakfast, Lunch, Dinner)",
      "1 Open 4x4 Jeep Safari with naturalist guide and forest permits",
      "Evening wildlife documentary and bonfire",
      "Complimentary resort recreational activities"
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
