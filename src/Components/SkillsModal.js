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
            <button aria-label="CloseModal" className="exit-button" onClick={() => setShowSkillsModal(prev => !prev)}>X</button>
          <div id="know-line">
            <h1>What I know</h1>
            <section id="line-one"></section>
          </div>
          <div className="image-container">
            <img className="skills-image" src={html5}/>
            <img className="skills-image" src={cssThree}/>
            <img className="skills-image" src={JavaScript}/>
            <img className="skills-image" src={newReact}/>
            <img className="skills-image" src={reactRedux}/>
            <img className="skills-image" src={nodejs}/>
            <img className="skills-image" src={postgresql}/>
            <img className="skills-image" src={SassLogo}/>
            <img className="skills-image" src={api}/>
          </div>


        </div>)
    : null}
    </div>
  )
  
}

export default SkillsModal;