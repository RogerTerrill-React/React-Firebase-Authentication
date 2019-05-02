import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createHome} from '../../store/actions/homeActions';


class CreateHome extends Component {
  state = {
    address: '',
    city: '',
    state: '',
    zipcode: '',
    overview: '',
    monthlyRent: 0,
    sqft: 0,
    bedrooms: 0,
    bathrooms: 0,
    parkingSpots: 0,
    image1Link: ''
  };

  stateInit = {
    address: '',
    city: '',
    state: '',
    zipcode: '',
    overview: '',
    monthlyRent: 0,
    sqft: 0,
    bedrooms: 0,
    bathrooms: 0,
    parkingSpots: 0,
    image1Link: ''
  };

  changeHandler = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState(this.stateInit);
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <form className='col s12'>
            <div className='row'>
              <div className='input-field col s3'>
                <input
                  id='address'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='address'>Address</label>
              </div>
              <div className='input-field col s3'>
                <input
                  id='city'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='city'>City</label>
              </div>
              <div className='input-field col s1'>
                <input
                  id='state'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='state'>State</label>
              </div>
              <div className='input-field col s1'>
                <input
                  id='zipcode'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='zipcode'>Zipcode</label>
              </div>
              <div className='input-field col s4'>
                <input
                  id='imageURL'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='imageURL'>Image URL</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s2'>
                <input
                  id='monthlyRent'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='monthlyRent'>Monthly Rent</label>
              </div>
              <div className='input-field col s2'>
                <input
                  id='sqft'
                  type='number'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='sqft'>Sqft</label>
              </div>
              <div className='input-field col s2'>
                <input
                  id='bedrooms'
                  type='number'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='bedrooms'>Bedrooms</label>
              </div>
              <div className='input-field col s2'>
                <input
                  id='bathrooms'
                  step='0.25'
                  type='number'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='bathrooms'>Bathrooms</label>
              </div>
              <div className='input-field col s2'>
                <input
                  id='bedroomDims'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='bedroomDims'>Bedroom Dimensions</label>
              </div>
              <div className='input-field col s2'>
                <input
                  id='parkingSpots'
                  type='number'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='parkingSpots'>Parking Spots</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <label htmlFor='overview'>Overview</label>
                <textarea id='overview' className='materialize-textarea' onChange={this.changeHandler}/>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <button
                  className='btn waves-effect waves-light btn-large'
                  type='submit'
                  name='action'
                  onClick={this.submitHandler}
                >
                  Add New Home
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(CreateHome);
