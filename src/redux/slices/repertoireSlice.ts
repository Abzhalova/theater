import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitial {
  date: string;
  time: string;
  name: string;
  genre: string;
  ageLimit: string;
  price: string;
  img?: string;
}
const initialState: IInitial[] = {
  list: [],
};

export const repertoireSlice = createSlice({
  name: "REPERTOIRE",
  initialState,
  reducers: {
    postRepertoire: (state, action: PayloadAction<IInitial>) => {
      state.list.push(action.payload);
    },
  },
});

export const { postRepertoire } = repertoireSlice.actions;
export default repertoireSlice.reducer;
