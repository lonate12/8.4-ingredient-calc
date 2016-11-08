var React = require('react');

var Template = require('./layout/template.jsx').Template;
var RecipeCollection = require('../models/recipes.js').RecipeCollection;

var RecipeTile = React.createClass({
  render: function(){
    var tiles = this.props.recipeCollection.map(function(recipe){
      return(
        <div key={recipe.get('objectId')} className="col-md-2">
          <div className="recipe-thumbnail col-md-12">
            <a href={'#/classes/Recipes/'+ recipe.get('objectId') +'/'}>
              <p className="recipe-name">{recipe.get('recipeName')}</p>
            </a>
          </div>
        </div>
      );
    });
    return(
      <div className="recipe-tile row">
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
