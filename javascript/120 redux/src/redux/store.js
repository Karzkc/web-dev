import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer, // {/* 4a. forwards action from store to reducer function */}
    //reducer registered inside store
  },
})