import './App.css'
import {Routes,Route} from "react-router-dom"
import Level1 from "./pages/level1"
import Email from "./pages/email"
import Nella from './pages/nella'
import Login from './pages/login'
import Signup from "./pages/signup"
import P_Home from './pharm/p_home'
import Home from './pages/home'
import Business from './pages/business'
import Menu from './pages/menu'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Nella/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Nella/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="business" element={<Business/>}/>
        <Route path="menu" element={<Menu/>}/>
      </Route>

      <Route path='/p_home' element={<P_Home/>}/>


      {/* <Route path='/pvc/analyze' element={<Level1/>}/>
      <Route path='/' element={<Email/>}>
        <Route index element={<Level1/>}/>
        <Route path='/pvc' element={<Level1/>}/>
      </Route> */}
    </Routes>
  )
}

export default App
