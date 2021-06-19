import React, {useCallback, useEffect} from 'react';
import {ExternalLink} from 'react-external-link'
import github4 from '../assets/github4.png'
import linkedIn3 from '../assets/linkedIn3.png'
// import { DownloadLink } from 'react-download-link';
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
                  {/* <DownloadLink
                      label="Save"
                      filename="SaraReedResume.pdg"
                      exportFile={() => "My cached data"}
                  /> */}
              </div>
          </div>
        </div>)
    : null}
    </div>
  )
  
}
export default ContactModal;