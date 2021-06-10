import React, {useCallback, useEffect} from 'react';
import './ProjectsModal.css'

const ProjectsModal = ({showProjectsModal, setShowProjectsModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showProjectsModal) {
      setShowProjectsModal(false)
    }
  }, [setShowProjectsModal, showProjectsModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])


  return (
    <div>
      {showProjectsModal 
      ? (<div className='projects-body'>
        <button aria-label="CloseModal" className="exit-button" onClick={() => setShowProjectsModal(prev => !prev)}>X</button>
          <h1>What I've been up to</h1>
          <p>links here to projects  
          </p>
        </div>)
    : null}
    </div>
  )
  
}
export default ProjectsModal;