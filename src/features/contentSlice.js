import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../components/utils/constants";

const initialState = {
    items: [],
    totalPage: 0,
    perPage: 5,
    currentPage: 1,
    status: null
}
export const getContent = createAsyncThunk(
    'content/get',
    async (temp) => {
        // console.log(temp)
        const response = await axios.get(`/?current=${temp.current}&items=${temp.items}`);
        // console.log(response.data);
        return response?.data;
    }

)

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getContent.pending]: (state, action) => {
            state.status = false;
        },
        [getContent.rejected]: (state, action) => {
            state.status = false;
        },
        [getContent.fulfilled]: (state, action) => {
            console.log("fulfii",action.payload);
            state.status = true;
            state.items = action.payload.items;
            state.totalPage = action.payload.totalPage;
            state.perPage = action.payload.perPage;
            state.currentPage = action.payload.currentPage;

        }
    }
});

export const { handlePage } = contentSlice.actions;
export default contentSlice.reducer;