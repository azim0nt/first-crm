import {globalReducer} from './helpers'
import { createContext } from 'react'

const initialState = {
    totalPrice:null,
    theme:'light',
    lang: 'en',
    modalWindow:'none'
}

const context = createContext()

export {
    globalReducer,
    initialState,
     context
}