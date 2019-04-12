import React from 'react'
import { Link } from 'react-router-dom';

const HomeList = () => {
  return (
    <div className="home-list section">

      <div className="card z-depth-0 home-summary">
        <div className="card-image grey-text text-darken-3">
          <img src="https://images.beazer.com/452ad1b7-5aa6-41df-904b-f1e07761e2ce-c" alt='home'/>
          <span className="card-title">40 Fringe Tree, Irvine, CA 92606</span>
        </div>
        <div className="card-content">
          <p>Specs on the home</p>
          <p>Posted by Roger Terrill</p>
          <p className="grey-text">3rd of September, 2am</p>
        </div>
        <div className="card-action"><Link to='/'>More Info</Link> </div>
      </div>
      
      <div className="card z-depth-0 home-summary">
        <div className="card-image grey-text text-darken-3">
          <img src="https://mthcdn.azureedge.net/-/media/assets/houston-tx/waters-edge-the-harbor/waters-edge-model-photos---san-angelo-ii-4542/hou-watersedge-sanangeloii-ext-dusk_web.ashx?h=1200&w=1600&hash=A4A770AE14AE6077DA779FC359F7A0F5826F09ED" alt='home'/>
          <span className="card-title">40 Fringe Tree, Irvine, CA 92606</span>
        </div>
        <div className="card-content">
          <p>Specs on the home</p>
          <p>Posted by Roger Terrill</p>
          <p className="grey-text">3rd of September, 2am</p>
        </div>
        <div className="card-action"><Link to='/'>More Info</Link> </div>
      </div>
      <div className="card z-depth-0 home-summary">
        <div className="card-image grey-text text-darken-3">
          <img src="https://www.cometanetworks.com/wp-content/uploads/2018/12/Learn-How-You-Can-Sift-Through-All-The-Haltom-City-TX-Houses-For-Sale.jpg" alt='home'/>
          <span className="card-title">40 Fringe Tree, Irvine, CA 92606</span>
        </div>
        <div className="card-content">
          <p>Specs on the home</p>
          <p>Posted by Roger Terrill</p>
          <p className="grey-text">3rd of September, 2am</p>
        </div>
        <div className="card-action"><Link to='/'>More Info</Link> </div>
      </div>

    </div>
  )
}

export default HomeList
