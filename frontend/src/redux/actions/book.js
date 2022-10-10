import * as actionTypes from '../redux/types'
import axios from 'axios'

// export const createBook = () => {
//     return {
//         type: actionTypes.CREATE_BOOK_REQUEST_START
//     }
// }

// export const createBookSuccess = (data) => {
//     return {
//         type: actionTypes.CREATE_BOOK_REQUEST_SUCCESS,
//         payload: data
//     }
// } 


// export const createBookFail = () => {
//     return {
//         type: actionTypes.CREATE_BOOK_REQUEST_FAIL,
//         error: error
//     }
// }

// // call to fetch Data
// export const fetchBookDatas = () => {
//     return dispatch => {
//         dispatch(createBook());
//     }
// }



const createBookAction = (bookData) => {
    return async dispatch => {
        try{
             dispatch({ 
                type: actionTypes.CREATE_BOOK_REQUEST_START,

            });

            const { data } = await axios.post('api/books', bookData)

            dispatch({
                type: actionTypes.CREATE_BOOK_REQUEST_SUCCESS,
                payload: data
            });


        } catch(error) {
            dispatch({  
                type: actionTypes.CREATE_BOOK_REQUEST_FAIL,
                error: error.response && error.response.data.message
            }) 
        }
    }
}