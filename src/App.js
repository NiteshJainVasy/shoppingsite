import './App.css';
import CartData from './pages/Cart';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function App() {
 
  const notify = () => {  toast.success("Product Removed Successfully!",{autoClose: 1000, } )};
  return (
    <div className="app">
      <ToastContainer Type ="success" />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Cart'  element={<CartData  notify={notify}/>   }/>
      </Routes>
    </div>
  );
}

export default App;
