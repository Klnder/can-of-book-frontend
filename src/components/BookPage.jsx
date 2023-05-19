import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BookPage() {
  const [book, setBook] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
  });
  const { id } = useParams();

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    try {
      const API = `http://localhost:8080/books?_id=${id}`;
      const res = await axios.get(API);
      setBook(res.data[0]);
      setForm({
        title: res.data[0].title,
        description: res.data[0].description,
        status: res.data[0].status,
      });
    } catch (error) {}
  }
  async function updateBook(event) {
    event.preventDefault();
    const API = `http://localhost:8080/books/${id}`;
    await axios.put(API, form);
    getBooks();
  }

  function handleChange(event) {
    const newForm = { ...form, [event.target.name]: event.target.value };
    setForm(newForm);
  }

  return (
    <main>
      <p>Title:{book.title}</p>
      <p>Description: {book.description}</p>
      <p>Status: {book.status}</p>
      <form onSubmit={updateBook}>
        <input type="text" name="title" placeholder="title" onChange={handleChange} value={form.title} />
        <input type="text" name="description" placeholder="description" onChange={handleChange} value={form.description} />
        <input type="text" name="status" placeholder="status" onChange={handleChange} value={form.status} />
        <input type="submit" />
      </form>
    </main>
  );
}
