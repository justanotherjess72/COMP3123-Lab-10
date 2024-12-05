import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome'; 
import Login from './components/Login';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/Welcome" element={<Welcome />} /> */
    
      </Routes>
    </Router>
  );
}

export default App;
