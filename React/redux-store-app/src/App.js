import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Items from './pages/Items';
import Navbar from './Navbar';
import Cart from './UI/Cart';
import { useDispatch,useSelector } from 'react-redux';
import { toggleCart } from './store/cart';

function App() {
  const {isOpen} = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <BrowserRouter>
      <div className="app-container">
          <div className="app-header">
               <Navbar />
               <button className="button" onClick={() =>dispatch(toggleCart(!isOpen)) }>Cart</button>
          </div>
          <Cart />
      </div>
    
        <Routes>
           <Route path="/" element={<Home></Home>}></Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="items/:categoryId" element={<Items/>}></Route>
        </Routes>  
        </BrowserRouter> 
    </div>
  );
}

export default App;
