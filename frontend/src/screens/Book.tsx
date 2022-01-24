import React, { useState } from 'react'

import Word from '../components/Word'

interface BookProps {
  uiType: number
}

const Book = ({ uiType }: BookProps) => {
  const [uiState, setUiState] = useState(uiType)

  const updateUiState = (newState: number) => {
    setUiState(() => newState)
  }

  switch (uiState) {
    case 0:
      return (
        <div onClick={() => updateUiState(1)}>
          <div>Book name</div>
          <div>20 words</div>
        </div>
      )
    default:
      return (
        <main>
          <header>
            Book Title
            <div onClick={() => updateUiState(0)}>Back</div>
          </header>
          <div>
            Sort: A to Z
          </div>
          <div>
            <Word uiType={2} wordName='Good' wordMeaning='This is good stuff'/>
            <Word uiType={2} wordName='Good' wordMeaning='This is good stuff'/>
            <Word uiType={2} wordName='Good' wordMeaning='This is good stuff'/>
            <Word uiType={2} wordName='Good' wordMeaning='This is good stuff'/>
          </div>
        </main>
      )
  }
}

export default Book
