import React, {useCallback, useEffect} from 'react';
import { ExternalLink } from 'react-external-link';
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
          <button aria-label="CloseModal" className="proj-exit" onClick={() => setShowProjectsModal(prev => !prev)}>X</button>
        <div className="header-container">
          <h1 className="modal-header">Projects</h1>
          <section className="projects-line"></section>
        </div>
        <div className="link-container">
              <ExternalLink href="https://beentheretravel.net/#/" className="Link">
                <span>Been There Travel</span>
              </ExternalLink>
              <ExternalLink href="http://143.198.236.55:4242/" className="Link">
                <span>Plant Planet</span>
              </ExternalLink>
            </div>
        </div>)
    : null}
    </div>
  )
  
}
export default ProjectsModal;