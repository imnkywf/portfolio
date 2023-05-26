import React, { useRef, useState, useEffect } from 'react'
import './index.css'

export default function NavBar() {
  const NavBarRef = useRef(null)
  const [showMask, setShowMask] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const navHeight = NavBarRef.current.offsetHeight
      const distanceTop = document.documentElement.scrollTop
      distanceTop > navHeight ? setShowMask(true) : setShowMask(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="nav-bar-com" ref={NavBarRef} style={{ "background": showMask ? "#121212" : "unset" }}>
      <div className="container">
        <p className="logo">Intro</p>
        <div className="choose-box">
          <a className="intro" href="#home">Home</a>
          <a className="intro" href="#skills">Skills</a>
          <a className="intro" href="#projects">Projects</a>
          <a className="whatsapp" href="https://wa.me/6584116262" target="_blank" rel='noreferrer'>
            <p>W</p>
          </a>
          <a className="github" href="https://github.com/imnkywf" target="_blank" rel='noreferrer'>
            <p>G</p>
          </a>
          <div className="connect" onClick={() => { window.location.href = 'https://wa.me/6584116262' }}>Let&apos;s Connect</div>
        </div>
      </div>
    </nav>
  )
}
