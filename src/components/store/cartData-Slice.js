import { createSlice} from "@reduxjs/toolkit";

const intialDataCartState = {items: [], totalAmount:0, changed:false};

const dataCartSlice = createSlice({
    name:'dataCart',
    initialState: intialDataCartState,
    reducers: {
        addItemToCart(state,action){
            state.changed= true
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id)
        if(!existingItem){
            state.items.push({...newItem, quantity:1, totalPrice:newItem.price})
        }
        else {
           existingItem.quantity++
           existingItem.totalPrice = existingItem.totalPrice + newItem.price
           console.log(state.items)
        }
    },
    replaceCartItem(state,action) {
        state.items = action.payload.items
    },
    removeItemFromCart(state,action){
        state.changed= true
        const index = state.items.findIndex(item => action.payload.id === item.id) 
        if(state.items[index].quantity === 1){
            state.items.splice(index, 1)
        }
        else{
            state.items[index].quantity --;
            state.items[index].totalPrice = state.items[index].totalPrice - state.items[index].price
        }
    }
}
});

export default dataCartSlice
export const dataCartActions = dataCartSlice.actions; 