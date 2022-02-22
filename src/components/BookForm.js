import React from 'react';

const AddBook = () => (
  <div className="mx-auto m-4">
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <select type="select">
        <option value="test">Learning</option>
        <option value="test">Programing</option>
        <option value="test">Movies</option>
        <option value="test">Novels</option>
        <option value="test">Comic</option>
      </select>
      <input type="submit" value="Add Book" />
    </form>
  </div>
);

export default AddBook;
