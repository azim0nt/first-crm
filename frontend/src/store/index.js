import {globalReducer} from './helpers'
import { createContext } from 'react'

const initialState = {
    totalPrice:null,
    theme:'light',
    lang: 'en',
    url : "http://192.168.100.11:4100/",
    profile:{}
}

const context = createContext()

export {
    globalReducer,
    initialState,
     context
}