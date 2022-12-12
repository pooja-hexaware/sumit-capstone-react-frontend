import { configureStore } from '@reduxjs/toolkit'
import capstoneReducer from './main/store/capstoneSlice'

export const store = configureStore({
  reducer: {
    capstone: capstoneReducer
  },
})