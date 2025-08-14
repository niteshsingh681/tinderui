import './index.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Body from './components/Body.jsx';
import Feed from './components/Feed.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          {/* Parent layout */}
          <Route path="/" element={<Body />}>
            {/* Default child route */}
            <Route index element={<h1>Home Page</h1>} />
            <Route path="about" element={<h1>About Page</h1>} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="feed" element={<Feed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
