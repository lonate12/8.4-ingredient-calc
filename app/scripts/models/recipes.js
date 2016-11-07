var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId',
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
