import {createSlice} from "@reduxjs/toolkit"

const SearchSlice=createSlice({
    name:"search",
    initialState:{
        search:("")
    },
    reducers:{
        setsearch:(state,action)=>{
            state.search=action.payload
        }
    }

})
export const {setsearch}=SearchSlice.actions;
export default SearchSlice;