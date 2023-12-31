import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, actions) => {
            const newItem = actions.payload
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id);

            state.totalQuantity++

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity));
        },
        deleteItem:(state,actions)=>{
            const id=actions.payload
            const existingItem=state.cartItem.find(item=>item.id===id)

            if(existingItem){
                state.cartItems=state.cartItems.filter(item=>item.id !==id)
                state.totalQuantity=state.totalQuantity-existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity,0).toFixed(2);
        },
    },
});

export const cartAcction = cartSlice.actions;

export default cartSlice.reducer;