import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Home } from "./components/Home"
import { Footer } from "./components/Footer"
import { Iphone } from "./components/Iphone"
import { Xiaomi } from "./components/Xiaomi"
import { Airpods } from "./components/Airpods"
import { Aksesuarlar } from "./components/Aksesuarlar"
import {Samsung} from "./components/Samsung"



function App() {
  

  return (
    <>
    
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/iphone" element={<Iphone/>} />
    <Route path="/samsung" element={<Samsung/>} />
    <Route path="/xiaomi" element={<Xiaomi/>} />
    <Route path="/airpods" element={<Airpods/>} />
    <Route path="/aksesuar" element={<Aksesuarlar/>} />
   </Routes>
   <Footer/>
    </>
  )
}

export default App
