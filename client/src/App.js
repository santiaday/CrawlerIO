import "./App.css";
import Main from "./components/Main";
import ResultsDash from "./components/Results/ResultsDash.js";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="container">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main />
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
