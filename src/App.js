import Home from './pages/Home/Home';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/shenderon-website" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
