import { CREATE_BOOK_REQUEST_START, CREATE_BOOK_REQUEST_SUCCESS, CREATE_BOOK_REQUEST_FAIL } from '../types'



const createBookReducer = (state, action) => {
    switch(action.type) {
        case CREATE_BOOK_REQUEST_START:
            return {
                loading: true,
                error: false
            } 
        case CREATE_BOOK_REQUEST_SUCCESS:
            return {
                data: action.data,
                loading: false,

            }
        case CREATE_BOOK_REQUEST_FAIL:
            return {
                loading: false,
                error: action.error
            }  
        default:
            return state; 
    }
}

export {createBookReducer}

