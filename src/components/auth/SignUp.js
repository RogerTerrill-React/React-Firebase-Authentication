import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    password2: ''
  };

  stateInit =  {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    password2: ''
  }

  changeHandler = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState(this.stateInit)
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <form className='col s12'>
            <div className='row'>
              <div className='input-field col s6'>
                <input
                  id='firstName'
                  type='text'
                  onChange={this.changeHandler}
                  className='validate'
                />
                <label htmlFor='firstName'>First Name</label>
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

export default SignUp;
