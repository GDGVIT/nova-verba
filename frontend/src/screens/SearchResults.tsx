import React, { useState, useEffect } from 'react'

import Word from '../components/Word'

interface SearchResultsProps {
  word: string
}

interface SearchResultInt {
  id: number,
  wordName: string,
  wordMeaning: string
}

const SearchResults = ({ word }: SearchResultsProps) => {
  const [searchResults, setSearchResults] = useState<SearchResultInt[]>([])

  const fetchSearchResults = () => {
    setSearchResults(
        [
          {id: 0, wordName: 'shite', wordMeaning: 'shite'},
          {id: 1, wordName: 'shite', wordMeaning: 'shite shite'},
          {id: 2, wordName: 'shite', wordMeaning: 'shite shite shite'}
        ]
      )
  }

  useEffect(fetchSearchResults, [])
  return (
    <div>
      <div>
        Search results ffor
      </div>
      <div>
        "{word}"
      </div>
        {searchResults && (
          searchResults.map((res) =>
            <Word key ={res.id} uiType={0} wordName={res.wordName} wordMeaning={res.wordMeaning} />
          )
        )}
    </div>
  )
}

export default SearchResults
