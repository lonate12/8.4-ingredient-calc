var React = require('react');

var Template = require('./layout/template.jsx').Template;

var RecipeList = React.createClass({
  render: function(){
    return(
      <Template>
        <h1>Test Recipe List</h1>
      </Template>
    );
  }
});

module.exports = {
  RecipeList: RecipeList
};
