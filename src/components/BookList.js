import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import RemoveBook from './RemoveBook';

const BookList = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((store) => store.booksReducer);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const progress = 75;
  const chapter = Math.round(Math.random() * (20 - 0) + 0);

  return (
    <>
      {bookStore.map((book) => (
        <div key={book.id} className="book-card">
          <div className="content">
            <h5 className="category">{book.category}</h5>
            <h3 className="title">
              {book.title}
            </h3>
            <h5>{book.author}</h5>
            <div>
              <div className="links">
                <a href="/#">Comments</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="vl" />
                <a href="/#">
                  <RemoveBook id={book.id} book={book} />
                </a>
                <span className="vl" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/#">Edit</a>
              </div>
            </div>
          </div>
          <div className="completion">
            <div>
              <div className="Oval-2" />
            </div>
            <div>
              <p className="percent">
                {progress}
                %
              </p>
              <h5>Completed</h5>
            </div>
          </div>
          <div className="line-2" />
          <div className="progress">
            <span>CURRENT CHAPTER</span>
            <p className="Current-Lesson">
              Chapter
              {` ${chapter}`}
            </p>
            <button className="Update-progress" type="button">Update Progress</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookList;
