
import Card from './Components/Landing/Card'
import Landing from './Components/Landing/Landing'
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Display from './Components/Forum/display';


function App() {

  return (
    <>
    <div>
      <Navbar/>

      <Routes>
        <Route>
         <Route path='/' element={<Landing/>}/>
        </Route>
      </Routes>

    </div>
    </>
  )
}

export default App
