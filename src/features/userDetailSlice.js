import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


 export const createUser = createAsyncThunk('creatUser',async (data ,{rejectWithValue}) => {
    console.log("🚀 ~ createUser ~ data:", data)
    const response = await axios.get("https://67f4b652cbef97f40d2f0d24.mockapi.io/crud")
  
})
export const userDetail=createSlice({
    name:'dipanshu',
    initialState: {
        user:[],
        loading:false,
        error:null,
        

    }
    ,
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user.push(action.payload);
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
       
    },
});

export default userDetail.reducer;