import React, {useCallback, useEffect} from 'react';
import {ExternalLink} from 'react-external-link'
import github4 from '../assets/github4.png'
import linkedIn3 from '../assets/linkedIn3.png'
import ResumeThumbnail from '../assets/ResumeThumbnail.png'
import './ContactModal.css'

const ContactModal = ({showContactModal, setShowContactModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showContactModal) {
      setShowContactModal(false)
    }
  }, [setShowContactModal, showContactModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])


  return (
    <div>
      {showContactModal 
      ? (<div className='contact-body'>
        <button aria-label="CloseModal" className="contact-exit" onClick={() => setShowContactModal(prev => !prev)}>X</button>
          <div className="header-container">
          <h1 className="modal-header">Get In Touch!</h1>
          <section className="contact-line"></section>
          </div>
          <div className='contact-container'>
              <div className="social-container">
                  <ExternalLink href="https://github.com/Sara1290" className="link">
                    <img alt="" src={github4} className="contact-image" />
                    <span id="span">GitHub</span>
                  </ExternalLink>
                    </div>
                    <div className="social-container">
                  <ExternalLink href="https://www.linkedin.com/in/sara-reed1290/" className="link">
                  <img alt="" src={linkedIn3} className="contact-image" />
                    <span id="span">LinkedIn</span>
                  </ExternalLink>
              </div>
              <div className="social-container">
                  <img className="resume-image" src={ResumeThumbnail} alt=""/>
                  <a className="link" id="span" href="https://docs.google.com/document/d/1omw5ZhBYQbR2Spfu7EWRynJSSr0uOECw7i509yhTwn4/export?format=pdf">Download My Resume</a>
              </div>
          </div>
        </div>)
    : null}
    </div>
  )
  
}
export default ContactModal;