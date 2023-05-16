import React from "react";

export default function BookList({ books, deleteBook }) {
  let bookList = books.map((book) => {
    return (
      <article key={book._id} className="book-item">
        <p>Title: {book.title}</p>
        <p>Description: {book.description}</p>
        <p>Status: {book.status}</p>
        <button onClick={() => deleteBook(book._id)}>Delete</button>
      </article>
    );
  });

  return <div className="books-list">{bookList}</div>;
}
