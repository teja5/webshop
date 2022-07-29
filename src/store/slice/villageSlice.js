import { createSlice } from "@reduxjs/toolkit";

const initialState = { villages: [], name: '' };

const villageSlice = createSlice({
    name: 'village',
    initialState,
    reducers: {

        getUsers(state, action) {
            state.villages = action.payload
        },

        addVillage(state, action) {
            state.villages.push(action.payload)
            console.log(state.villages.length)
            addVillage(state, action.payload)
        }
    }
})

async function addVillage(state, name) {

    console.log(name + ' -> Added ')

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        // body: JSON.stringify(requetJson)
        body: JSON.stringify({
            village_id: 0,
            name: name
        })
    }
    const response = await fetch('http://localhost:8080/shop/village', requestOptions);
    const data = await response.json();
    // state.name = ""
    // await (data) => {
    // setName(JSON.parse(data.village).village_id + " " + JSON.parse(data.village).name + "  " + data.status)
    // };

}


export const villageActions = villageSlice.actions

export default villageSlice.reducer;