import React from 'react';
import { Link } from 'react-router-dom';

const HomeSummary = () => {
  return (
    <div className="card z-depth-0 home-summary">
      <div className="card-image grey-text text-darken-3">
        <img
          src="https://images.beazer.com/452ad1b7-5aa6-41df-904b-f1e07761e2ce-c"
          alt="home"
        />
        <span className="card-title">40 Fringe Tree, Irvine, CA 92606</span>
      </div>
      <div className="card-content">
        <p>Specs on the home</p>
        <p>Posted by Roger Terrill</p>
        <p className="grey-text">3rd of September, 2am</p>
      </div>
      <div className="card-action">
        <Link to="/">More Info</Link>{' '}
      </div>
    </div>
  );
};

export default HomeSummary;
