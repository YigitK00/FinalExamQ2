import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreateBook() {
  const [title, setTitle] = useState(``);
  const [author, setAuthor] = useState(``);
  const [description, setDescription] = useState(``);

  const onSubmit = (e) => {
    e.preventDefault();
    const bookvar = { title: title, author: author, description: description };

    axios.post("http://localhost:3000/create-book", bookvar).then((res) => {
      window.location = "/";
    });
  };

  return (
    <div class="CreateBook">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <br />
            <Link class="btn btn-info float-left" to="/">
              Show BooK List
            </Link>
          </div>
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>
            <form onSubmit={onSubmit} novalidate="">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  class="form-control"
                  value=""
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  class="form-control"
                  value=""
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  class="form-control"
                  value=""
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
