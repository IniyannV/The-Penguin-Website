import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home.js'
import Donate from './pages/Donate.js';
import About from './pages/About.js'
import Contact from './pages/Contact.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/donate' exact element={<Donate/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/contact' exact element={<Contact/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
