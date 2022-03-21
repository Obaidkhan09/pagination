import { configureStore } from "@reduxjs/toolkit";
import contentReducer, { getContent } from "../features/contentSlice";

const store = configureStore({
    reducer : {
        data : contentReducer
    }
})

export default store;