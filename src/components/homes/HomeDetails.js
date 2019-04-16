import React from 'react';

const HomeDetails = (props) => {
  console.log(props)
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='row'>
        <div className='col s12 m8'>
          <div className='card z-depth-0'>
            <div className='card-image'>
              <img
                src='https://images.beazer.com/452ad1b7-5aa6-41df-904b-f1e07761e2ce-c'
                alt='home'
              />
              <span className='card-title'>
                40 Fringe Tree, Irvine, CA 92606
              </span>
            </div>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card z-depth-0'>
            <div className='card-content'>
              <span className="card-title">Overview {id}</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem recusandae, doloribus perspiciatis, hic error quod
                nobis ab quasi itaque sit aut. Voluptatem ab aliquam iste
                delectus eligendi tenetur, quae eius.
              </p>
              <p>$3000/mo</p>

              <ul>
                <li>3 Bedrooms</li>
                <li>2.5 Baths</li>
                <li>
                  Bedroom Dimensions
                  <ul>
                    <li>Master Bedroom: 16' x 12'</li>
                    <li>Guest Bedroom: 10' x 12'</li>
                    <li>Guest Bedroom: 12' x 9'</li>
                  </ul>
                </li>
                <ul>
                  <li>Image Link 1: http://www.google.com</li>
                  <li>Image Link 2: http://www.google.com</li>
                  <li>Image Link 3: http://www.google.com</li>
                  <li>Image Link 4: http://www.google.com</li>
                  <li>Image Link 5: http://www.google.com</li>
                  <li>Image Link 6: http://www.google.com</li>
                  <li>Image Link 7: http://www.google.com</li>
                </ul>
                <li>Overall Rating: 4.5/5</li>
                <li>Review 1</li>
                <li>Review 2</li>
                <li>Review 3</li>
                <li>Review 4</li>
                <li>Review 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
