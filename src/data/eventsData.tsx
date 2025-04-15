
export interface EventCategory {
  id: string;
  name: string;
  icon: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  category: string;
  attendees: number;
  isFeatured: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const categories: EventCategory[] = [
  { id: "music", name: "Music", icon: "🎵" },
  { id: "sports", name: "Sports", icon: "⚽" },
  { id: "food", name: "Food & Drink", icon: "🍔" },
  { id: "arts", name: "Arts", icon: "🎨" },
  { id: "tech", name: "Tech", icon: "💻" },
  { id: "outdoors", name: "Outdoors", icon: "🏞️" },
  { id: "wellness", name: "Wellness", icon: "🧘" },
  { id: "gaming", name: "Gaming", icon: "🎮" }
];

export const events: Event[] = [
  {
    id: "1",
    title: "Downtown Jazz Night",
    description: "Join us for an evening of smooth jazz at the city's best venue. Local talents and renowned musicians will perform their best pieces in a cozy atmosphere.",
    date: "2025-04-20",
    time: "8:00 PM",
    location: "Blue Note Jazz Club, 131 W 3rd St",
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629",
    category: "music",
    attendees: 32,
    isFeatured: true,
    coordinates: { lat: 40.730823, lng: -73.996271 }
  },
  {
    id: "2",
    title: "Community Park Clean-up",
    description: "Help make our community better by participating in our monthly park clean-up event. All cleaning supplies will be provided. Just bring your energy and enthusiasm!",
    date: "2025-04-18",
    time: "9:00 AM",
    location: "Central Park, East Entrance",
    imageUrl: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15",
    category: "outdoors",
    attendees: 15,
    isFeatured: false,
    coordinates: { lat: 40.7812, lng: -73.9665 }
  },
  {
    id: "3",
    title: "Artisan Food Market",
    description: "Discover local food artisans and their delicious creations at this weekly market. From pastries to craft cheeses, there's something for every foodie.",
    date: "2025-04-19",
    time: "10:00 AM",
    location: "Union Square, North Plaza",
    imageUrl: "https://images.unsplash.com/photo-1535025639604-9a804c092faa",
    category: "food",
    attendees: 89,
    isFeatured: true,
    coordinates: { lat: 40.7359, lng: -73.9911 }
  },
  {
    id: "4",
    title: "Tech Startup Mixer",
    description: "Network with local tech entrepreneurs and startups at our monthly mixer. Share ideas, find collaborators, and learn about the latest innovations.",
    date: "2025-04-22",
    time: "6:30 PM",
    location: "Innovation Hub, 220 E 23rd St",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "tech",
    attendees: 41,
    isFeatured: false,
    coordinates: { lat: 40.7380, lng: -73.9819 }
  },
  {
    id: "5",
    title: "Weekend Yoga in the Park",
    description: "Start your weekend with a rejuvenating yoga session in the park. All levels welcome. Just bring your mat and a positive attitude.",
    date: "2025-04-21",
    time: "8:00 AM",
    location: "Bryant Park, Center Lawn",
    imageUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0",
    category: "wellness",
    attendees: 23,
    isFeatured: true,
    coordinates: { lat: 40.7536, lng: -73.9832 }
  },
  {
    id: "6",
    title: "Street Art Festival",
    description: "Watch local artists transform walls and spaces into colorful masterpieces during this three-day festival. Live music and food trucks will add to the festive atmosphere.",
    date: "2025-04-23",
    time: "12:00 PM",
    location: "Williamsburg Walls, Bedford Ave",
    imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    category: "arts",
    attendees: 67,
    isFeatured: true,
    coordinates: { lat: 40.7182, lng: -73.9507 }
  }
];
