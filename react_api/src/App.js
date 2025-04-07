import Navbar from './navbar';
import Home from './home';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="content">
          <Home/>
        </div>
    </div>
  );
}

export default App;
