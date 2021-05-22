import React from 'react';

const AboutModal = ({showModal, setShowModal}) => {
  // const modalRef = useRef();

  // const closeModal = e => {
  //   if(modalRef.current === e.target) {
  //     setShowModal(false)
  //   }
  // };

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