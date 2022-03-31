import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    movie: {},
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovie: (state, { payload }) => {
            state.movie = payload;
        }
    }
})


export const { addMovie } = movieSlice.actions;
export const getAlltMovie = state => state.movie.movie;
export default movieSlice.reducer;