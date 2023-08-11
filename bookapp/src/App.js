import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookList from "./components/bookList";
import CreateBook from "./components/addbook";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<BookList />} />
          <Route path="/create-book" exact element={<CreateBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
