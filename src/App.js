import './App.css';
import CartData from './pages/Cart';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Cart' element={<CartData/>}/>
      </Routes>
    </div>
  );
}

export default App;
