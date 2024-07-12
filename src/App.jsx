import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import About from "./pages/About"
export default function App() {
  return <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>;
  
}


