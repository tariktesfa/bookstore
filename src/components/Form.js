import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';
import generateId from './helper';

const Form = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    titleInput: '',
    selectedValue: 'none',
    selectedText: '',
  });

  const handleTitleChange = (e) => {
    setForm({
      ...form,
      titleInput: e.target.value,
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

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: generateId(),
      title: form.titleInput,
      category: form.selectedText,
    };
    dispatch(postBook(newBook));
  };
  return (
    <div className="book-form">
      <hr className="separator" />
      <h3 className="add-book">ADD NEW BOOK</h3>
      <form onSubmit={(e) => submitBookToStore(e)} className="form" required>
        <br />
        <input
          type="text"
          id="book"
          placeholder="Book title"
          value={form.titleInput}
          onChange={handleTitleChange}
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
          <option value="education">Education</option>
          <option value="history">History</option>
          <option value="entertainment">Entertainment</option>
          <option value="mystery">Fiction</option>
          <option value="romance">Crime</option>
          <option value="fantasy">True Story</option>
        </select>
        <button className="btn-add" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default Form;
