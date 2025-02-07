import React from 'react';
import { Link } from 'react-router-dom';
import '../App'; 


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>Discover the Future of Shopping</h1>
        <p>Find the best products at unbeatable prices</p>
        <Link to="/shop">
          <button className="shop-now-btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
