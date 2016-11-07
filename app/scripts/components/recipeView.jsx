var $ = require('jquery');
var React = require('react');

var Template = require('./layout/template.jsx').Template;
var Recipe = require('../models/recipes.js').Recipe;
var Ingredient = require('../models/ingredients.js').Ingredient;

var RecipeDisplay = React.createClass({
  render: function(){
    return(
      <h1>Test Display</h1>
    );
  },
});

var RecipeContainer = React.createClass({
  getInitialState: function(){
    var self = this;
    var currentRecipe = new Recipe();

    $.ajax({
      url: 'https://rene-recipe-app.herokuapp.com/classes/Recipes/' + this.props.currentId + '/'
    }).then(function(response){
      currentRecipe.set(response);
      self.setState({currentRecipe: currentRecipe});
    });

    return {
      currentRecipe: currentRecipe
    };
  },
  componentWillMount: function(){
    var self = this;

    $.ajax({
      url: 'https://rene-recipe-app.herokuapp.com/classes/Ingredients/?'+'where={"recipe":{"__type":"Pointer","className":"Recipes","objectId":"'+this.props.currentId+'"}}'
    }).then(function(data){
      var ingredients = data.results.map(function(ingredient){
        var newIngredient = new Ingredient();
        newIngredient.set(ingredient);
        return newIngredient;
      });

      self.state.currentRecipe.set({ingredients: ingredients});
      self.setState({currentRecipe: self.state.currentRecipe});
    });
  },
  render: function(){

    return(
      <Template>
        <RecipeDisplay currentRecipe={this.state.currentRecipe}/>
      </Template>
    );
  }
});

module.exports = {
  RecipeContainer: RecipeContainer
};
