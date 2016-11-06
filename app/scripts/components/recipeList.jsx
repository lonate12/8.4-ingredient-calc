var React = require('react');

var Template = require('./layout/template.jsx').Template;
var RecipeCollection = require('../models/recipes.js').RecipeCollection;

var RecipeTile = React.createClass({
  render: function(){
    var tiles = this.props.recipeCollection.map(function(recipe){
      return(
        <p className="recipe-name" key={recipe.get('objectId')}>{recipe.get('recipeName')}</p>
      );
    });
    return(
      <div className="recipe-tile">
        {tiles}
      </div>
    );
  }
});

var RecipeListContainer = React.createClass({
  getInitialState: function(){
    var self = this;
    var recipeCollection = new RecipeCollection();
    recipeCollection.fetch().then(function(data){
      recipeCollection.reset([])
      var recipes = data.results;

      recipes.forEach(function(recipe){
        recipeCollection.add(recipe);
      });

      self.setState({recipeCollection: recipeCollection});
    });

    return{
      recipeCollection: recipeCollection
    };
  },
  render: function(){
    console.log(this.state.recipeCollection);

    return(
      <Template>
        <RecipeTile recipeCollection={this.state.recipeCollection}/>
      </Template>
    );
  }
});

module.exports = {
  RecipeListContainer: RecipeListContainer
};
