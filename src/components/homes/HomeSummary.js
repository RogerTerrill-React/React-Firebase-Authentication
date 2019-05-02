import React from 'react';

const HomeSummary = ({home}) => {
  return (
    <div className="card hoverable home-summary">
      <div className="card-image grey-text text-darken-3">
        <img
          src= {home.image1Link}
          alt="home"
        />
        <span className="card-title">{home.address}, {home.city}, {home.state} {home.zipcode}</span>
      </div>
      <div className="card-content">
        <p>Specs on the home</p>
        <p>Posted by Roger Terrill</p>
        <p className="grey-text">3rd of September, 2am</p>
      </div>
    </div>
  );
};

export default HomeSummary;
