import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AddInventory from './Components/AddInventory/AddInventory';
import Addservice from './Components/AddInventory/AddInventory';
import Blog from './Components/Blog/Blog';
import CheckOut from './Components/CheckOut/CheckOut';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Navbar';
import Banner from './Components/Home/Banner/Banner';
import Home from './Components/Home/Home/Home';
import Products from './Components/Home/Products/Products';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element=
          {
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }></Route>
        <Route path='/contact' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>

        }></Route>
        <Route path='/addInventory' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }>
        </Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        } >

        </Route>
        <Route path='/blog' element={
          <RequireAuth>
            <Blog></Blog>
          </RequireAuth>

        }> </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
