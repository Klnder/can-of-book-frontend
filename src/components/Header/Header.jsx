import React from "react";
import "./Header.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Can of books</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>
  );
}
