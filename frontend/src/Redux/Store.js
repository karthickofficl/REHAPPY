import {configureStore} from '@reduxjs/toolkit'
import ReduxSlice from './Slice'


export const Store = configureStore({
    reducer:{
        Rehabpy:ReduxSlice
    }
})