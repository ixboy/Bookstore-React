import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import './css/BookList.css';
import RemoveBook from './RemoveBook';

const BookList = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((store) => store.booksReducer);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const progress = Math.round(Math.random() * (100 - 0) + 0);
  const chapter = Math.round(Math.random() * (20 - 0) + 0);

  return (
    <div className="book-card">
      {bookStore.map((book) => (
        <div key={book.id}>
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
            <div><CircularProgress color="primary" variant="determinate" value={progress} /></div>
            <div>
              <p>
                {progress}
                %
              </p>
              <h5>Completed</h5>
            </div>
          </div>
          <div className="progress">
            <h5>CURRENT CHAPTER</h5>
            <p>
              Chapter
              {` ${chapter}`}
            </p>
            <button type="button">Update Progress</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
