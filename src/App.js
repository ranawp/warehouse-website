import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Navbar';
import Banner from './Components/Home/Banner/Banner';
import Home from './Components/Home/Home/Home';
import Products from './Components/Home/Products/Products';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
