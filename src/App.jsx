import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Suggestion from './Components/NavbarSuggestion/Suggestion';
import Home from './Components/Pages/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='layout-container'>
        <Sidebar />
        <div className='main-content-wrapper'>
          <Suggestion /> 
          <div className='home-scroll-wrapper'>
            <Home /> {/* Scrollable content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
