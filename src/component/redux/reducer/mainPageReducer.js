import { createSlice } from "@reduxjs/toolkit";

const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState: {
        mainPage:{}
    },
    reducers:{
        addItemMainPage(state,action) {
             state.mainPage[action.payload] = {}
        },
        deleteItemMainPage(state,action) {
            debugger
          delete state.mainPage[action.payload]
       },
        addItemEventCard(state,action) {
            state.mainPage[action.payload.mainPage][action.payload.value] = []
        },
        deleteItemEventCard(state,action) {
          delete state.mainPage[action.payload.mainPage][action.payload.value]
        },
        addParagraph(state,action) {
            debugger
            state.mainPage[action.payload.mainPage][action.payload.value].splice(action.payload.position,0,action.payload.text)
        },
        deleteParagraph(state,action) {
            state.mainPage[action.payload.mainPage][action.payload.value].splice(action.payload.position,1)
        }
    }
})

export const {addItemMainPage,addItemEventCard,addParagraph,deleteItemMainPage,deleteItemEventCard,deleteParagraph} = mainPageSlice.actions;

export default mainPageSlice.reducer;