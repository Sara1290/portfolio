import React, {useCallback, useEffect} from 'react';
import { Link } from 'react-router-dom'
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
        <div className="header-container">
          <h1 className="modal-header">Projects</h1>
          <section className="projects-line"></section>
        </div>
        <div className="link-container">
              <Link to ={{pathname: "https://beentheretravel.net/#/"}} className="Link" target="https://beentheretravel.net/#/">
                Been There Travel
              </Link>
              <Link to ={{pathname: "http://143.198.236.55:4242/"}} className="Link" target="blank">
                Plant Planet
              </Link>
            </div>
        </div>)
    : null}
    </div>
  )
  
}
export default ProjectsModal;