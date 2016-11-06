var React = require('react');

// Local imports
var Template = require('./layout/template.jsx').Template;
var User = require('../models/user.js').User;

var LoginForm = React.createClass({
  render: function(){
    return(
      <h1>Test Login</h1>
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
