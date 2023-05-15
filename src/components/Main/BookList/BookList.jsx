import React from "react";

export default function BookList({ books }) {
  let bookList = books.map((book) => {
    return (
      <article key={book._id} className="book-item">
        <p>Title: {book.title}</p>
        <p>Description: {book.description}</p>
        <p>Status: {book.status}</p>
      </article>
    );
  });

  return <div className="books-list">{bookList}</div>;
}
