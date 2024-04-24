import Forum from './Components/Forum/Forum';
import Card from './Components/Landing/Card'
import Landing from './Components/Landing/Landing'
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';


function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route>
         <Route path='/' element={<Landing/>}/>
         <Route path='/forum' element={<Forum/>}/>
        </Route>
      </Routes>
   
    </div>
  )
}

export default App
