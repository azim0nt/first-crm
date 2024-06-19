import {globalReducer} from './helpers'
import { createContext } from 'react'

const initialState = {
    totalPrice:null
}

const context = createContext()

export {
    globalReducer,
    initialState,
     context
}