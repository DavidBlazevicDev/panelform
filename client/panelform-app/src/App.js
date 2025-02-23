import logo from './logo.svg';
import video from './video.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming Soon.
        </p>
        <p className="Panelform-text">
          PanelForm is the inventor of the permenant formwork building system (2005). Allowing for cost-efficient concrete builds in conventional, prefabrication, or modular construction methods, it leads the industry in cost-efficient quality building.
        </p>
      </header>
      <header className="Panelform-box">
        <video src={video} type="video/mp4" className="Panelform-image" alt="video" loop={true} autoPlay={true} muted={true} controls={true} />
      </header>
    </div>
  );
}

export default App;