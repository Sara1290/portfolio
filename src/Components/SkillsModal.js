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
        <button aria-label="CloseModal" onClick={() => setShowSkillsModal(prev => !prev)}>X</button>
          <h1>What I know</h1>
          <p> JavaScript, React, React with Hooks, React with Redux, PostgreSQL, Node.js, CSS, SASS, API's and more!
          </p>
        </div>)
    : null}
    </div>
  )
  
}

export default SkillsModal;