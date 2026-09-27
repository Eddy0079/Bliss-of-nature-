export type PageView = 
  | 'home' 
  | 'bliss-of-nature' 
  | 'resorts' 
  | 'packages' 
  | 'package-detail' 
  | 'experiences' 
  | 'destinations' 
  | 'about' 
  | 'contact';

export interface RoomOption {
  id: string;
  name: string;
  type: string;
  size: string;
  capacity: string;
  bed: string;
  pricePerNight: number;
  image: string;
  description: string;
  amenities: string[];
}

export interface Resort {
  id: string;
  name: string;
  tagline: string;
  location: string;
  region: string;
  propertyType: 'Nature Eco-Resort' | 'Riverside Retreat' | 'Mountain Chalet' | 'Wilderness Lodge' | 'Ski & Alpine Resort';
  startingPrice: number;
  rating: number;
  reviewsCount: number;
  featured?: boolean;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  longDescription: string;
  amenities: string[];
  rooms: RoomOption[];
  diningOverview: string;
  activities: string[];
  nearbyAttractions: { name: string; distance: string; description: string }[];
  address: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  highlights: string;
  description: string;
  mealsIncluded: string;
  stayLocation: string;
}

export interface HolidayPackage {
  id: string;
  title: string;
  tagline: string;
  destination: string;
  durationDays: number;
  durationNights: number;
  durationText: string;
  startingPrice: number;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  accommodationType: string;
  transportation: string;
  faqs: { question: string; answer: string }[];
}

export interface Experience {
  id: string;
  title: string;
  category: 'Adventure' | 'Spiritual & Cultural' | 'Nature & Wildlife' | 'Wellness';
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'All Ages';
  location: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  highlights: string[];
  bestSeason: string;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  elevation: string;
  distanceFromRishikesh: string;
  bestTimeToVisit: string;
  highlights: string[];
  description: string;
  popularFor: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  tripTaken: string;
  rating: number;
  date: string;
  comment: string;
  stayedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'resorts' | 'nature' | 'adventure' | 'dining';
  location: string;
  image: string;
  caption: string;
}

export interface BookingFormState {
  itemType: 'resort' | 'package';
  itemId: string;
  selectedRoomId?: string;
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  roomsCount: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  addOnRafting: boolean;
  addOnAirportPickup: boolean;
  addOnBonfireDinner: boolean;
}
