import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/posts' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/register' element={user ? <Home /> : <Register />}></Route>
        <Route path='/login' element={user ? <Home /> : <Login />}></Route>
        <Route path='/write' element={user ? <Write /> : <Register />}></Route>
        <Route path='/settings' element={user ? <Settings /> : <Register />}></Route>
        <Route path='/posts/:postId' element={<Single/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
