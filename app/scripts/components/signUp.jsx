var React = require('react');

// Local imports
var Template = require('./layout/template.jsx').Template;
var User = require('../models/user.js').User;

var SignUpForm = React.createClass({
  getInitialState: function(){
    var user = new User();

    return{
      user: user,
      email: '',
      password: ''
    }
  },
  handleEmail: function(e){
    e.preventDefault();
    this.setState({email: e.target.value});
  },
  handlePassword: function(e){
    e.preventDefault();
    this.setState({password: e.target.value});
  },
  handleSignUp: function(e){
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;

    this.state.user.signUp(email, password);

    this.setState({email: '', password: ''});
  },
  render: function(){
    return(
      <div className="form-container">
        <h2>Sign Up!</h2>
        <form onSubmit={this.handleSignUp}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input onChange={this.handleEmail} type="email" className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.handlePassword}type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
});

var SignUpContainer = React.createClass({
  render: function(){
    return(
      <Template>
        <SignUpForm />
      </Template>
    );
  }
});

module.exports = {
  SignUpContainer: SignUpContainer
};
