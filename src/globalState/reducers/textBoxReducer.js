const initialState = '';

const TextBoxReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addTask":
            return action.payload;
        case "removedTask":
            return '';
        default:
            return state
    }
}

export default TextBoxReducer