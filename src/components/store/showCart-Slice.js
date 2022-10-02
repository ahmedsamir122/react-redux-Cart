import { createSlice} from "@reduxjs/toolkit";

const intialShowCartState = {showCart: false, notification:null};

const showCartSlice = createSlice({
    name:'showCart',
    initialState: intialShowCartState,
    reducers: {
        toggleShowCart(state){
        state.showCart = !state.showCart
    },
    showNotification(state,action){
        state.notification={
            status:action.payload.status,
            title:action.payload.title,
            message:action.payload.message
        }
    }
}
});

export default showCartSlice
export const showCartActions = showCartSlice.actions; 