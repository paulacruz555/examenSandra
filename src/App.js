import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuth} from "./ruteo/AuthContext";
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import BarraRutasPublic from './ruteo/BarraRutasPublic';
import 'bootswatch/dist/darkly/bootstrap.min.css';
const App = () => {
  const { user } = useAuth();
  return (
    <div style={{ background:"violet"}}>
      
      <h1>Sandra Paula Cruz Merma</h1>
      
      <Router>
      { user ? <BarraRutasProtected /> : <BarraRutasPublic />}
      </Router>
    </div>
  )
}

export default App
