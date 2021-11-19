import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [booktitle, setTitle] = useState('');

  const addTitle = (e) => {
    const booktitle = e.target.value;
    setTitle(booktitle);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const eventCategory = document.getElementById('category');
    const bookcategory = eventCategory.options[eventCategory.selectedIndex].text;
    const newBook = { title: booktitle, category: bookcategory, item_id: uuidv4() };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
    setTitle('');
  };

  return (
    <div className="mx-auto m-4">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore}>
        <input type="text" id="titleId" value={booktitle} onChange={addTitle} placeholder="Book title" />
        <select type="select" id="category">
          <option value="test_1">Learning</option>
          <option value="test_2">Programing</option>
          <option value="test_3">Movies</option>
          <option value="test_4">Novels</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
