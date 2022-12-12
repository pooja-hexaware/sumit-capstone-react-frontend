import { createSlice } from '@reduxjs/toolkit'

export const capstoneSlice = createSlice({
  name: 'capstone',
  initialState: {
    menuData: [],
    cartData: [],
    storeData: [],
    currentMenuData: {},
    itemCount: 0,
    toppingPrice: 0,
    menuPrice: 0,
    showTopping: false
  },
  reducers: {
    setMenuData: (state, action) => {
      state.menuData = action.payload;
    },
    setCartData: (state, action) => {
      state.cartData = action.payload;
    },
    setItemCount: (s, a) => {
      s.itemCount = a.payload;
    },
    setCurrentMenuData: (s, a) => {
      s.currentMenuData = a.payload;
    },
    setToppingPrice: (s, a) => {
      s.toppingPrice = a.payload;
    },
    setMenuPrice: (s, a) => {
      s.menuPrice = a.payload;
    },
    setStoreData: (s, a) => {
      s.storeData = a.payload;
    }
  },
})

// TODO change this file to accomodate capstone
export const { setMenuData, setCartData, setItemCount, setCurrentMenuData, setToppingPrice, setMenuPrice, setStoreData } = capstoneSlice.actions

export default capstoneSlice.reducer