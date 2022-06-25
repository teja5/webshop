import { createSlice } from "@reduxjs/toolkit";

const initialState = { transactions: [] };

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        addTransaction(state, action) {
            // console.log('Add Action')
            state.transactions.push(action.payload)
        }
    }
})

export const transactionActions = transactionSlice.actions

export default transactionSlice.reducer;