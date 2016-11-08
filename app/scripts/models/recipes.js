var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  defaults: {
    recipe_name: 'My new recipe',
    creator: '',
    image_url: './images/default.jpg',
    quantity: 0,
    servings_unit: 'servings',
    ingredients: [],
    recipe_type: '',
    prep_time: 0,
    cook_time: 0,
    cook_temp: 0
  },
  idAttribute: 'objectId',
  urlRoot: 'https://rene-recipe-app.herokuapp.com/classes/Recipes',
  userIDToPointer: function(objectId){
    return {
      "__type": "Pointer",
      "className": "<_User>",
      "objectId": "objectId"
    };
  }
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://rene-recipe-app.herokuapp.com/classes/Recipes'
});

module.exports = {
  Recipe: Recipe,
  RecipeCollection: RecipeCollection
};
