import React, {useCallback, useEffect} from 'react';
import './AboutModal.css'

const AboutModal = ({showModal, setShowModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showModal) {
      setShowModal(false)
    }
  }, [setShowModal, showModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])


  return (
    <div>
      {showModal 
      ? (<div className='about-body'>
        <button aria-label="CloseModal" onClick={() => setShowModal(prev => !prev)}>X</button>
          <h1>Hello! My name is Sara I'm a Utah based web developer!</h1>
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