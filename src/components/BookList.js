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

  return (
    <>
      {bookStore.map((book) => (
        <div key={book.id} className="d-flex flex-row justify-content-center border">
          <div className="d-flex flex-column px-3">
            <h3>Category</h3>
            <h1>
              {book.title}
            </h1>
            <span>
              {book.author}
            </span>
            <div>
              <ul>
                <li>Comments</li>
                <li>
                  <RemoveBook id={book.id} book={book} />
                </li>
                <li>Edit</li>
              </ul>
            </div>
          </div>
          <div className="px-3">
            <div>Animated Circle</div>
            <div>XX%</div>
            <h4>Completed</h4>
          </div>
          <div className="px-3">
            <h3>CURRENT CHAPTER</h3>
            <p>Chapter 17</p>
            <button type="button" className="btn btn-primary">Update Progress</button>
          </div>
        </div>
      ))}

    </>

  );
};

export default BookList;
