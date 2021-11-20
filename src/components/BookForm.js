import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [booktitle, setTitle] = useState('');
  const [bookauthor, setAuthor] = useState('');

  const addAuthor = (e) => {
    const bookauthor = e.target.value;
    setAuthor(bookauthor);
  };

  const addTitle = (e) => {
    const booktitle = e.target.value;
    setTitle(booktitle);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const eventCategory = document.getElementById('category');
    const bookcategory = eventCategory.options[eventCategory.selectedIndex].text;
    const newBook = {
      title: booktitle, category: bookcategory, item_id: uuidv4(), author: bookauthor,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  const myStyle = {
    fontSize: '1rem',
    fontFamily: ['Montserrat', 'sans-serif'],
  };

  const myStyle2 = {
    width: '30%',
    height: '2.813rem',
    padding: '1rem',
    borderRadius: '4px',
    border: 'solid 1px white',
    backgroundColor: '#fff',
  };

  return (
    <div className="card-style mx-auto m-4">
      <h2 style={myStyle} className="fw-bold text-secondary">ADD NEW BOOK</h2>

      <form onSubmit={submitBookToStore}>
        <input type="text" id="titleId" value={booktitle} onChange={addTitle} style={myStyle2} placeholder="Book title" />
        <input type="text" id="authorId" value={bookauthor} onChange={addAuthor} style={myStyle2} placeholder="Book Author" />
        <select type="select" className="p-0 w-25" id="category" style={myStyle2}>
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
