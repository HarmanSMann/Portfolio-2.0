import React from 'react';
import Header from './Components/Navigation/Header'
import Intro from './Components/Home/Intro'
import Footer from './Components/Navigation/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Intro/>
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
