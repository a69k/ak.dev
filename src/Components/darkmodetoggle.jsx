import React from 'react'

export default function DarkModeToggle () {
  const [theme, setTheme]= useState('dark')
  return (
    <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>
    {theme === 'light' ? '☀️' : '🌑'}
  </button>
  )
}