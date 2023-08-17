const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return [...state,action.payload];
    },
    removeItems:(state,action)=>{
      
    }
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
