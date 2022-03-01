import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import store from '../redux/configureStore';

const Form = () => {
  const [form, setForm] = useState({
    titleInput: '',
    authorInput: '',
    selectedValue: 'none',
    selectedText: '',
  });

  const handleTitleChange = (e) => {
    setForm({
      ...form,
      titleInput: e.target.value,
    });
    form.reset();
  };

  const handleAuthorChange = (e) => {
    setForm({
      ...form,
      authorInput: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    const index = e.target.selectedIndex;
    setForm({
      ...form,
      selectedValue: e.target.value,
      selectedText: e.target[index].innerHTML,
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: store.getState().bookReducer.length,
      title: form.titleInput,
      author: form.authorInput,
      category: form.selectedText,
    };

    dispatch(addBook(newBook));
    form.reset();
  };
  return (
    <form onSubmit={(e) => submitBookToStore(e)} className="book-form" required>
      <label htmlFor="book">
        ADD NEW BOOK
        <br />
        <input
          type="text"
          id="book"
          placeholder="Book title"
          value={form.titleInput}
          onChange={handleTitleChange}
          required
        />
      </label>
      <input
        type="text"
        id="author"
        placeholder="Book author"
        value={form.authorInput}
        onChange={handleAuthorChange}
        required
      />
      <select
        value={form.selectedValue}
        onChange={handleSelectChange}
        name="categories"
        id="categories"
        required
      >
        <option value="none" disabled>
          Category
        </option>
        <option value="education">Education and Teaching</option>
        <option value="history">History</option>
      </select>
      <button className="btn" type="submit">
        ADD BOOK
      </button>
    </form>
  );
};

export default Form;
