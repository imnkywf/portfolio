import React from 'react';
import './index.css';
import connectData from '../../data/connect_data';

export default function Connect() {
  return (
    <section className="connect-com" id="connect">
      <div className="container">
        <img className="contact-img" src="/img/contact-img.svg" alt="img load error" />
        <div className="msg-box">
          <div className="title">Get In Touch</div>
          <div className="show-msg">
            {connectData.map((v, i) => (
              <div key={i}>
                <p>{v.title}: <span>{v.value}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
