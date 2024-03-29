'use client'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { PiMoon, PiSpinner, PiSun } from 'react-icons/pi'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  const handleToggle = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const icon = () => {
    if (!mounted) return (
      <PiSpinner />
    )
  
    if (resolvedTheme === 'dark') {
      return <PiSun />
    }
  
    if (resolvedTheme === 'light') {
      return <PiMoon />
    }
  }

  return (
    <button 
      className={`text-secondary flex w-fit p-8 hover:cursor-pointer hover:text-primary transition-colors duration-300 ${!mounted ? 'animate-spin' : ''}`}
      onClick={handleToggle}
    >
      {icon()}
    </button>
  )
}
