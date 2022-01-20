import React, { useState, useEffect } from 'react'

import Login from './screens/Login'
import Header from './components/Header'
import Main from './screens/Main'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const hook = () => {
    const loggedInStatus = localStorage.getItem('loggedIn')
    console.log(loggedInStatus)
    if (loggedInStatus === 'true') {
      setLoggedIn(() => true)
    } else {
      setLoggedIn(() => false)
    }
  }

  useEffect(hook, [])

  return (
    <>
      <Header />
      {loggedIn && (
        <Main />
      )}
      {!loggedIn && (
        <Login setLogin={setLoggedIn}/>
      )}
    </>
  )
}

export default App
