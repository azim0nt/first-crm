function globalReducer(state, payload){
    switch (payload.type){
        case "changeTotalPrice":
            return {...state, totalPrice:payload.totalPrice}
        default:
            return state
    }
}

export {
    globalReducer
}