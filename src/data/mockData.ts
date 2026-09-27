import { Resort, HolidayPackage, Experience, Destination, Review, GalleryItem } from '../types';

export const RESORTS_DATA: Resort[] = [
  {
    id: 'bliss-of-nature',
    name: 'Bliss of Nature Resort',
    tagline: 'A peaceful escape surrounded by nature',
    location: 'Mohanchatti Valley, Rishikesh, Uttarakhand',
    region: 'Rishikesh Foothills',
    propertyType: 'Nature Eco-Resort',
    startingPrice: 6500,
    rating: 4.9,
    reviewsCount: 148,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507038772120-7ffe76f79d04?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Nestled in the lush Mohan Chatti valley near Rishikesh, Bliss of Nature Resort is a peaceful sanctuary where pine-covered slopes meet rushing mountain streams. Ideal for couples, families, and travelers seeking serenity.',
    longDescription: 'Bliss of Nature Resort is the crown jewel of BON Holidays—designed as an authentic retreat celebrating the pristine ecosystem of the Garhwal Himalayas. Located just 25 minutes from Laxman Jhula yet worlds away from traffic and noise, the property sprawls across tiered hillside orchards and pine groves. Guests wake up to birdsong and mountain mist, relish organic produce grown in our permaculture gardens, and unwind by crystal-clear streams or the infinity plunge pool.',
    amenities: [
      'Mountain-View Infinity Plunge Pool',
      'The Whispering Pines Organic Bistro',
      'Riverside Open-Air Yoga & Meditation Shala',
      'Evening Firepit & Acoustic Stargazing',
      'Ayurvedic Herbal Spa & Steam Bath',
      'High-Speed Wi-Fi (Fiber & Starlink Backup)',
      'Curated Forest Trails & Birdwatching Walks',
      'Complimentary Mountain Bicycles'
    ],
    rooms: [
      {
        id: 'bon-room-1',
        name: 'Valley View Teak Cottage',
        type: 'Private Cottage',
        size: '420 sq.ft',
        capacity: '2 Adults · 1 Child',
        bed: 'King Bed',
        pricePerNight: 6500,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        description: 'Handcrafted teak wood cottage with floor-to-ceiling glass doors opening onto a private cedar balcony overlooking the forest canopy.',
        amenities: ['Private Balcony', 'Himalayan Herbal Bath Products', 'Air Conditioning & Heating', 'Artisan Coffee Maker']
      },
      {
        id: 'bon-room-2',
        name: 'Riverside Stone Villa',
        type: 'Luxury Villa',
        size: '650 sq.ft',
        capacity: '3 Adults or 2 Adults + 2 Kids',
        bed: 'King Bed + Daybed',
        pricePerNight: 9200,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        description: 'Chiseled river-stone villa situated beside our babbling brook with a private plunge deck and sunken stone bath.',
        amenities: ['Private Stream Deck', 'Sunken Natural Stone Tub', 'Mini Bar with Local Mountain Juices', 'Fireplace']
      },
      {
        id: 'bon-room-3',
        name: 'Himalayan Panoramic Master Suite',
        type: 'Signature Suite',
        size: '880 sq.ft',
        capacity: '2 Adults',
        bed: 'California King',
        pricePerNight: 12500,
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
        description: 'Our premier hilltop suite with 270-degree wraparound glass walls, outdoor heated cedar tub, and private telescope for Himalayan stargazing.',
        amenities: ['270° Valley Panoramas', 'Outdoor Heated Cedar Tub', 'Stargazing Telescope', 'Butler Service']
      },
      {
        id: 'bon-room-4',
        name: 'Family Pine Haven Chalet',
        type: 'Family Chalet',
        size: '1,150 sq.ft',
        capacity: '4–5 Adults',
        bed: '2 King Bedrooms',
        pricePerNight: 14500,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        description: 'Two-bedroom two-bathroom double-storey pine chalet featuring a cozy communal living room, wood-burning hearth, and private lawn.',
        amenities: ['Two En-Suite Bedrooms', 'Wood-burning Stove', 'Private Grass Lawn', 'Kitchenette & Dining Area']
      }
    ],
    diningOverview: 'The Whispering Pines Bistro showcases the rich gastronomic traditions of Uttarakhand alongside continental favorites. We prioritize ingredients grown right on our organic terraced farm or sourced from regional women’s agricultural collectives in Tehri Garhwal. Indulge in authentic Garhwali Kafuli, Jhangore ki Kheer, wood-fired sourdough pizzas, and freshly pressed rhododendron coolers.',
    activities: [
      'Sunrise Prana Yoga at the Riverside Shala',
      'Guided Flora & Birdwatching Walks with Local Naturalists',
      'Garhwali Traditional Pottery & Clay Sculpting Sessions',
      'Campfire Acoustic Music & Mountain Folklore Evenings',
      'Wild Stream Trekking & Natural Waterfall Dipping'
    ],
    nearbyAttractions: [
      { name: 'Neer Garh Waterfall', distance: '8 km', description: 'Cascading natural turquoise pools ideal for a refreshing swim.' },
      { name: 'Triveni Ghat Ganga Aarti', distance: '15 km', description: 'The revered spiritual confluence where evening lamps float on the holy river.' },
      { name: 'Beatles Ashram (Chaurasi Kutia)', distance: '13 km', description: 'Iconic forested enclave with historic meditation domes and graffiti murals.' },
      { name: 'Shivpuri River Rafting Point', distance: '10 km', description: 'World-renowned starting launch for grade III & IV white water rafting.' }
    ],
    address: 'Mohan Chatti Road, Near Valley Crossing, Tapovan Outskirts, Rishikesh, Uttarakhand 249304'
  },
  {
    id: 'ganga-valley-retreat',
    name: 'Ganga Valley Eco Retreat',
    tagline: 'Pristine riverside living on the sacred Ganga',
    location: 'Shivpuri, Rishikesh, Uttarakhand',
    region: 'Shivpuri Valley',
    propertyType: 'Riverside Retreat',
    startingPrice: 5200,
    rating: 4.8,
    reviewsCount: 112,
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Situated directly along a tranquil white-sand stretch of the Ganga river in Shivpuri, offering safari-style luxury cottages and easy access to thrilling water rapids.',
    longDescription: 'Ganga Valley Eco Retreat combines the excitement of river adventures with peaceful glamping. Featuring thatched luxury huts, an open-air riverfront dining canopy, and beach volleyball.',
    amenities: ['Private White-Sand Ganga Beach', 'Riverfront Dining Deck', 'Bonfire & Barbecue', 'Adventure Rafting Desk', 'High-Speed Wi-Fi'],
    rooms: [
      {
        id: 'gvr-1',
        name: 'Riverfront Safari Hut',
        type: 'Eco Hut',
        size: '380 sq.ft',
        capacity: '2 Adults',
        bed: 'Queen Bed',
        pricePerNight: 5200,
        image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
        description: 'Comfortable safari-inspired cottage with direct views of the emerald Ganges river rapids.',
        amenities: ['Riverfront Veranda', 'Ensuite Bathroom', 'Air Conditioning']
      }
    ],
    diningOverview: 'Fresh Indian and continental buffet with live tandoor and bonfire grill beside the river.',
    activities: ['Grade III & IV River Rafting', 'Beach Volleyball', 'River Kayaking', 'Starlight Camping'],
    nearbyAttractions: [
      { name: 'Marine Drive Rafting Launch', distance: '4 km', description: 'Launch point for the 24km high-adrenaline rafting run.' }
    ],
    address: 'Badrinath Road, Shivpuri Beach, Rishikesh, Uttarakhand'
  },
  {
    id: 'himalayan-pine-chalet',
    name: 'Himalayan Pine Chalet',
    tagline: 'Colonial warmth and panoramic Doon valley sunsets',
    location: 'Dhanaulti Road, Mussoorie, Uttarakhand',
    region: 'Mussoorie Hills',
    propertyType: 'Mountain Chalet',
    startingPrice: 7800,
    rating: 4.9,
    reviewsCount: 94,
    heroImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Perched at 7,200 ft amidst ancient deodar forests, this heritage boutique stone lodge overlooks the glowing evening lights of the Doon Valley.',
    longDescription: 'Escape the hustle of Mall Road at this quiet mountain sanctuary. Featuring exposed stone walls, hand-knotted Tibetan rugs, roaring log fireplaces, and an exquisite tea salon with over 30 estate teas.',
    amenities: ['Heritage Wood Fireplaces', 'Deodar Mountain View Terrace', 'Artisanal Tea Lounge & Library', 'Heated Bedrooms', 'Fine Dining Restaurant'],
    rooms: [
      {
        id: 'hpc-1',
        name: 'Deodar Heritage Chamber',
        type: 'Heritage Room',
        size: '480 sq.ft',
        capacity: '2 Adults',
        bed: 'King Bed',
        pricePerNight: 7800,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        description: 'Chamber with exposed timber beams, Victorian brass fittings, and private view of the snow-crested peaks.',
        amenities: ['Room Fireplace', 'Valley Sunset View', 'Custom Wool Blankets', 'Heritage Bathtub']
      }
    ],
    diningOverview: 'Colonial bakery, European bistro classics, and warm Pahadi mutton curry prepared by ancestral local cooks.',
    activities: ['Pari Tibba Nature Trek', 'Mussoorie Heritage Walk', 'Night Sky Observation', 'Afternoon High Tea'],
    nearbyAttractions: [
      { name: 'George Everest Peak', distance: '9 km', description: 'Scenic vantage point offering 360-degree views of the Aglar Valley and Himalayan peaks.' }
    ],
    address: 'Dhanaulti Highway, Chamba Bypass, Mussoorie Outskirts, Uttarakhand'
  },
  {
    id: 'riverstone-wilderness-lodge',
    name: 'Riverstone Wilderness Lodge',
    tagline: 'High-altitude seclusion with snow peak views',
    location: 'Kanatal, Tehri Garhwal, Uttarakhand',
    region: 'Tehri Heights',
    propertyType: 'Wilderness Lodge',
    startingPrice: 6200,
    rating: 4.7,
    reviewsCount: 88,
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Tucked away at 8,500 feet, surrounded by thick rhododendron forests with unobstructed vistas of the Bandarpoonch and Swargarohini snow ranges.',
    longDescription: 'For those who yearn for true peace and wilderness silence. Built with recycled river stone and cedar timber, Riverstone is an off-grid sanctuary that leaves zero ecological footprint.',
    amenities: ['Panoramic Snow Range Vista', 'Orchard Organic Meals', 'Solar Powered & Eco-Certified', 'Forest Stargazing Deck', 'Heated Stone Beds'],
    rooms: [
      {
        id: 'rwl-1',
        name: 'Alpine Timber Suite',
        type: 'Alpine Suite',
        size: '500 sq.ft',
        capacity: '2 Adults',
        bed: 'King Bed',
        pricePerNight: 6200,
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        description: 'Cozy timber suite offering dawn views of glowing snow peaks right from your bed.',
        amenities: ['Snow Peak Balcony', 'Heating', 'Organic Herb Bar']
      }
    ],
    diningOverview: 'Wholesome organic farm meals, fresh cow milk, wild honey, and Pahadi comfort food.',
    activities: ['Kaudia Forest Jungle Safari', 'Surkanda Devi Trek', 'Pine Forest Photography', 'Campfire Astronomy'],
    nearbyAttractions: [
      { name: 'Surkanda Devi Temple', distance: '6 km', description: 'Famous hilltop shrine at 9,995 feet with endless views of the Great Himalayas.' }
    ],
    address: 'Kaudia Forest Fringe, Kanatal, Tehri Garhwal, Uttarakhand'
  }
];

