import React from 'react'
import './index.css'
import headImage from '../../Projects_Images/header-img.svg'
import connectImage from '../../Projects_Images/left.svg'

export default function Banner() {
  return (
    <section className="banner-com" id="home">
      <div className="show-box">
        <div className="font-box">
          <p className="title">Welcome to my intro page</p>
          <h1>Hi! I'm Yiwei Fan </h1>
          <p className="intro">
            I aspire to become a front-end developer, specializing in creating beautiful and practical websites using React.
            Additionally, I have a passion for leveraging Node.js to build back-end servers and APIs.
            I am characterized by my strong learning abilities and enthusiasm for acquiring new skills.
            Helping others is something I truly enjoy.
          </p>
          <div className="connect" onClick={() => { window.location.href = 'https://wa.me/6584116262' }}>
            <p>Let&apos;s connect</p>
            <img src={connectImage} alt="->" />
          </div>
        </div>

        <img className="head-img" src={headImage} alt="Header Img" />
      </div>
    </section>
  )
}
