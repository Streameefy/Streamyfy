
import { Movie, Testimonial, Genre, IptvPlan, PlayerPlan } from './types';

export const GENRES: string[] = Object.values(Genre);
export const LANGUAGES: string[] = ["English", "Spanish", "French", "German", "Mandarin", "Japanese"];
export const SERVERS: string[] = ["Alpha-S1", "Bravo-S2", "Charlie-S3", "Delta-S4"];

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "Inception",
    posterUrl: "https://picsum.photos/seed/inception/400/600",
    genre: Genre.SciFi,
    languages: ["English", "Japanese"],
    server: "Alpha-S1",
    price: 29.99,
    priceType: 'monthly',
  },
  {
    id: 2,
    title: "The Dark Knight",
    posterUrl: "https://picsum.photos/seed/darkknight/400/600",
    genre: Genre.Action,
    languages: ["English"],
    server: "Bravo-S2",
    price: 49.99,
    priceType: 'one-time',
  },
  {
    id: 3,
    title: "Pulp Fiction",
    posterUrl: "https://picsum.photos/seed/pulpfiction/400/600",
    genre: Genre.Drama,
    languages: ["English"],
    server: "Alpha-S1",
    price: 19.99,
    priceType: 'monthly',
  },
  {
    id: 4,
    title: "The Matrix",
    posterUrl: "https://picsum.photos/seed/matrix/400/600",
    genre: Genre.SciFi,
    languages: ["English"],
    server: "Charlie-S3",
    price: 24.99,
    priceType: 'monthly',
  },
  {
    id: 5,
    title: "Forrest Gump",
    posterUrl: "https://picsum.photos/seed/forrestgump/400/600",
    genre: Genre.Drama,
    languages: ["English"],
    server: "Delta-S4",
    price: 15.00,
    priceType: 'monthly',
  },
  {
    id: 6,
    title: "The Silence of the Lambs",
    posterUrl: "https://picsum.photos/seed/lambs/400/600",
    genre: Genre.Thriller,
    languages: ["English"],
    server: "Bravo-S2",
    price: 35.50,
    priceType: 'one-time',
  },
   {
    id: 7,
    title: "Parasite",
    posterUrl: "https://picsum.photos/seed/parasite/400/600",
    genre: Genre.Thriller,
    languages: ["Japanese"],
    server: "Charlie-S3",
    price: 29.99,
    priceType: 'one-time',
  },
   {
    id: 8,
    title: "Gladiator",
    posterUrl: "https://picsum.photos/seed/gladiator/400/600",
    genre: Genre.Action,
    languages: ["English"],
    server: "Delta-S4",
    price: 18.99,
    priceType: 'monthly',
  },
  {
    id: 9,
    title: "Interstellar",
    posterUrl: "https://picsum.photos/seed/interstellar/400/600",
    genre: Genre.SciFi,
    languages: ["English"],
    server: "Alpha-S1",
    price: 55.00,
    priceType: 'one-time',
  },
  {
    id: 10,
    title: "The Grand Budapest Hotel",
    posterUrl: "https://picsum.photos/seed/budapest/400/600",
    genre: Genre.Comedy,
    languages: ["English", "German"],
    server: "Delta-S4",
    price: 12.99,
    priceType: 'monthly',
  },
];

export const IPTV_PLANS: IptvPlan[] = [
  {
    name: "Standard",
    price: 15.99,
    duration: "1 Month",
    features: [
      "24,000+ Live Channels",
      "150,000+ VOD",
      "Full HD & 4K Quality",
      "2 Connections",
      "EPG Included",
      "Anti-Buffer Technology"
    ]
  },
  {
    name: "Premium",
    price: 39.99,
    duration: "3 Months",
    features: [
      "24,000+ Live Channels",
      "150,000+ VOD",
      "Full HD & 4K Quality",
      "3 Connections",
      "EPG Included",
      "Anti-Buffer Technology"
    ],
    bestValue: true,
  },
    {
    name: "Ultimate",
    price: 69.99,
    duration: "12 Months",
    features: [
      "24,000+ Live Channels",
      "150,000+ VOD",
      "Full HD & 4K Quality",
      "4 Connections",
      "EPG Included",
      "Anti-Buffer Technology",
      "24/7 Priority Support"
    ]
  }
];

export const PLAYER_PLANS: PlayerPlan[] = [
  {
    name: "IPTV Smarters Pro",
    price: 9.99,
    description: "A popular and reliable player with a user-friendly interface.",
    devices: ["Android TV", "Firestick", "iOS", "Windows"]
  },
  {
    name: "TiviMate Premium",
    price: 9.99,
    description: "Advanced features for serious streamers, including customization and powerful EPG.",
    devices: ["Android TV", "Firestick"]
  },
  {
    name: "IBO Player",
    price: 9.99,
    description: "A versatile player that supports multiple playlist formats and devices.",
    devices: ["iOS", "Apple TV", "Android"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Johnson",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    review: "The streaming quality is top-notch, and the movie selection is fantastic. The 'How it Works' section made setup a breeze!",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026703d",
    review: "I love the dark theme and the smooth interface. Finding movies by server is a feature I didn't know I needed. Highly recommend!",
    rating: 5,
  },
  {
    name: "Ken Watanabe",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    review: "Affordable prices and a great library. The one-time purchase option is perfect for me. Customer support via WhatsApp was surprisingly fast.",
    rating: 4,
  }
];

export const CHANNELS: string[] = [
  "ABC", "NBC", "CBS", "FOX", "CNN", "MSNBC", "ESPN", "ESPN 2", "Fox Sports 1",
  "Fox Sports 2", "NBC Sports", "TNT", "TBS", "USA Network", "AMC", "FX", "HBO",
  "Showtime", "Starz", "Cinemax", "Discovery Channel", "National Geographic",
  "Animal Planet", "History Channel", "A&E", "Lifetime", "Bravo", "E! Entertainment",
  "HGTV", "Food Network", "Travel Channel", "Cartoon Network", "Disney Channel",
  "Nickelodeon", "Boomerang", "PBS", "Comedy Central", "MTV", "VH1", "BET",
  "Hallmark Channel", "Syfy", "Oxygen", "The CW", "NBA TV", "NFL Network",
  "MLB Network", "NHL Network", "CBS Sports Network", "Golf Channel", "Newsmax",
  "OAN (One America News)", "Bloomberg", "Weather Channel"
];

export const OTT_PLATFORMS = [
  { name: 'Netflix', logoUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-white-png.png' },
  { name: 'Prime Video', logoUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/amazon-prime-video-logo-white-png.png' },
  { name: 'Disney+', logoUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/Disney-Plus-logo-white-png.png' },
  { name: 'Max', logoUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/hbo-max-logo-white-png.png' },
  { name: 'Apple TV+', logoUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/apple-tv-plus-logo-white-png.png' },
  { name: 'Hulu', logoUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/hulu-logo-white-png.png' },
  { name: 'beIN SPORTS', logoUrl: 'https://www.edigitalagency.com.au/wp-content/uploads/bein-sports-logo-white-png.png' },
];
