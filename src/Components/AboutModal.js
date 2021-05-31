import React, {useCallback, useEffect} from 'react';
import './AboutModal.css'

const AboutModal = ({showAboutModal, setShowAboutModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showAboutModal) {
      setShowAboutModal(false)
    }
  }, [setShowAboutModal, showAboutModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])


  return (
    <div>
      {showAboutModal 
      ? (<div className='about-body'>
        <button aria-label="CloseModal" className="x-button" onClick={() => setShowAboutModal(prev => !prev)}>X</button>
          <h1>Hi there! My name is Sara I'm a Utah based web developer!</h1>
          <p>I love camping, hiking, playing piano, baking, wreath making, and
            any sort of arts and crafts. I got into writing code after I left my career as a pastry
            chef. I started trying it out online, and really just enjoyed it and dived right
            in.  
          </p>
        </div>)
    : null}
    </div>
  )
  
}
export default AboutModal;