export const HOLIDAY_PACKAGES: HolidayPackage[] = [
  {
    id: 'bliss-of-nature-package',
    title: 'Bliss of Nature Resort Package',
    tagline: 'River thrills, spiritual solace, and luxury eco-retreat living in Rishikesh',
    destination: 'Bliss of Nature Resort, Rishikesh, Uttarakhand',
    durationDays: 3,
    durationNights: 2,
    durationText: '3 Days / 2 Nights',
    startingPrice: 11999,
    rating: 4.9,
    reviewsCount: 182,
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The quintessential Uttarakhand escape at Bliss of Nature Resort in Rishikesh. Unwind in handcrafted teak cottages, conquer the thrilling Grade III rapids of the holy Ganges, experience evening Ganga Aarti at Triveni Ghat, and revitalize with daily sunrise yoga at our riverside shala.',
    highlights: [
      '2 Nights Luxury Stay at Bliss of Nature Resort (Rishikesh)',
      '16 km Ganges White Water Rafting with Certified River Captains',
      'VIP Reserved Experience at Triveni Ghat Evening Ganga Aarti',
      'Daily Sunrise Himalayan Yoga & Sound Bath Healing Session',
      'All Gourmet Breakfasts and Candlelit Buffet Dinners Included',
      'Private Sightseeing to Beatles Ashram & Neer Garh Waterfall'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Rishikesh & Retreat Check-in',
        highlights: 'Welcome drink, settle into Bliss of Nature, sunset riverside walk & welcome dinner.',
        description: 'Arrive in Rishikesh where our private chauffeur meets you. Check into your cottage at Bliss of Nature Resort. Spend the afternoon taking in the valley breezes, strolling through the organic gardens, and enjoying high tea by the brook. Evening campfire dinner accompanied by acoustic music under the stars.',
        mealsIncluded: 'Welcome Drink, Evening High Tea, Dinner',
        stayLocation: 'Bliss of Nature Resort, Rishikesh'
      },
      {
        day: 2,
        title: 'Ganga White Water Adventure & Sacred Evening Aarti',
        highlights: '16km Rafting from Shivpuri, cliff jumping, Beatles Ashram, and Triveni Ghat Aarti.',
        description: 'Begin with morning yoga. After breakfast, transfer to Shivpuri for an exhilarating 16 km white water rafting expedition across famous rapids like Return to Sender and Roller Coaster. In the afternoon, visit the historic Beatles Ashram. As dusk falls, attend the mesmerizing Maha Aarti at Triveni Ghat with floating floral lamps.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        stayLocation: 'Bliss of Nature Resort, Rishikesh'
      },
      {
        day: 3,
        title: 'Neer Garh Waterfall Hike & Departure',
        highlights: 'Guided waterfall trek, refreshing dip, farewell brunch & scenic transfer.',
        description: 'Enjoy an early morning trek to Neer Garh Waterfall for a refreshing natural splash. Return for a sumptuous Garhwali-continental brunch at The Whispering Pines Bistro before check-out and private transfer to Dehradun Jolly Grant Airport or Rishikesh Railway Station.',
        mealsIncluded: 'Breakfast & Brunch',
        stayLocation: 'Departure'
      }
    ],
    inclusions: [
      '2 Nights accommodation in Valley View Teak Cottage at Bliss of Nature Resort',
      'All meals specified in itinerary (2 Breakfasts, 1 Lunch, 2 Dinners)',
      '16 km Ganges White Water Rafting with lifejackets, helmets, and certified river marshals',
      'All local transfers and sightseeing in private AC luxury vehicle',
      'Entry permits to Beatles Ashram and Neer Garh waterfall',
      'Daily guided yoga and meditation sessions',
      'Complimentary use of resort infinity pool and mountain bicycles'
    ],
    exclusions: [
      'Airfare or train tickets to/from Uttarakhand',
      'Personal adventure add-ons (Bungee Jumping, Giant Swing, Ziplining)',
      'Alcoholic beverages and personal laundry expenses',
      'Travel insurance and medical expenses'
    ],
    accommodationType: 'Bliss of Nature Resort (Eco-Luxury Cottages)',
    transportation: 'Private AC Toyota Innova / Urbania throughout',
    faqs: [
      { question: 'Is white water rafting safe for beginners?', answer: 'Yes! Our rafting partners are certified by the Uttarakhand Tourism Board with international safety gear and certified river guides. A short training briefing is given before launch.' },
      { question: 'Can I extend my stay or upgrade my room at Bliss of Nature?', answer: 'Absolutely. During booking, you can choose to upgrade to the Riverside Stone Villa or Himalayan Master Suite, or add extra nights at discounted package rates.' }
    ]
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'river-rafting',
    title: 'White Water River Rafting',
    category: 'Adventure',
    duration: '3–5 Hours',
    difficulty: 'Moderate',
    location: 'Shivpuri & Marine Drive, Rishikesh',
    shortDescription: 'Conquer the world-famous rapids of the holy Ganges river under the guidance of certified river captains.',
    fullDescription: 'From Grade II beginner runs to thrilling Grade IV rapids like Roller Coaster, Golf Course, and Double Trouble, experience the ultimate rush through dramatic Himalayan river gorges.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    highlights: ['16 km / 24 km stretches', 'Body surfing & cliff jumping points', 'International standard life vests & safety gear'],
    bestSeason: 'September to June'
  },
  {
    id: 'riverside-camping',
    title: 'Luxury Camping & Bonfires',
    category: 'Nature & Wildlife',
    duration: 'Overnight',
    difficulty: 'All Ages',
    location: 'Tapovan & Shivpuri Valley, Rishikesh',
    shortDescription: 'Sleep under starlit Himalayan skies beside whispering waters, accompanied by live barbecue and acoustic songs.',
    fullDescription: 'Our private riverside campgrounds feature plush Swiss safari tents with real beds, attached heated bathrooms, and private firepits for starlight evenings.',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
    highlights: ['Attached washrooms & power backups', 'Campfire with live barbecue grill', 'Stargazing with astronomy binoculars'],
    bestSeason: 'October to May'
  },
  {
    id: 'himalayan-trekking',
    title: 'High-Altitude Himalayan Trekking',
    category: 'Adventure',
    duration: '1–4 Days',
    difficulty: 'Moderate',
    location: 'Chopta, Nag Tibba & Kunjapuri',
    shortDescription: 'Summit breathtaking ridges, stroll through rhododendron forests, and stand in awe of 7,000-meter snow peaks.',
    fullDescription: 'Whether a gentle sunrise hike to Kunjapuri Temple overlooking the Doon Valley or an expedition to Chandrashila summit at 13,000 ft, our local Garhwali guides ensure safety, lore, and unmatched memories.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    highlights: ['360° views of Nanda Devi & Trishul', 'Alpine wildflower meadows', 'Certified local mountain guides'],
    bestSeason: 'All Year (Snow treks in Winter)'
  },
  {
    id: 'ganga-aarti',
    title: 'Sacred Ganga Aarti Ceremony',
    category: 'Spiritual & Cultural',
    duration: '2 Hours',
    difficulty: 'Easy',
    location: 'Triveni Ghat & Parmarth Niketan, Rishikesh',
    shortDescription: 'Witness centuries-old Vedic chants, multi-tiered brass oil lamps, and floating earthen offerings on the holy river.',
    fullDescription: 'A spiritually elevating ritual held every evening as the sun dips below the mountains. BON Holidays provides reserved VIP seating and an escort who explains the deep Vedic symbology of the ceremony.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    highlights: ['VIP ghat seating', 'Personal priest blessings & diya offering', 'Chanting & conch shell resonance'],
    bestSeason: 'All Year Round'
  },
  {
    id: 'nature-walks',
    title: 'Forest Bathing & Birdwatching',
    category: 'Nature & Wildlife',
    duration: '2–3 Hours',
    difficulty: 'Easy',
    location: 'Rajaji Foothills & Mohan Chatti Valley',
    shortDescription: 'Recharge your senses through mindful shinrin-yoku forest walks guided by expert naturalists.',
    fullDescription: 'Walk under tall sal, oak, and pine canopies bordering Rajaji National Park. Spot over 100 bird species including the Great Himalayan Hornbill, Kalij Pheasant, and vibrant sunbirds.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Expert naturalist accompaniment', 'Over 120 recorded bird species', 'Wild herbal plant identification'],
    bestSeason: 'October to April'
  },
  {
    id: 'wellness-yoga',
    title: 'Ayurvedic Wellness & Sunset Yoga',
    category: 'Wellness',
    duration: 'Flexible',
    difficulty: 'All Ages',
    location: 'Bliss of Nature Resort Shala, Rishikesh',
    shortDescription: 'Restorative yoga, Tibetan singing bowl sound healing, and personalized herbal massage therapies.',
    fullDescription: 'Rooted in the authentic lineage of Rishikesh, the world capital of yoga. Re-center with daily sunrise pranayama, evening restorative yin yoga, and traditional Abhyanga treatments using warm mountain herbal oils.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    highlights: ['Certified Yoga Alliance instructors', 'Authentic Garhwal herbal oils', 'Tibetan singing bowl sound baths'],
    bestSeason: 'All Year Round'
  }
];

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Yoga Capital of the World & Gateway to the Himalayas',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    elevation: '1,120 ft',
    distanceFromRishikesh: '0 km (Hub)',
    bestTimeToVisit: 'September to May',
    highlights: ['Laxman Jhula & Ram Jhula', 'Beatles Ashram', 'Triveni Ghat Aarti', 'Ganges River Rafting'],
    description: 'A magnetic city where ancient spirituality meets heart-racing adventure. Home to BON Holidays flagship property, Bliss of Nature Resort.',
    popularFor: 'Spiritual ashrams, yoga retreats, and world-class river adventures.'
  },
  {
    id: 'mussoorie',
    name: 'Mussoorie',
    tagline: 'The Enchanting Queen of the Hills',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    elevation: '6,580 ft',
    distanceFromRishikesh: '75 km (2.5 hrs)',
    bestTimeToVisit: 'March to June, September to January',
    highlights: ['Landour & Char Dukan', 'George Everest Peak', 'Kempty Falls', 'Camel’s Back Road'],
    description: 'Charming colonial hill station with pine-draped slopes, panoramic sunsets over the Doon Valley, and crisp mountain air.',
    popularFor: 'Romantic getaways, colonial architecture, and winter snows.'
  },
  {
    id: 'haridwar',
    name: 'Haridwar',
    tagline: 'Ancient Gateway to the Gods',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    elevation: '1,030 ft',
    distanceFromRishikesh: '25 km (45 mins)',
    bestTimeToVisit: 'October to April',
    highlights: ['Har Ki Pauri', 'Mansa Devi Ropeway', 'Chandi Devi Temple', 'Ancient Old Bazaar'],
    description: 'One of India’s seven holiest cities where the Ganga emerges from the Himalayas onto the Indo-Gangetic plains.',
    popularFor: 'Sacred rituals, spiritual heritage, and temple pilgrimages.'
  },
  {
    id: 'kanatal',
    name: 'Kanatal & Dhanaulti',
    tagline: 'Serene Pine Sanctuaries & Panoramic Snow Peaks',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    elevation: '8,500 ft',
    distanceFromRishikesh: '85 km (3 hrs)',
    bestTimeToVisit: 'All Year (Winter for Snow)',
    highlights: ['Surkanda Devi Temple', 'Kaudia Forest Trails', 'Eco Park Dhanaulti', 'Apple Orchards'],
    description: 'Quiet, untouched mountain settlements offering dramatic views of the Bandarpoonch and Chaukhamba snow peaks.',
    popularFor: 'Seclusion, stargazing, and untouched alpine forest trails.'
  },
  {
    id: 'tehri',
    name: 'Tehri Lake',
    tagline: 'Asia’s Largest Emerald Water Playground',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    elevation: '2,700 ft',
    distanceFromRishikesh: '72 km (2 hrs)',
    bestTimeToVisit: 'October to May',
    highlights: ['Speed Boating & Jet Skiing', 'Parasailing over Lake', 'Tehri Dam Viewpoint', 'Floating Huts'],
    description: 'A massive 42 sq. km turquoise water body nestled between towering mountain ridges, offering exhilarating water sports.',
    popularFor: 'Jet skiing, speedboating, and serene lakeview stays.'
  },
  {
    id: 'auli',
    name: 'Auli & Chamoli',
    tagline: 'India’s Premier Skiing & Alpine Meadow Destination',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    elevation: '9,500 – 10,500 ft',
    distanceFromRishikesh: '250 km (7 hrs scenic drive)',
    bestTimeToVisit: 'December to March (Skiing), May to October (Meadows)',
    highlights: ['Asia’s Longest Cable Car', 'Unobstructed Nanda Devi Peak Views', 'Artificial Snow Lake', 'Gorson Bugyal Meadow'],
    description: 'Magnificent alpine destination with sweeping snowy slopes in winter and lush wildflower meadows in summer.',
    popularFor: 'Skiing, winter sports, and dramatic Himalayan panoramas.'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Vikram & Ananya Sen',
    location: 'New Delhi',
    tripTaken: 'Rishikesh Escape (3D/2N)',
    rating: 5,
    date: 'February 2026',
    comment: 'Bliss of Nature Resort is heaven on earth! We spent 3 nights in the Valley View Cottage. Waking up to the mist over the pine forest and enjoying the hot breakfast at the bistro was unmatched. BON Holidays arranged our river rafting and Ganga Aarti flawlessly.',
    stayedAt: 'Bliss of Nature Resort'
  },
  {
    id: 'rev-2',
    author: 'Priya Sharma & Family',
    location: 'Mumbai',
    tripTaken: 'Uttarakhand Explorer (7D/6N)',
    rating: 5,
    date: 'January 2026',
    comment: 'The 7-day circuit planned by BON Holidays exceeded every expectation. Our driver was courteous, the resorts were spotless and breathtaking, especially Bliss of Nature and the Pine Chalet in Mussoorie. Highly recommend for family trips!',
    stayedAt: 'Bliss of Nature & Partner Chalets'
  },
  {
    id: 'rev-3',
    author: 'Marcus Weber',
    location: 'Berlin, Germany',
    tripTaken: 'Chopta & Tungnath Expedition',
    rating: 5,
    date: 'October 2025',
    comment: 'As a passionate mountaineer, reaching Tungnath and Chandrashila with BON Holidays was an unforgettable memory. The local guides were knowledgeable and responsible. Truly authentic travel with great attention to detail.',
    stayedAt: 'Chopta Alpine Camp & Bliss of Nature'
  },
  {
    id: 'rev-4',
    author: 'Sneha & Rohan Kulkarni',
    location: 'Bengaluru',
    tripTaken: 'Bliss of Nature Luxury Weekend',
    rating: 5,
    date: 'November 2025',
    comment: 'The Riverside Stone Villa at Bliss of Nature is simply magic. The sound of water running past the deck and the private bonfire made our anniversary celebration truly special. Thank you BON Holidays team!',
    stayedAt: 'Bliss of Nature Resort'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Infinity Pool at Bliss of Nature',
    category: 'resorts',
    location: 'Bliss of Nature Resort, Rishikesh',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    caption: 'Infinity plunge pool overlooking the forested valley slopes at sunrise.'
  },
  {
    id: 'gal-2',
    title: 'Ganges White Water Thrills',
    category: 'adventure',
    location: 'Shivpuri Rapids, Rishikesh',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    caption: 'Navigating the Roller Coaster rapid with certified river masters.'
  },
  {
    id: 'gal-3',
    title: 'Himalayan Ridge Sunset',
    category: 'nature',
    location: 'Mussoorie & Dhanaulti',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80',
    caption: 'Golden hour lights sweeping across deodar-covered mountain ridges.'
  },
  {
    id: 'gal-4',
    title: 'Valley View Teak Cottage',
    category: 'resorts',
    location: 'Bliss of Nature Resort, Rishikesh',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
    caption: 'Cozy artisanal interiors with handcrafted timber work and panoramic mountain balcony.'
  },
  {
    id: 'gal-5',
    title: 'Organic Farm-to-Table Feast',
    category: 'dining',
    location: 'The Whispering Pines Bistro',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    caption: 'Authentic Garhwali organic herbs, freshly baked woodfire flatbreads, and mountain honey.'
  },
  {
    id: 'gal-6',
    title: 'Starlight Riverside Camping',
    category: 'adventure',
    location: 'Ganga White Sand Beach, Shivpuri',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1000&q=80',
    caption: 'Luxury safari glamping tents under a diamond-studded Himalayan night sky.'
  },
  {
    id: 'gal-7',
    title: 'Sunrise Prana Yoga Shala',
    category: 'resorts',
    location: 'Bliss of Nature Resort',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80',
    caption: 'Morning meditation and pranayama surrounded by gentle breezes and bird calls.'
  },
  {
    id: 'gal-8',
    title: 'Snow Peaks of Garhwal',
    category: 'nature',
    location: 'Chopta & Chandrashila Ridge',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
    caption: 'Majestic views of Chaukhamba and Nanda Devi peaks above 13,000 feet.'
  }
];
