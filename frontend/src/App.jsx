import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Voting from './components/Voting.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <Router>
      <div className = "appbody">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav>
      <div className = "nav">
      
          <Link to="/voting">Voting</Link>
          <Link to="/">Home</Link>
          <Link to="/leaderboard">Ranking</Link>
       
      </div>
    </nav>
  );
}
function Footer(){
  return (
  <footer>
    <div className="footer">
      <p>Made with ❤️ by Knox</p>
    </div>
  </footer>
  );
}
export default App;