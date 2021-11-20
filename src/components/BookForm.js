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
    dispatch(addBook(newBook));
    setTitle('');
  };

  return (
    <div className="form-div">
      <span className="Text-Style-10">ADD NEW BOOK</span>
      <form onSubmit={submitBookToStore}>
        <input type="text" id="titleId" value={booktitle} onChange={addTitle} placeholder="Book title" />
        <select type="select" id="category">
          <option value="Sci-Fi">Sci-fi</option>
          <option value="Learning">Learning</option>
          <option value="Programming">Programming</option>
          <option value="Drama">Drama</option>
          <option value="Thriller">Thriller</option>
          <option value="Action">Action</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
