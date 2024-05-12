import Contact from './Components/Contact/Contact';
import Forum from './Components/Forum/Forum';
import Landing from './Components/Landing/Landing'
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';


function App() {

  return (
    <>
    <div>
      <Navbar/>

      <Routes>
         <Route path='/' element={<Landing/>}/>
         <Route path='/forum' element={<Forum/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
