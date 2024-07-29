function globalReducer(state, payload) {
    switch (payload.type) {
        case "changeTotalPrice":
            return { ...state, totalPrice: payload.totalPrice };
        case 'changeTheme': // Corrected action type
            return { ...state, theme: payload.theme };
        case "changeModalDisplay":
            return { ...state, modalWindow: payload.modalWindow }
        case "CHANGE_LANG":
            return { ...state, lang: payload.currentLanguage }
        case "LOAD_PROFILE":
            return {...state, profile:payload.profile}
        default:
            return state;
    }
}

export {
    globalReducer
};
