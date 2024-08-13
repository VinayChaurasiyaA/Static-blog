import React from 'react'
import './style.css'
const Header = () => {
  return (
    <header className='home-header'>
        <h2>Inc. This morning</h2>
        <h1>
            <q>Blog</q>
            {/* <span>"</span> Blog <span>"</span> */}
        </h1>
        <p>
            awesome place to make yourself <br /> productive and entertain and practice yourself
            through daily updates
        </p>
    </header>
  )
}

export default Header
