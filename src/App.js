import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import ComputerParts from './Pages/ComputerParts/ComputerParts';
import ComputerWarehouse from './Pages/ComputerWarehouse/ComputerWarehouse';
import Contact from './Pages/Contact/Contact';
import DoctorService from './Pages/DoctorService/DoctorService';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound'

function App() {
  return (
    <div className='mb-4 my-12 mt-4'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/ComputerPartsManufacture' element={<ComputerParts></ComputerParts>}></Route>
        <Route path='/ComputerWarehouse' element={<ComputerWarehouse></ComputerWarehouse>}></Route>
        <Route path='/DoctorServiceProvider' element={<DoctorService></DoctorService>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
