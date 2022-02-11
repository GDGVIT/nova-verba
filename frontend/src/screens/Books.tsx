import React, { useState, useEffect } from 'react'
import Book from './Book'

import '../styles/books.css'
interface BooksProps {
  getBackFunction: (arg0: number) => void
}

interface bookObject {
  id: number,
  bookName: string,
  wordCount: number
}

const Books = ({ getBackFunction }: BooksProps) => {
  const [books, setBooks] = useState<bookObject[]>([])

  const fetchBooks = () => {
    setBooks(() => {
      return (
        [
          {id: 0, bookName: 'The Book Thief', wordCount: 10},
          {id: 1, bookName: 'The Art of War', wordCount: 11},
          {id: 2, bookName: 'Freakonomics', wordCount: 20},
        ]
      )
    })
  }

  useEffect(fetchBooks, [])

  return (
    <main className='screen'>
      <header className='books-header'>
        <span className='book-title' >Books</span>
        <button className='book-back-button' onClick={() => getBackFunction(0)}>Go back</button>
      </header>
      <section id='books-cards'>
        {books && (
          books.map((b) => <Book key={b.id} uiType={0} bookName={b.bookName} wordCount={b.wordCount} />)
        )}
      </section>
    </main>
  )
}

export default Books
