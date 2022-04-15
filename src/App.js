import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Home from './components/HomePage/Home';
import Students from './components/UsersNav/Students/Students';
import Administ from './components/UsersNav/Administ/Administ';
import Profesors from './components/UsersNav/Profesors/Profesors';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';

const App = (props) => {
  return (
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className='app-wraper-content'>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/News" element={<NewsContainer store = {props.store}/>} />
            <Route path="/Dialogs/*" element={<DialogsContainer 
                                store= {props.store}/> } />
            <Route path="/Profile" 
              element={<Profile store = {props.store} />} />
            <Route path="/profile/Students" element={<Students />} />
            <Route path="/profile/Administ" element={<Administ />} />
            <Route path="/profile/Profesors" element={<Profesors />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
