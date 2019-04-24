import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  stateInit = {
    email: '',
    password: ''
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
          <form onSubmit={this.submitHandler} className='col s12'>
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
                <button
                  className='btn waves-effect waves-light btn-large'
                  type='submit'
                  name='action'
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
