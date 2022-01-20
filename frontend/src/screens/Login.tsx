import React, { useState, Dispatch, SetStateAction } from 'react'

import '../styles/login.css'

interface LoginProps {
  setLogin: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLogin }: LoginProps ) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(() => e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(() => e.target.value)
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLogin(() => true)
  }

  return (
    <main id='login-screen' className='screen'>
      <section id='login-box'>
        <form id='login-form' onSubmit={handleLogin} >
          <input id='login-email' placeholder='Email ID' value={username} onChange={handleUsernameChange} />
          <input id='login-password' type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
          <input id='login-submit-button' type='submit' value='Sign In' readOnly />
        </form>
      </section>
    </main>
  )
}

export default Login
