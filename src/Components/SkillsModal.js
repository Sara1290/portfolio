import React, { useCallback, useEffect } from 'react';
import './SkillsModal.css'

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
        <button aria-label="CloseModal" className="x-button" onClick={() => setShowSkillsModal(prev => !prev)}>X</button>
          <p>What I know</p>
          <p> JavaScript, React, React with Hooks, React with Redux, PostgreSQL, Node.js, CSS, SASS, API's and more!
          <section id="line-one"></section>
          </p>
        </div>)
    : null}
    </div>
  )
  
}

export default SkillsModal;