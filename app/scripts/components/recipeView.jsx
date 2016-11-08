var $ = require('jquery');
var React = require('react');

var Template = require('./layout/template.jsx').Template;
var Recipe = require('../models/recipes.js').Recipe;
var Ingredient = require('../models/ingredients.js').Ingredient;
var AdjustRecipe = require('./adjustRecipe.jsx').AdjustRecipe;

var RecipeSection = React.createClass({
  render: function(){
    return(
      <div className="col-md-12">
        <p>{this.props.currentRecipe.get('recipeName')}</p>
        <img src={this.props.currentRecipe.get('image_url')} alt={this.props.currentRecipe.get('image_url')}></img>
        <ul className="list-inline">
          <li><p>Recipe Type</p><p>Dessert</p></li>
          <li><p>Prep Time</p><p>15min</p></li>
          <li><p>Cook Time</p><p>20min</p></li>
          <li><p>Cook Temp</p><p>350 F</p></li>
        </ul>
      </div>
    );
  }
});

var IngredientSection = React.createClass({
  render: function(){
    return(
      <div className="col-md-12">
      </div>
    );
  }
});

var RecipeDisplay = React.createClass({
  render: function(){
    return(
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <RecipeSection currentRecipe={this.props.currentRecipe}/>
          <AdjustRecipe adjustRecipe={this.props.adjustRecipe} currentRecipe={this.props.currentRecipe}/>
          <IngredientSection currentRecipe={this.props.currentRecipe}/>
        </div>
      </div>
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
      currentRecipe.set({adjustedQuantity: currentRecipe.get('quantity')});
      self.setState({currentRecipe: currentRecipe});
    });

    return {
      currentRecipe: currentRecipe
    };
  },
  adjustRecipe: function(factor, amountToMake){
    var ingredientsArray = this.state.currentRecipe.get('ingredients');

    ingredientsArray.forEach(function(ingredient){
      ingredient.calcNewQuantity(factor);
    });

    this.state.currentRecipe.set({ingredients: ingredientsArray, adjustedQuantity: amountToMake});
    this.setState({currentRecipe: this.state.currentRecipe});
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
    }).then(function(){
      self.setState({currentRecipe: self.state.currentRecipe});
    });
  },
  render: function(){
    return(
      <Template>
        <RecipeDisplay adjustRecipe={this.adjustRecipe} currentRecipe={this.state.currentRecipe}/>
      </Template>
    );
  }
});

module.exports = {
  RecipeContainer: RecipeContainer
};
