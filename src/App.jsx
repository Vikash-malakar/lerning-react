import './App.css'
import Fetch from './Fetch'
import Insrt from './insert'
import {Route ,Routes} from "react-router-dom"
function App() {
  return (
    <>
    <Routes> 
      <Route index element={ <Insrt />} />
      <Route path="/Fetch" element={ <Fetch />}/> 
       </Routes>
    
    </>
  )
}

export default App
