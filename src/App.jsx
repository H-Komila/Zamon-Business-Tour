import React, { useEffect, useState } from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Section from './components/Section/Section';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import Best from './components/Best/Best';
import Reservat from './components/Reservat/Reservat';
import Location from './components/Location/Location';
import { CirclesWithBar } from 'react-loader-spinner';
import Footer from './components/Footer/Footer';
import Travel from './components/Travel/Travel';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <CirclesWithBar
          height="100"
          width="100"
          color="#ff0000"
          outerCircleColor="#ff0000"
          innerCircleColor="#ff0000"
          barColor="#000"
          ariaLabel="circles-with-bar-loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <>
      <Nav />
      <Header />
      <Article />
      <Section />
      <Aside />
      <Main />
      <Best />
      <Reservat />
      <Location />
      <Footer/>
      <Travel/>
    </>
  );
};

export default App;
