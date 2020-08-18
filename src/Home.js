import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <p>welcome Home Works!!</p>
        <p>
          <Link to="/counter">Counter</Link></p>
      </div>
    );
  }
}

export default Home;
