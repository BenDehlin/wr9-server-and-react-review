//Our initial state
const initialState = {
    books: [],
    loading: false
}

const SET_BOOKS = "SET_BOOKS"

export function setBooks(books){
    return {
        type: SET_BOOKS,
        payload: books
    }
}



export default function bookReducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case SET_BOOKS:
            return {...state, books: payload}
        default:
            return state
    }
}