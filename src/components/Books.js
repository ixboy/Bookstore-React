import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => (
  <div className="d-flex flex-column justify-content-center mx-4">
    <BookList />
    <div className="Line" />
    <BookForm />
  </div>
);

export default Books;
