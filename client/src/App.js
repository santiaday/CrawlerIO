import "./App.css";
import Main from "./components/Main";
import ResultsDash from "./components/Results/ResultsDash.js";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef } from "react";

function App() {
  const featuresRef = useRef(null);
  const techStackRef = useRef(null);
  const teamRef = useRef(null);

  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar
                    featuresRef={featuresRef}
                    techStackRef={techStackRef}
                    teamRef={teamRef}
                  />
                  <Main
                    featuresRef={featuresRef}
                    techStackRef={techStackRef}
                    teamRef={teamRef}
                  />
                </>
              }
            />
            <Route path="/results=:keyword" element={<ResultsDash />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
