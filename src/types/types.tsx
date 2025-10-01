declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";

interface PosterDate {
  day: string;
  month: string;
  hour: string;
  minute: string;
}

interface Poster {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  locationName: string;
  image: string;
  dates: PosterDate[];
  category?: string;
  address?: string;
  ageLimit?: string;
}

interface PosterState {
  posters: Poster[];
}

interface PosterCardProps {
  title: string;
  date: string;
  price: string;
  location: string;
  image: string;
}
interface PosterDate {
  day: string;
  month: string;
  hour: string;
  minute: string;
}

interface Poster {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  locationName: string;
  image: string;
  dates: PosterDate[];
  category?: string;
  address?: string;
  ageLimit?: string;
}
interface PosterDate {
  day: string;
  month: string;
  hour: string;
  minute: string;
}

interface Poster {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  locationName: string;
  image: string;
  dates: PosterDate[];
  category?: string;
  address?: string;
  ageLimit?: string;
}

interface Poster {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string; 
  locationName: string;
  ageLimit?: string; 
  image: string;
  category?: string;
  dates: { day: string; month: string; hour: string; minute: string }[];
}


declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";

interface PosterDate {
  day: string;
  month: string;
  hour: string;
  minute: string;
}

interface Poster {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  locationName: string;
  image: string;
  dates: PosterDate[];
  category?: string;
  address?: string;
  ageLimit?: string;
}

interface PosterState {
  posters: Poster[];
}

interface PosterCardProps {
  title: string;
  date: string;
  price: string;
  location: string;
  image: string;
}
interface PosterDate {
  day: string;
  month: string;
  hour: string;
  minute: string;
}

interface Poster {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  locationName: string;
  image: string;
  dates: PosterDate[];
  category?: string;
  address?: string;
  ageLimit?: string;
}
interface PosterDate {
  day: string;
  month: string;
  hour: string;
  minute: string;
}

interface Poster {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  locationName: string;
  image: string;
  dates: PosterDate[];
  category?: string;
  address?: string;
  ageLimit?: string;
}

interface Poster {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string; 
  locationName: string;
  ageLimit?: string; 
  image: string;
  category?: string;
  dates: { day: string; month: string; hour: string; minute: string }[];
}


export interface PosterDate {
  day: string;
  month: string;
  hour: string;
  minute: string;
}

export interface Poster {
  id: string;
  title: string;
  description: string;
  duration: string; // ✅ кошулду
  price: number;
  locationName: string;
  ageLimit: number;
  image: string;
  category: string;
  dates: PosterDate[];
  address?: string;
}
