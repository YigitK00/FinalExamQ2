import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Book = (props) => (
  <div class="list">
    <div class="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div class="desc">
        <h2>
          <Link to={`/show-book/${props._id}`}>{props.title}</Link>
        </h2>
        <h3>{props.author}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  </div>
);

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Error from BookList");
      });
  }, []);

  return (
    <div className="BookList">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Books List</h2>
      </div>
      <div className="col-md-11">
        <Link to="/create-book" className="btn btn-info float-right">
          + Add New Book
        </Link>
        <br />
        <br />
        <hr />
      </div>
      <div className="list">
        {books.map((book) => {
          return <Book key={book._id} keyt={book._id} book={book}></Book>;
        })}
      </div>
    </div>
  );
}
