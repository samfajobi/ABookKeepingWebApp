import * as actionTypes from './types'


export const createBook = () => {
    return {
        type: actionTypes.CREATE_BOOK_REQUEST_START
    }
}

export const createBookSuccess = (data) => {
    return {
        type: actionTypes.CREATE_BOOK_REQUEST_SUCCESS,
        payload: data
    }
} 


export const createBookFail = () => {
    return {
        type: actionTypes.CREATE_BOOK_REQUEST_FAIL,
        error: error
    }
}


export const fetchBookDatas = () => {
    return dispatch => {
        dispatch(createBook());
    }
}