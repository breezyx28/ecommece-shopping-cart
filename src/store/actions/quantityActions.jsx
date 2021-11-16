export const changeQuantity = (qt) => {

    return (dispatch, getState) => {
        dispatch({type:'CHANGE_QUNATITY', qt: qt})
    }

}