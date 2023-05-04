import { configureStore } from "@reduxjs/toolkit"
import picturesReducers from '../feature/pictures.slice'

export default configureStore({
    reducer: {
        pictures: picturesReducers,
    }
});