import React from 'react';

const BookList = () => (
  <div className="d-flex flex-row justify-content-center">
    <div className="d-flex flex-column px-3">
      <h3>Lorem</h3>
      <h1>Lorem Ipsun</h1>
      <span>Subtittle</span>
      <div>
        <ul>
          <li>Comments</li>
          <li>Remove</li>
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
