var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({

});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://rene-recipe-app.herokuapp.com/classes/Recipes'
});

module.exports = {
  Recipe: Recipe,
  RecipeCollection: RecipeCollection
};
