import React from "react";
import BookItem from "./BookItem";

export default function BookList({ books, deleteBook }) {
  let bookList = books.map((book) => {
    return <BookItem book={book} deleteThisBook={deleteBook} />;
  });

  return <div className="books-list">{bookList}</div>;
}
