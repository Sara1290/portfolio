import React, {useCallback, useEffect} from 'react';
// import a1 from '../assets/a1.png'
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
        {/* <img alt="" src={a1} id="couple-img"/> */}
        <button aria-label="CloseModal" className="ext-button" onClick={() => setShowAboutModal(prev => !prev)}>X</button>
        <div className="header-container">
            <h1 className="modal-header">A Bit About Me</h1>
            <section className="about-line"></section>
          </div>
          <div className="paragraph-container">
          <p>I love camping, hiking, playing piano, baking, wreath making, and
            any sort of arts and crafts. 
            <br/>
            <br/>
            I got into writing code after I left my career as a pastry
            chef. I needed to start thinking about what I wanted out of a career, and what role my job needed to play in my life. 
            I tried out a lot of different options, things that have always interested me. On the advice of friends, I tried learning
            some JavaScript online, and it really just took off from there. I made plans to get into a bootcamp so I could start my new career! Now, 
            I'm a full stack web developer!  
            <br/>
            <br/>
            Should we work together? Contact information is below, I'd love to hear from you!
            <br/>
            <br/>
            <br/>
          </p>
          </div>
        </div>)
    : null}
    </div>
  )
  
}
export default AboutModal;