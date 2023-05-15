import axios from "axios";
import React from "react";
import "./Main.css";
import BookList from "./BookList/BookList";

import { useState } from "react";

export default function Main() {
  const [books, setBooks] = useState("");

  async function getBooks() {
    try {
      const API = `http://localhost:8080/books`;
      const res = await axios.get(API);

      if (res.data) {
        let books = <BookList books={res.data} />;
        setBooks(books);
      }
    } catch (error) {}
  }

  return (
    <main>
      <button onClick={() => getBooks()}>Load books</button>
      {books}
    </main>
  );
}
