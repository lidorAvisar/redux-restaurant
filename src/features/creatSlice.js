import { createSlice } from "@reduxjs/toolkit";
const KEY_LOCAL = 'resCreate';
const initState=localStorage[KEY_LOCAL]?JSON.parse(localStorage[KEY_LOCAL]) : {
    createArr: []
}

const creatSlice=createSlice({
    name:'creat',
    initialState:initState,
    reducers:{
        addNewRes: (state, action) => {
            state.createArr.push(action.payload.createItem);
            saveToLocal(state);
        },
        // updateRes: (state, action) => {
        //     state.create = [];
        //     saveToLocal(state);
        // },
        deleteRes: (state, action) => {
            state.createArr = state.createArr.filter(
                (item) => item.id !== action.payload.delId
            );
            saveToLocal(state);
        }
    }
})

const saveToLocal = (state) => {
    localStorage.setItem(KEY_LOCAL, JSON.stringify(state))
}

export const {addNewRes,deleteRes}=creatSlice.actions;
export default creatSlice.reducer;