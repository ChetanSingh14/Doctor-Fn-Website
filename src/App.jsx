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
        </Route>
      </Routes>
    </div>
  )
}

export default App
