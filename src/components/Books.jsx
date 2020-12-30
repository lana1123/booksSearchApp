import React, { useState } from "react";
import Book from './Book';
import {BOOKS_PER_PAGE} from '../utility/constants';

const Books = ({books, page}) => {
    const [bookStatus, setBookStatus] = useState(Array(8).fill(false));
    const [isFlipped, setIsFlipped] = useState(false);
    const startIndex = ( page - 1) * BOOKS_PER_PAGE;
    const selectedBooks = books.slice(startIndex, startIndex + BOOKS_PER_PAGE);

    const handleCardFlip = (index) => {
        const bookStatusCopy = [...bookStatus];

        console.log(bookStatusCopy);
        if(bookStatusCopy[index]) {
            console.log("HERE");
            bookStatusCopy.fill(false);
            setIsFlipped(!isFlipped);
        }
        else {
            bookStatusCopy.fill(false);
            bookStatusCopy[index] = true;
        }

        setBookStatus(bookStatusCopy);   
      };

    return (
        <div className="book-list">
        { selectedBooks.map((book, index) =>
          <Book key={book.id} book={book} page={page} handleCardFlip={() => handleCardFlip(index)} isFlipped={bookStatus[index]}/>
        )}
        </div>
    )
}

export default Books
