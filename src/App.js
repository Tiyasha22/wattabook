import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };
  const editBookById = (id, newBookTitle) => {
    const updatedBookList = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newBookTitle };
      }
      return book;
    });
    setBooks(updatedBookList);
  };
  const deleteBookById = (id) => {
    const updatedArr = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedArr);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
