import shop from "./pages/shop";
import Home from './pages/Home'
import Contact from "./pages/contactus";
import Vegetable from "./pages/Vegetable";
import Shop from "./pages/shop";
import Abouts from "./pages/About";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
 

  return (
    
  <Router>
    <Routes>    
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<Abouts/>}/>
      <Route path="/Vegetable" element={<Vegetable/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/contactus" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}></Route>

    </Routes>

  </Router>


  
  )
}

export default App
