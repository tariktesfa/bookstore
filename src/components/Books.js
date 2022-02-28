const Books = () => (
  <section className="book-container">
    <div className="book-card">
      <div className="book-info">
        <h3 className="book-category">Action</h3>
        <h2 className="book-title">The Hunger Games</h2>
        <h4 className="book-author">Suzane Collins</h4>
        <ul className="book-events">
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="book-progress">
        <h3>
          64%
        </h3>
        <p>Completed</p>
      </div>
      <div className="book-update">
        <h4>CURRENT CHAPTER</h4>
        <p>Chapter 17</p>
        <button className="btn" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  </section>
);

export default Books;
