var React = require('react');
var Template = require('./layout/template.jsx').Template;

var AppComponent = React.createClass({
  render: function(){
    return(
      <Template>
        <h1>Test App</h1>
      </Template>
    );
  }
});

module.exports = {
  AppComponent: AppComponent
};
