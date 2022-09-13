import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Home from './components/home';
// import Header from './components/header';
import AddPost from './components/addPost';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"

function App() {
  return(
    <BrowserRouter>
    <nav>
        <NavLink exact='true' to='/' className="nav-links">Home</NavLink>
        <NavLink exact='true' to='/about' className="nav-links">About</NavLink>
        <NavLink exact='true' to='/addpost' className="nav-links">Add Post</NavLink>
        <NavLink exact='true' to='/contact' className="nav-links">Contact</NavLink>
        <NavLink exact='true' to='/blog' className="nav-links">Blog</NavLink>
    </nav>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/addpost' element={<AddPost />}/>
        <Route exact path='/contact' element={<Contact />}/>
        <Route exact path='/blog' element={<Blog />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
