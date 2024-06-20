function globalReducer(state, payload) {
    switch (payload.type) {
        case "changeTotalPrice":
            return { ...state, totalPrice: payload.totalPrice };
        case 'changeTheme': // Corrected action type
            return { ...state, theme: payload.theme };
        default:
            return state;
    }
}

export {
    globalReducer
};
