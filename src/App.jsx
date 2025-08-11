import './index.css';
import Navbar from './components/Navbar.jsx';
import Feed from './components/Feed.jsx';
import Footer from './components/Footer.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
       <Navbar/>
       <BrowserRouter>
           <Routes>
            <Route path="/" element={<Feed/>} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/profile" element={<Profile/>} />
             <Route path="/login" element={<Login/>} /> 
           </Routes>


       </BrowserRouter>
       <Footer/>
    </>
  )
}

export default App
