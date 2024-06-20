import {globalReducer} from './helpers'
import { createContext } from 'react'

const initialState = {
    totalPrice:null,
    theme:{
        bgColor:'#FFFFFF',
        textColor:'#171829',
        backBgColor:'#f2f5fa'
    }
}

const context = createContext()

export {
    globalReducer,
    initialState,
     context
}