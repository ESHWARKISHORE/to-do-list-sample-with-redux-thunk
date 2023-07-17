
export const textBoxValueChange = (value) => {
    return (dispatch) => {
        dispatch({
            type: "add_value",
            payload: value,
        })
    }
}

export const emptyTextBoxValue = (value) => {
    return (dispatch) => {
        dispatch({
            type: 'remove_value',
            payload: value
        })
    }
}