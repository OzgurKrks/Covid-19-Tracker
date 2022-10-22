import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const FetchData = createAsyncThunk("ozgur/FetchDAta", async()=>{
    const response = await axios("https://covid19.mathdro.id/api/countries")
    return  response.data.countries
    
})
export const FetchData1 = createAsyncThunk("ozgur/FetchDAta1", async(x)=>{
    const response = await axios(`https://covid19.mathdro.id/api/countries/${x}`)
    return  response.data
    
    
})



export const Slice = createSlice({
    name:"ozgur",
    initialState:{
        countriesName:[],
        covidData:[],
        xd:[],
       
       
        
      

        
    },
    reducers:{
        setC:(state,action)=>{
            state.xd = action.payload

        }
      

       
      
    },
    extraReducers:{
        [FetchData.fulfilled]:(state,action)=>{
            state.countriesName = action.payload

        },
        [FetchData1.fulfilled]:(state,action)=>{
            state.covidData= action.payload

        }
        
    }
})
export const {setC} = Slice.actions
export default Slice.reducer
/*
if(x === "Global"){
        const response = await axios(`https://covid19.mathdro.id/api`)
    return  response.data
    }
    else{
        const response = await axios(`https://covid19.mathdro.id/api/countries/${x}`)
    return  response.data
    } */