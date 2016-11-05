var React = require('react');

var Template = require('./layout/template.jsx').Template;

var RecipeList = React.createClass({
  render: function(){
    return(
      <div className = "container">
        <Template>
          <h1>Test Recipe List</h1>
        </Template>
      </div>
    );
  }
});

module.exports = {
  RecipeList: RecipeList
};
