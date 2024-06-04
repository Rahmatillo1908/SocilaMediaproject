import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile"
function App() {
  return (
    <div className="App">
        <div className="blur"></div>
        <div className="blur" style={{top:"18%",right:0}}></div>
        <div className="blur" style={{top:"36%",left:0}}></div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/auth" element={<Auth/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
