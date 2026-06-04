import './App.css'
import {Routes,Route} from "react-router-dom"
import Level1 from "./pages/level1"
import Email from "./pages/email"
import Nella from './pages/nella'
import Login from './pages/login'
import Signup from "./pages/signup"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/nella' element={<Nella/>}/>


      {/* <Route path='/pvc/analyze' element={<Level1/>}/>
      <Route path='/' element={<Email/>}>
        <Route index element={<Level1/>}/>
        <Route path='/pvc' element={<Level1/>}/>
      </Route> */}
    </Routes>
  )
}

export default App
