var React = require('react');
var Template = require('./layout/template.jsx').Template;

var RecipeForm = React.createClass({
  render: function(){
    return(
      <div className = "container">
        <Template>
          <h1>Test Recipe Form</h1>
        </Template>
      </div>
    );
  }
});

module.exports = {
  RecipeForm: RecipeForm
};
