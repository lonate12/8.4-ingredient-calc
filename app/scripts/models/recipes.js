var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  defaults: {
    recipe_name: '',
    creator: '',
    image_url: './images/default.jpg',
    quantity: 0,
    servings_unit: 'servings',
    ingredients: [],
    recipe_type: 'breakfast',
    prep_time: 0,
    cook_time: 0,
    cook_temp: 0,
    owner: {"__type": "Pointer", "className": "_User", "objectId": localStorage.getItem('userID')}
  },
  parseNumbers: function(){
    this.set({
      quantity: parseInt(this.get('quantity')),
      prep_time: parseInt(this.get('prep_time')),
      cook_time: parseInt(this.get('cook_time')),
      cook_temp: parseInt(this.get('cook_temp'))
    });
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
