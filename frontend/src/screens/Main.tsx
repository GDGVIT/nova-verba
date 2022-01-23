import React, { useState } from 'react'

import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import StreakCard from '../components/StreakCard'
import ViewBookPageButton from '../components/ViewBookPageButton'

import '../styles/main.css'

const Main = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(() => e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <main id='main-screen' className='screen' >
      <form id='search' onSubmit={handleSubmit}>
        <input id='search-bar' type='text' placeholder='Search for a word' value={searchQuery} onChange={handleSearchQueryChange} />
        <input id='search-submit' type='submit' />
      </form>
      <section id='main-screen-cards'>
        <StreakCard cardTitle='Week Streak' cardText='6 of 7' cardIcon={<CircularProgressbar value={66} />}  optClassName='streak-card week-card'/>
        <StreakCard cardTitle='Highest Streak' cardText='40' cardIcon={<CircularProgressbar value={66} />} optClassName='streak-card high-card' />
        <StreakCard cardTitle='Your Books' cardText='12' cardIcon={<ViewBookPageButton />} optClassName='streak-card book-card'/>
      </section>
    </main>
  )
}

export default Main
