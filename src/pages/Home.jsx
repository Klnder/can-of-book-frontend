import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import BookList from "../components/Book/BookList";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    try {
      const API = `http://localhost:8080/books`;
      const res = await axios.get(API);

      if (res.data) {
        let books = <BookList books={res.data} deleteBook={deleteBook} />;
        setBooks(books);
      }
    } catch (error) {}
  }

  async function deleteBook(id) {
    try {
      const API = `http://localhost:8080/books/${id}`;
      await axios.delete(API);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  }
  async function postBook(event) {
    event.preventDefault();
    const API = `http://localhost:8080/books`;
    await axios.post(API, form);
    getBooks();
    setForm({
      title: "",
      description: "",
      status: "",
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <main>
      <h1>Books</h1>
      <form onSubmit={postBook}>
        <fieldset>
          <legend>Add a book</legend>
          <input type="text" name="title" placeholder="title" onChange={handleChange} value={form.title} />
          <input type="text" name="description" placeholder="description" onChange={handleChange} value={form.description} />
          <input type="text" name="status" placeholder="status" onChange={handleChange} value={form.status} />
          <input type="submit" />
        </fieldset>
      </form>
      {books}
    </main>
  );
}
