import React, { Component, useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const ThemeToggle = () => {
  
        const {toggleTheme} = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}> Toggle the theme </button>
    )
    
}

export default ThemeToggle