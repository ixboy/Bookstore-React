import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const RemoveBook = (book) => {
  const { id } = book;
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBook(id));
  return (
    <button className="remove" type="button" onClick={remove}> Remove</button>
  );
};

export default RemoveBook;
