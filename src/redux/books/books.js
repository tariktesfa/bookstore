import axios from 'axios';

const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
const POST_BOOK_SUCCESS = 'POST_BOOK_SUCCESS';
const REMOVE_BOOK_SUCCESS = 'REMOVE_BOOK_SUCCESS';
const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

const getBooksSuccess = (books) => ({
  type: GET_BOOKS_SUCCESS,
  payload: books,
});

const postBookSuccess = () => ({
  type: POST_BOOK_SUCCESS,
});

const removeBookSuccess = () => ({
  type: REMOVE_BOOK_SUCCESS,
});

const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

const initialBookState = {
  loading: false,
  books: {},
  error: '',
};

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: '',
      };

    case POST_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };

    case REMOVE_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };

    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        books: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export const fetchBooks = () => (dispatch) => {
  dispatch(fetchBooksRequest());
  axios
    .get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cInEmixJXZrXEKSXswbc/books',
    )
    .then((response) => {
      dispatch(getBooksSuccess(response.data));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchBooksFailure(errorMsg));
    });
};

export const postBook = (book) => (dispatch) => {
  dispatch(fetchBooksRequest());
  axios
    .post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cInEmixJXZrXEKSXswbc/books',
      book,
    )
    .then(() => {
      dispatch(postBookSuccess());
      dispatch(fetchBooks());
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchBooksFailure(errorMsg));
    });
};

export const removeBook = (id) => (dispatch) => {
  dispatch(fetchBooksRequest());
  axios
    .delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cInEmixJXZrXEKSXswbc/books/${id}`,
      {
        item_id: id,
      },
    )
    .then(() => {
      dispatch(removeBookSuccess());
      dispatch(fetchBooks());
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchBooksFailure(errorMsg));
    });
};

export default bookReducer;
