import { createSlice } from "@reduxjs/toolkit";

const initialState = { customers: [] };

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer(state, action) {
            // console.log('Add Action')
            state.customers.push(action.payload)
        }
    }
})

export const customerActions = customerSlice.actions

export default customerSlice.reducer;