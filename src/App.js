import './App.css';
import Acceuil from './components/Acceuil';
import Menu from './components/Menu';
import {Route,Routes} from "react-router-dom"
import Article from './components/Article';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Acceuil/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/article/:id' element={<Article />} />
      </Routes>      
    </div>
  );
}

export default App;
