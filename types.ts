
export enum Genre {
  Action = "Action",
  Drama = "Drama",
  Horror = "Horror",
  Comedy = "Comedy",
  SciFi = "Sci-Fi",
  Thriller = "Thriller",
  Romance = "Romance",
  Documentary = "Documentary",
}

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  genre: Genre;
  languages: string[];
  server: string;
  price: number;
  priceType: 'monthly' | 'one-time';
}

export interface Testimonial {
  name: string;
  avatarUrl: string;
  review: string;
  rating: number;
}

export interface Filters {
  search: string;
  genre: string;
  language: string;
  server: string;
  price: number;
}

export interface IptvPlan {
  name: string;
  price: number;
  duration: string;
  features: string[];
  bestValue?: boolean;
}

export interface PlayerPlan {
  name: string;
  price: number;
  description: string;
  devices: string[];
}
