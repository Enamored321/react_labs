import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <Header />
      <div className="layout-wrapper">
        <Sidebar />
        <main className="main-content">
          <Hero />
          <MovieList />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
