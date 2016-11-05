var React = require('react');
var Template = require('./layout/template.jsx').Template;

var AddRecipeForm = React.createClass({
  render: function(){
    return(
      <Template>
        <h1>Test Recipe Form</h1>
      </Template>
    );
  }
});

module.exports = {
  AddRecipeForm: AddRecipeForm
};
