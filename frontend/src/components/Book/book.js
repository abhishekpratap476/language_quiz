import React from 'react';
import "./book.css";

const BookStore = () => {
  return (
    <div className="containers">
      <header >
        <div id="title"><h2>QuizLet</h2></div>
        <nav >
          <a href="/home" >Home</a>
          <a href="/corce" >Quiz</a>
          <a href="/book" >Book Store</a>
          <a href="/translator" >Translator</a>
        </nav>
      </header>
      <h1>Book List</h1>

      {/* Book list display */}
      <div id="book-list">
        {/* Book entries */}
        <div className="book-entry">
          <h3>English To Hindi Sentence</h3>
          <p><strong>Author:</strong> Harper Lee</p>
          <p><a href="https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird" target="_blank" rel="noopener noreferrer">View Reference</a></p>
        </div>

        <div className="book-entry">
          <h3>1984</h3>
          <p><strong>Author:</strong> George Orwell</p>
          <p><a href="https://en.wikipedia.org/wiki/Nineteen_Eighty-Four" target="_blank" rel="noopener noreferrer">View Reference</a></p>
        </div>

        <div className="book-entry">
          <h3>The Great Gatsby</h3>
          <p><strong>Author:</strong> F. Scott Fitzgerald</p>
          <p><a href="https://en.wikipedia.org/wiki/The_Great_Gatsby" target="_blank" rel="noopener noreferrer">View Reference</a></p>
        </div>

        <div className="book-entry">
          <h3>The Catcher in the Rye</h3>
          <p><strong>Author:</strong> J.D. Salinger</p>
          <p><a href="https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye" target="_blank" rel="noopener noreferrer">View Reference</a></p>
        </div>

        {/* Add more books as needed */}
      </div>
    </div>
  );
};

export default BookStore;