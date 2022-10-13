import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <HomePage />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
