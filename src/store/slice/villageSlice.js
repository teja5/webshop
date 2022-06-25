import { createSlice } from "@reduxjs/toolkit";

const initialState = { villages: [] };

const villageSlice = createSlice({
    name: 'village',
    initialState,
    reducers: {

        getUsers(state, action) {
            state.villages = action.payload
        },

        addVillage(state, action) {
            // console.log('Add Action')
            state.villages.push(action.payload)
            console.log(state.villages.length)
        }
    }
})

export const villageActions = villageSlice.actions

export default villageSlice.reducer;