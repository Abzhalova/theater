

export interface PosterDate {
  day: string;
  month: string;
  hour: string;
  minute: string;
}

export interface Poster {
  id: string; 
  title: string;
  price: number;
  locationName: string;
  image: string;
  category: string;
  dates: PosterDate[];
  address?: string;
  description?: string; 
  duration?: number;    
  ageLimit?: number; 
}

export interface PosterState {
  posters: Poster[];
}

export interface PosterCardProps {
  title: string;
  date: string;
  price: string;
  location: string;
  image: string;
}
