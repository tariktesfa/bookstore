import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import progressBar from '../images/progress_bar.png';

const Books = () => {
  const booksState = useSelector((state) => state.bookReducer.books);
  const booksArray = Object.values(booksState);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <section className="books-section">
      {booksArray.map((books, index) => (
        <div key={Object.keys(booksState)[index]} className="book-card">
          <div className="book-info">
            <h3 className="book-category">{books[0].category}</h3>
            <h2 className="book-title">{books[0].title}</h2>
            <h4 className="book-author">Tarikwa Tesfa</h4>
            <ul className="book-events">
              <button type="button">Comments</button>
              <button
                type="button"
                onClick={(e) => remove(e.target.id)}
                id={Object.keys(booksState)[index]}
              >
                Remove
              </button>
              <button type="button">Edit</button>
            </ul>
          </div>
          <div className="book-completion">
            <img className="book-image" src={progressBar} alt="Progress Bar" />
            <div className="book-stats">
              <span className="book-progress">64%</span>
              <br />
              <span className="book-completed">Completed</span>
            </div>
          </div>
          <div className="line" />
          <div className="book-update">
            <h4 className="book-current">CURRENT CHAPTER</h4>
            <p className="book-chapter">Chapter 17</p>
            <button className="btn" type="button">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Books;
