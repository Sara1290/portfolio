import React, { useCallback, useEffect } from 'react';
import html5 from '../assets/html5.png';
import cssThree from '../assets/cssThree.png';
import JavaScript from '../assets/JavaScript.png';
import nodejs from '../assets/nodejs.png';
import newReact from '../assets/newReact.png';
import SassLogo from '../assets/SassLogo.png';
import postgresql from '../assets/postgresql.png';
import api from '../assets/api.jpg';
import reactRedux from '../assets/reactRedux.png';
import './SkillsModal.css';

const SkillsModal = ({showSkillsModal, setShowSkillsModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showSkillsModal) {
      setShowSkillsModal(false)
    }
  }, [setShowSkillsModal, showSkillsModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <div>
      {showSkillsModal 
      ? (<div className='skills-body'>
            <button aria-label="CloseModal" className="skills-exit" onClick={() => setShowSkillsModal(prev => !prev)}>X</button>
          <div className="header-container">
            <h1 className="modal-header">What I Know</h1>
            <section className="skills-line"></section>
          </div>
          <div className="image-container">
            <img className="skills-image" alt="HTML5" src={html5}/>
            <img className="skills-image" alt="CSS3" src={cssThree}/>
            <img className="skills-image" alt="JavaScript" src={JavaScript}/>
            <img className="skills-image" alt="React" src={newReact}/>
            <img className="skills-image" alt="React with Redux" src={reactRedux}/>
            <img className="skills-image" alt="NodeJs" src={nodejs}/>
            <img className="skills-image" alt="PostgreSQL" src={postgresql}/>
            <img className="skills-image" alt="SASS" src={SassLogo}/>
            <img className="skills-image" alt="Calls to API's" src={api}/>
          </div>


        </div>)
    : null}
    </div>
  )
  
}

export default SkillsModal;