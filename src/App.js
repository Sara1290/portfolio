import face from '../src/assets/face.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="red-line"></div>
      <div id="blue-line"></div>
      <div id="green-line"></div>
      <div id="yellow-line"></div>
      <img alt="" id="face-img" src={face} />
      <div className="name-title">
        <h1> Sara Reed </h1>
        <p> Web Developer</p>
      </div>
      <div className="section-container">
        <section id="red-section">
          <p>About</p>
        </section>
        <section id="blue-section">
        <p>Skills</p>
        </section>
        <section id="green-section">
        <p>Projects</p>
        </section>
        <section id="yellow-section">
        <p>Contact</p>
        </section>
      </div>
    </div>
  );
}

export default App;
