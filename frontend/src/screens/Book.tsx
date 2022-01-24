import React, { useState } from 'react'

import Header from '../components/Header'
import Word from '../components/Word'

interface BookProps {
  uiType: number,
  bookName: string,
  wordCount: number
}

const Book = ({ uiType, bookName, wordCount=0 }: BookProps) => {
  const [uiState, setUiState] = useState(uiType)
  // uiState 0 => Card
  // uiState 1 => Screen
  const updateUiState = (newState: number) => {
    setUiState(() => newState)
  }

  switch (uiState) {
    case 0:
      return (
        <div className='book-card' onClick={() => updateUiState(1)}>
          <div className='book-card-name'>{bookName}</div>
          <div className='book-card-wordcount'>{wordCount} words</div>
        </div>
      )
    default:
      return (
        <div className='overlay'>
          <Header />
          <main className='screen'>
            <header className='books-header book-header'>
              <span className='book-title' >{bookName}</span>
              <button className='book-back-button' onClick={() => updateUiState(0)}>Back</button>
            </header>
            <div className='sort'>
              Sort: A to Z
            </div>
            <div>
              <Word uiType={2} wordName='Good' wordMeaning='This is good stuff'/>
              <Word uiType={2} wordName='Good' wordMeaning='This is good stuff'/>
              <Word uiType={2} wordName='Good' wordMeaning='This is good stuff'/>
              <Word uiType={2} wordName='Good' wordMeaning='This is good stuff'/>
            </div>
          </main>
        </div>
      )
  }
}

export default Book
