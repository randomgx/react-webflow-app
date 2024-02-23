import reactLogo from "/react.svg";
import curioLogo from "/curio.webp";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://curiodigital.io" target="_blank">
          <img src={curioLogo} className="logo" alt="Curio logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Webflow Apps + React by Curio Labs</h1>
    </>
  );
}

export default App;
