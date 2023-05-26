import React from 'react'
import { redirect } from 'react-router-dom'

const Home = () => {
  redirect('/login')
  return <div>Home</div>
}

export default Home
