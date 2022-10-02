import {  configureStore} from "@reduxjs/toolkit";
import showCartReducer from './showCart-Slice'
import dataCartReducer from './cartData-Slice'



const store = configureStore({
    reducer: { showCart: showCartReducer.reducer, dataCart: dataCartReducer.reducer}
})


export default store;

