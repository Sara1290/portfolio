import React, { useState, useRef } from 'react';
import face from '../assets/face.png';
import '../../src/Components/Home.css'
import AboutModal from './AboutModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setShowModal(prev => !prev)
  };

  const closeModal = e => {
    if(modalRef.current === e.target) {
      setShowModal(false)
    }
  };

  return (
    <div className="home-body" ref={modalRef} onClick={closeModal}>
      {/* <div id="red-line"></div>
      <div id="blue-line"></div>
      <div id="green-line"></div>
      <div id="yellow-line"></div> */}
      <img alt="" id="face-img" src={face} />
      <div className="name-title">
        <h1> Sara Reed </h1>
        <p> Web Developer</p>
      </div>
      {/* <div className="section-container"> */}
        <section id="red-section">
          <button className="section-button" onClick={openModal}>About</button>
          <AboutModal showModal={showModal} setShowModal={setShowModal} />
        </section>
        <section id="blue-section">
        <p>Skills</p>
        </section>
        <section id="green-section">
        <p>Projects</p>
        </section>
        <section id="yellow-section">
        <p>Contact</p>
        </section>
      {/* </div> */}
    </div>
  );

}
export default Home;