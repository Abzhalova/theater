import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Poster {
  id: string;
  title: string;
  duration?: number;
  ageLimit?: number;
  description?: string;
  category: string;
  image: string;
  price: number;
  dates: { day: string; month: string; hour: string; minute: string }[];
  locationName: string;
}

interface PosterState {
  posters: Poster[];
  selectedCategory: string;
}

const loadPosters = (): Poster[] => {
  try {
    const data = localStorage.getItem("posters");
    if (data) return JSON.parse(data);
    return [];
  } catch (e) {
    console.error("Ошибка загрузки из localStorage", e);
    return [];
  }
};

const initialState: PosterState = {
  posters: loadPosters(),
  selectedCategory: "Баары",
};

const posterSlice = createSlice({
  name: "poster",
  initialState,
  reducers: {
    addPoster: (state, action: PayloadAction<Poster>) => {
      state.posters.push(action.payload);
      localStorage.setItem("posters", JSON.stringify(state.posters));
    },
    updatePoster: (state, action: PayloadAction<Poster>) => {
      const index = state.posters.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) state.posters[index] = action.payload;
      localStorage.setItem("posters", JSON.stringify(state.posters));
    },
    removePoster: (state, action: PayloadAction<string>) => {
      state.posters = state.posters.filter((p) => p.id !== action.payload);
      localStorage.setItem("posters", JSON.stringify(state.posters));
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addPoster, updatePoster, removePoster, setCategory } =
  posterSlice.actions;
export default posterSlice.reducer;
