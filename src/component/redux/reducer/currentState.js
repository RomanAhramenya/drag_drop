import { createSlice } from "@reduxjs/toolkit";

const currentState = createSlice({
    name: 'currentState',
    initialState:{},
    reducers: {
        addCurrentMainPage(state,action) {
           
            state.mainPage = action.payload
        },
        addCurrentEventCard(state,action) {
            
            state.eventCard = action.payload
        }
    }
})

export const {addCurrentMainPage,addCurrentEventCard} = currentState.actions

export default currentState.reducer