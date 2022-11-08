import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
      <div className="container">
        <NavBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
