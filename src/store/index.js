import { createSlice, configureStore } from "@reduxjs/toolkit";
import villageReducer from "./slice/villageSlice";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        }
    }
})

// const counterReducer = (state = { counter: 0 }, action) => {

//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1
//         }
//     }

//     if (action.type === 'incrementby5') {
//         return {
//             counter: state.counter + action.amount
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1
//         }
//     }

//     return state
// }

const store = configureStore({
    reducer: { counter: counterSlice.reducer, village: villageReducer }
});

export const counterActions = counterSlice.actions

export default store;