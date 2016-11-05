var React = require('react');

var Template = require('./layout/template.jsx').Template;

var SignUpForm = React.createClass({
  render: function(){
    return(
      <h1>Test Sign Up</h1>
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
