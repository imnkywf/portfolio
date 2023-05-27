import React from 'react'
import './index.css'

export default function Skills() {
  return (
    <section className="skills-com" id="skills">
      <div className="show-box">
        <p className="title">Skills</p>
        <div className="skill-box">

          <div className="skill-target">
            <div className="load-com">
              <p>Html+Css+Js</p>
              <div className="load html"></div>
            </div>

            <div className="load-com">
              <p>Node</p>
              <div className="load node"></div>
            </div>

            <div className="load-com">
              <p>React</p>
              <div className="load react"></div>
            </div>

            <div className="load-com">
              <p>Vue</p>
              <div className="load vue"></div>
            </div>

            <div className="load-com">
              <p>SQL</p>
              <div className="load sql"></div>
            </div>

          </div>
        </div>
      </div>
      <div className="background-image-left">
        <img src="/img/color-sharp.png" alt="bg load error" />
      </div>
    </section>
  )
}
