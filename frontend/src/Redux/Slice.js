import { createSlice } from "@reduxjs/toolkit"

const initialState={
    selectLocation:{
      location:[],
    },
    selectCondition:{
        conditions:[]
    }
}


export const ReduxSlice = createSlice({
    name:'Rehabpy',
    initialState:initialState,
    reducers:{
        selectList:(state,action)=>{
            state.selectLocation.location= action.payload.location
            state.selectCondition.conditions=action.payload.conditions
        }
    }
})

export const {selectList} = ReduxSlice.actions
export default ReduxSlice.reducer