import './App.css';
import { BrowserRouter as Router, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/academics">Academics</Link>
            </li>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
