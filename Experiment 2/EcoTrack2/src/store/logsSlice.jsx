import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchLogs=createAsyncThunk(
    "logs/fetchLogs",
    async()=>{
        return[
            { id: 1, message: "Log entry 1" },
            { id: 2, message: "Log entry 2" },
            { id: 3, message: "Log entry 3" },
        ]
    }
);

const logsSlice=createSlice({
    name:"logs",
    initialState:{
        data:[],
        status:"idle",
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchLogs.pending,(state)=>{
            state.status="loading";
        })
        .addCase(fetchLogs.fulfilled,(state,action)=>{
            state.status="success";
            state.data=action.payload;
        })
        .addCase(fetchLogs.rejected,(state,action)=>{
            state.status="rejected";
            state.data=action.payload;
        })
    }
})

export default logsSlice.reducer