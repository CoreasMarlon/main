import "./App.css";
import img from "./image_profile.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="left">
            <img className="App-logo" src={img} alt="" />
          </div>
          
          <div className="right">
            <h2>
              I'm MC
            </h2>
            <p>
              Developer Web FullStack
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
