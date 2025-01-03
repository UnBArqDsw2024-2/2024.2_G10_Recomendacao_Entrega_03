import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';

const Home = () => {
  return (
    <div className="signup-page">
      <Navbar />
      <div className="signup-container">
        <Sidebar/>
      </div>
    </div>
  );
};

export default Home;
