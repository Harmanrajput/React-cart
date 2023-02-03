import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./styles/app.scss";
import { Toaster } from "react-hot-toast";

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/cart" element={<Cart/>} />
   </Routes>
    <Toaster/>
    </BrowserRouter>
  
   </>
  );
}

export default App;
