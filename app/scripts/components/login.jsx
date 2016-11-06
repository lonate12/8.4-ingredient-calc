var React = require('react');

// Local imports
var Template = require('./layout/template.jsx').Template;
var User = require('../models/user.js').User;

var LoginForm = React.createClass({
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
  handleLogin: function(e){
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;

    this.state.user.login(email, password);

    this.setState({email: '', password: ''});
  },
  render: function(){
    return(
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
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

var LoginContainer = React.createClass({
  render: function(){
    return(
      <Template>
        <LoginForm />
      </Template>
    );
  }
});

module.exports = {
  LoginContainer: LoginContainer
};
