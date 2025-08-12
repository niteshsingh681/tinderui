import './index.css';

import Feed from './components/Feed.jsx';
import Body from './components/Body.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import {Provider} from 'react-redux';
import appStore from './utils/appStore.js';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Provider store={appStore}>
       
       <BrowserRouter>
           <Routes>
            <Route path="/" element={<Body/>} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} /> 
            <Route path="/feed" element={<Feed/>} /> 
           </Routes>
       </BrowserRouter>
      
      </Provider>
    </>
  )
}

export default App
