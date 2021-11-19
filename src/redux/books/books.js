const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const KEY = 'bSUgL9iqstB9HZm5kQ4r';
const API = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${KEY}/books`;

const initialState = [];

const deleteBook = async (id) => {
  await fetch(`${API}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(action.payload),
      });
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      deleteBook(action.payload);
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
