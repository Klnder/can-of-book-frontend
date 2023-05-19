import React from "react";
import { Link } from "react-router-dom";

export default function BookItem({ book, deleteThisBook }) {
  return (
    <article key={book._id} className="book-item">
      <p>
        Title:
        <Link to={`/book/${book._id}`}>{book.title}</Link>
      </p>
      <p>Description: {book.description}</p>
      <p>Status: {book.status}</p>
      <button onClick={() => deleteThisBook(book._id)}>Delete</button>
    </article>
  );
}
