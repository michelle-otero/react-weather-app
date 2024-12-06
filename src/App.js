import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="weather-app container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/michelle-otero-6919b3171/"
            target="_blank"
            rel="noreferrer"
          >
            Michelle Otero
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/michelle-otero/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
