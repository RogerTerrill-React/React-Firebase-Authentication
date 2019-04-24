import React, { Component } from 'react';

class CreateHome extends Component {
  state = {
    address: '',
    city: '',
    state: '',
    zipcode: '',
    overview: '',
    monthlyRent: 0,
    bedrooms: 0,
    baths: 0,
    masterBedroomDimsFeet: 0,
    guestBedroomDimsFeet1: 0,
    guestBedroomDimsFeet2: 0,
    image1Link: ''
  };

  stateInit = {
    address: '',
    city: '',
    state: '',
    zipcode: '',
    overview: '',
    monthlyRent: 0,
    bedrooms: 0,
    baths: 0,
    masterBedroomDimsFeet: 0,
    guestBedroomDimsFeet1: 0,
    guestBedroomDimsFeet2: 0,
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
              <div className='input-field col s4'>
                <input
                  id='address'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='address'>Address</label>
              </div>
              <div className='input-field col s4'>
                <input
                  id='city'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='city'>City</label>
              </div>
              <div className='input-field col s2'>
                <input
                  id='state'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='state'>State</label>
              </div>
              <div className='input-field col s2'>
                <input
                  id='zipcode'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='zipcode'>Zipcode</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s6'>
                <input
                  id='monthlyRent'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='monthlyRent'>Monthly Rent</label>
              </div>
              <div className='input-field col s6'>
                <input
                  id='lastName'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='lastName'>Last Name</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  id='email'
                  type='email'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='email'>Email</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  id='username'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='username'>Username</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  id='password'
                  type='password'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='password'>Password</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  id='password2'
                  type='password'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='password2'>Confirm Password</label>
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
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateHome;
