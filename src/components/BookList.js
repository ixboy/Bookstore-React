import React from 'react';

const BookList = () => (
  <div className="d-flex flex-row justify-content-center border">
    <div className="d-flex flex-column px-3">
      <h3>Programming</h3>
      <h1>React for Dummies</h1>
      <span>Author&apos;s name</span>
      <div>
        <ul>
          <li>Comments</li>
          <li>
            <button type="button" className="btn btn-primary">Remove Book</button>
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
);

export default BookList;
