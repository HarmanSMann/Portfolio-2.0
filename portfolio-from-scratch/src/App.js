import React from 'react';
import Header from './Components/Navigation/Header'
import Hello from './Components/Home/Hello'
import Footer from './Components/Navigation/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Hello/>
      <Footer/>
    {/* 
    Welcome
    About me -> link buttons to: linkedin, github
    Tech Stack
    Projects
    Contact me
    */}
    </>
  );
};

export default App;
