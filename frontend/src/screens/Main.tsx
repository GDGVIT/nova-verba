import React, { useState } from 'react'

import SearchResults from './SearchResults'
import Books from './Books'

import StreakCard from '../components/StreakCard'
import ViewBookPageButton from '../components/ViewBookPageButton'

import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import '../styles/main.css'

const Main = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(() => e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateCurrentScreen(2)
  }

  const [currentScreen, setCurrentScreen] = useState(0)

  const updateCurrentScreen = (newScreen:number) => {
    setCurrentScreen(() => newScreen)
  }

  return (
    <>
      {currentScreen === 0 && (
        <main id='main-screen' className='screen' >
          <form id='search' onSubmit={handleSubmit}>
            <input
              id='search-bar'
              type='text'
              placeholder='Search for a word'
              value={searchQuery}
              onChange={handleSearchQueryChange}
              />
            <input id='search-submit' type='submit' />
          </form>
          <section id='main-screen-cards'>
            <StreakCard
              cardTitle='Week Streak'
              cardText='6 of 7'
              cardIcon={<CircularProgressbar value={66} />}
              optClassName='streak-card week-card'
              />
            <StreakCard
              cardTitle='Highest Streak'
              cardText='40'
              cardIcon={<CircularProgressbar value={66} />}
              optClassName='streak-card high-card'
              />
            <StreakCard
              cardTitle='Your Books'
              cardText='12'
              cardIcon={<ViewBookPageButton onClickFunction={updateCurrentScreen} />}
              optClassName='streak-card main-book-card'
              />
          </section>
        </main>
      )}
      {currentScreen === 1 && (
        <Books getBackFunction={updateCurrentScreen} />
      )}
      {currentScreen === 2 && (
        <SearchResults word={searchQuery} getBackFunction={updateCurrentScreen} />
      )}
    </>
  )
}

export default Main
