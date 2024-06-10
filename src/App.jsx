import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Forum from './Components/Forum/Forum';
import Landing from './Components/Landing/Landing'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Services from './Components/Services/Services';
import Info from './Components/Patient/Info';
import Reviews from './Components/Patient/Reviews';
import Blogs from './Components/Blogs/Blogs';


function App() {

  return (
    <div className=''>
      <Navbar/>

      <Routes>
         <Route path='/' element={<Landing/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/patientInfo' element={<Info/>}/>
         <Route path='/patientReview' element={<Reviews/>}/>
         <Route path='/blog' element={<Blogs/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
     
    <Footer/> 
    {/* <Login/> */}
    {/* <SignUp/> */}
    </div>
  )
}

export default App;
