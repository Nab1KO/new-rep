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
import store from './Redux/state';

const App = (props) => {
  return (
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className='app-wraper-content'>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/News" element={<News store = {props.store}/>} />
            <Route path="/Dialogs/*" element={<Dialogs 
                                store= {props.store}/> } />
            <Route path="/Profile" 
              element={<Profile state={props.state.ProfilePage} 
                                dispatch = {props.dispatch}
                                store = {props.store} />} />
            <Route path="/profile/Students" element={<Students />} />
            <Route path="/profile/Administ" element={<Administ />} />
            <Route path="/profile/Profesors" element={<Profesors />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
