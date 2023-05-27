import React from 'react'
import './index.css'

import projects from '../../data/project_data'

export default function Projects() {
  return (
    <div id='projects'>
      <section className="projects-com" id="projects">
        <div className="container">
          <p className="big-title">Projects</p>
          <p className="big-desc">Here are some of my works</p>
          <div className="choose-box">
            {projects.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>
          <div className="show-box">
            {projects.map((e, i) => (
              <div className="show-img" key={i} onClick={() => { window.open(e.github, '_blank') }}>
                <img src={e.img} alt="img load error" />
                <div className="mask-box">
                  <div className="name">{e.name}</div>
                  <div className="desc">{e.desc}</div>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </section>

    </div>
  )
}
