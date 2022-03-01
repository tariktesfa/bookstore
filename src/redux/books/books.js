const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = (info) => ({
  type: ADD_BOOK,
  payload: info,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const initialBookState = [];

const bookReducer = (state = initialBookState, action) => {
  if (action.type === ADD_BOOK) {
    return [
      ...state,
      {
        book: action.payload,
      },
    ];
  }
  if (action.type === REMOVE_BOOK) {
    const newBookState = state.filter((books) => books.book.id !== +action.payload);
    for (let i = +action.payload; i < newBookState.length; i += 1) {
      newBookState[i].book.id -= 1;
    }
    return newBookState;
  }
  return state;
};

export default bookReducer;
