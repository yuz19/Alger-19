import './App.css';
import Acceuil from './components/Acceuil';
import Menu from './components/Menu';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Acceuil/>}/>
        <Route path='/Menu' element={<Menu/>}/>
      </Routes>      
    </div>
  );
}

export default App;
