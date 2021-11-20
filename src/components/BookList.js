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
    <div className="card card-style mx-auto my-2">
      {bookStore.map((book) => (
        <div key={book.id} className="d-flex flex-row align-items-center justify-content-between my-2">
          <div className="d-flex flex-column px-3">
            <h5 className="text-secondary">{book.category}</h5>
            <h3>
              {book.title}
            </h3>
            <h5 className="author text-primary fw-light">{book.author}</h5>
            <div>
              <ul className="d-flex flex-row text-decoration-none navbar-nav">
                <li className="text-primary fw-light me-2">Comments</li>
                <li> | </li>
                <li>
                  <RemoveBook id={book.id} book={book} />
                </li>
                <li> | </li>
                <li className="text-primary fw-light mx-2">Edit</li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-row px-3">
            <div className="m-2"><CircularProgress color="primary" variant="determinate" value={progress} /></div>
            <div className="flex-column">
              <h2>
                {progress}
                %
              </h2>
              <h5 className="completed">Completed</h5>
            </div>
          </div>
          <div className="px-3">
            <h5>CURRENT CHAPTER</h5>
            <p>
              Chapter
              {` ${chapter}`}
            </p>
            <button type="button" className="btn btn-primary">Update Progress</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
