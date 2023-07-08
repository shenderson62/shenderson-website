import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Your header content */}
        </header>

        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
