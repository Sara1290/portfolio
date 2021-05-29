import React, { useState, useRef } from 'react';
import face from '../assets/face.png';
import AboutModal from './AboutModal';
import SkillsModal from './SkillsModal'
import ProjectsModal from './ProjectsModal';
import ContactModal from './ContactModal';
import '../../src/Components/Home.css'

const Home = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showContactModal, setShowContanctModal] = useState(false);
  const modalRef = useRef();

  const openAboutModal = () => {
    setShowAboutModal(prev => !prev)
  };

  const openSkillsModal = () => {
    setShowSkillsModal(prev => !prev)
  };

  const openProjectsModal = () => {
    setShowProjectsModal(prev => !prev)
  };

  const openContactModal = () => {
    setShowContanctModal(prev => !prev)
  };

  const closeModal = e => {
    if(modalRef.current === e.target) {
      setShowSkillsModal(false)
      setShowAboutModal(false)
      setShowProjectsModal(false)
      setShowContanctModal(false)
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
        <p> I write code.</p>
      </div>
      {/* <div className="section-container"> */}
        <section id="dusty-blue-section">
          <button className="about-button" onClick={openAboutModal}>About</button>
          <AboutModal showAboutModal={showAboutModal} setShowAboutModal={setShowAboutModal} />
        </section>

        <section id="blue-section">
        <button className="skills-button" onClick={openSkillsModal}>Skills</button>
          <SkillsModal showSkillsModal={showSkillsModal} setShowSkillsModal={setShowSkillsModal} />
        </section>

        <section id="teal-section">
        <button className="projects-button" onClick={openProjectsModal}>Projects</button>
          <ProjectsModal showProjectsModal={showProjectsModal} setShowProjectsModal={setShowProjectsModal} />
        </section>

        <section id="yellow-section">
        <button className="contact-button" onClick={openContactModal}>Contact</button>
          <ContactModal showContactModal={showContactModal} setShowContanctModal={setShowContanctModal} />
        </section>
          
      {/* </div> */}
    </div>
  );

}
export default Home;