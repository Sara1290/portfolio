import React, { useState, useRef } from 'react';
import face from '../assets/face.png';
import AboutModal from './AboutModal';
import SkillsModal from './SkillsModal'
import ProjectsModal from './ProjectsModal';
import ContactModal from './ContactModal';
import AlbionEdited from '../assets/AlbionEdited.JPG'
// import canyonlands from '../assets/canyonlands.jpg'
import '../../src/Components/Home.css'

const Home = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
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
    setShowContactModal(prev => !prev)
  };

  const closeModal = e => {
    if(modalRef.current === e.target) {
      setShowSkillsModal(false)
      setShowAboutModal(false)
      setShowProjectsModal(false)
      setShowContactModal(false)
    }
  };


  return (
    <div className='home-body' ref={modalRef} onClick={closeModal}>
      <img src={AlbionEdited} alt="" id='background'className='home-body'ref={modalRef} onClick={closeModal}/>
      {/* <img src={canyonlands} alt="" id='background' className='home-body'ref={modalRef} onClick={closeModal}/> */}
      <img alt="" id="face-img" src={face} />
      <div className="name-title">
        <h1> Sara Reed </h1>
        <p> I write code.</p>
      </div>
      <div className="section-container">
        <section id="about-section">
          <button className="about-button" onClick={openAboutModal}>About</button>
          <AboutModal showAboutModal={showAboutModal} setShowAboutModal={setShowAboutModal} />
        </section>

        <section id="skills-section">
        <button className="skills-button" onClick={openSkillsModal}>Skills</button>
          <SkillsModal showSkillsModal={showSkillsModal} setShowSkillsModal={setShowSkillsModal} />
        </section>

        <section id="projects-section">
        <button className="projects-button" onClick={openProjectsModal}>Projects</button>
          <ProjectsModal showProjectsModal={showProjectsModal} setShowProjectsModal={setShowProjectsModal} />
        </section>

        <section id="contact-section">
        <button className="contact-button" onClick={openContactModal}>Contact</button>
          <ContactModal showContactModal={showContactModal} setShowContactModal={setShowContactModal} />
        </section>
          
      </div>
    </div>
  );

}
export default Home;