import React, {useCallback, useEffect} from 'react';
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
        <button aria-label="CloseModal" className="exit-button" onClick={() => setShowContactModal(prev => !prev)}>X</button>
          <p>email, git hub, linkedIn, phone number, downloadabel resume  
          </p>
        </div>)
    : null}
    </div>
  )
  
}
export default ContactModal;