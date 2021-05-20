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
      <h1> Sara Reed </h1>
      <p> Web Developer</p>
      <div id="red-section"></div>
      <div id="red-mini-section"></div>

      <div id="blue-section"></div>
      <div id="green-section"></div>
      <div id="yellow-section"></div>

    </div>
  );
}

export default App;
