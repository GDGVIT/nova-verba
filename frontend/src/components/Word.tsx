import React, { useState } from 'react'

interface BookProps {
  uiType: number,
  wordName: string,
  wordMeaning: string
}

const Word = ({ uiType, wordName, wordMeaning }: BookProps) => {
  const [uiState, setUiState] = useState(uiType)

  const updateUiState = (newState: number) => {
    setUiState(() => newState)
  }

  switch (uiState) {
    case 0:
      return (
        <div>
          <header>
            {wordName}
          </header>
          <div>
            {wordMeaning}
          </div>
          <button>
            Save
          </button>
        </div>
      )
    case 1:
      return (
        <div>
          <div>{wordName}</div>
          <div>{wordMeaning}</div>
          <div onClick={() => updateUiState(2)}>collapse</div>
        </div>
      )
    default:
      return (
        <div className='word-row' onClick={()=> updateUiState(1)}>{wordName}</div>
      )
  }
}

export default Word
