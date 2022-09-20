import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className='logoContainer'>
        <h1 className='logo'>NOTES</h1>
        <p className='text-m text-gt'>For Every Student</p>
    </Link>
  )
}

export default Logo