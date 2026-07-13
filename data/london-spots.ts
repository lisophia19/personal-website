export type Category = "food" | "cafe" | "activity" | "museum" | "bar" | "shopping";

export interface Spot {
  id: string;
  title: string;
  category: Category;
  lat: number;
  lng: number;
  rating: 1 | 2 | 3 | 4 | 5;
  description: string;
  link?: string;
  photo?: string; // relative path under /public/map/  e.g. "/map/dishoom.jpg"
}

export const CATEGORY_EMOJI: Record<Category, string> = {
  food: "🍽️",
  cafe: "☕",
  activity: "🎭",
  museum: "🏛️",
  bar: "🍸",
  shopping: "🛍️",
};

export const CATEGORY_LABEL: Record<Category, string> = {
  food: "Food",
  cafe: "Café",
  activity: "Activity",
  museum: "Museum",
  bar: "Bar",
  shopping: "Shopping",
};

// ─── Add your spots here ────────────────────────────────────────────────────
// Each entry becomes a pin on the map.
// lat/lng: right-click a location in Google Maps → "What's here?" to get coordinates.
//
// Example entry (remove the comment to activate):
// {
//   id: "dishoom-shoreditch",
//   title: "Dishoom Shoreditch",
//   category: "food",
//   lat: 51.5224,
//   lng: -0.0785,
//   rating: 5,
//   description: "Best chai and black daal in London. Get there early to beat the queue.",
//   link: "https://dishoom.com",
// },

export const spots: Spot[] = [
  // your entries go here
];
