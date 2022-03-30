import React from 'react';
import './App.css';
// import Opengoogle from './pajes/google.js';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Home from './components/HomePage/Home';
import News from './components/News/News';
import Students from './components/UsersNav/Students/Students';
import Administ from './components/UsersNav/Administ/Administ';
import Profesors from './components/UsersNav/Profesors/Profesors';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className='app-wraper-content'>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/News" element={<News />} />
            <Route path="/Dialogs/*" element={<Dialogs massages={props.massages} dialogsData={props.dialogsData} />} />
            <Route path="/Profile" element={<Profile postsData={props.postsData} />} />
            <Route path="/profile/Students" element={<Students />} />
            <Route path="/profile/Administ" element={<Administ />} />
            <Route path="/profile/Profesors" element={<Profesors />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
