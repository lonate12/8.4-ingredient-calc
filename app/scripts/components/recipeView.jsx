var $ = require('jquery');
var React = require('react');

var Template = require('./layout/template.jsx').Template;

var RecipeContainer = React.createClass({
  getInitialState: function(){
    var self = this;
    var currentRecipe;

    $.ajax({url: 'https://rene-recipe-app.herokuapp.com/classes/Recipes/'+this.props.currentId+'/'}).then(function(response){
      console.warn(response);
      currentRecipe = response;
      self.setState({currentRecipe: currentRecipe});
    });

    return {
      currentRecipe: currentRecipe
    };
  },
  render: function(){
    return(
      <Template>
        <h1>Test Recipe Container</h1>
      </Template>
    );
  }
});

module.exports = {
  RecipeContainer: RecipeContainer
};
