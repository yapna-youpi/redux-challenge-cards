import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
    name: 'pictures',
    initialState: {
        pictures: null,
    },
    reducers: {
        setPicturesData: ( state, {payload}) => {
            state.pictures = payload;
        },
        addPictures: (state, {payload}) => {
            state.pictures.push(payload);
        },
        deletePictures: (state, {payload}) => {
            state.pictures.pop(payload)
        }
    }

})

export const {setPicturesData, addPictures, deletePictures} = picturesSlice.actions;
export default picturesSlice.reducer;