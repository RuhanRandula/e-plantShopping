import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add item to the cart
    addItem: (state, action) => {
      const newItem = action.payload; // The plant object to add
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // Remove item from the cart
    removeItem: (state, action) => {
      const itemName = action.payload; // The name of the item to remove
      state.items = state.items.filter(item => item.name !== itemName);
    },

    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Extract name and new quantity
      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        // Update the quantity if the item exists
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export the action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer
export default CartSlice.reducer;