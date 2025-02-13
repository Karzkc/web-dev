import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0 /* 7. state value updation */
  },
  reducers: { //all actions
    increment: (state) => { {/* 5. Reducer function */}
 
      state.value += 1 /* 6. Logic execution */ 
      {/* 4b. forwards state from reducer to store  */}
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset : (state)=>{
      state.value = 0
    },
    incrementByAmount: (state, action) => { //reducer function 
      let amount = Number(action.payload)
      state.value += amount
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions

export default counterSlice.reducer