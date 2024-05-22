import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./slice/CartSlice";
import CategorySlice from "./slice/CategorySlice";
import SearchSlice from "./slice/SearchSlice";

const store=configureStore({
    reducer:{
        cart:CartSlice.reducer,
        category:CategorySlice.reducer,
        search:SearchSlice.reducer
    }
});

export default store;