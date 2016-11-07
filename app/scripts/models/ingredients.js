var Backbone = require('backbone');

var Ingredient = Backbone.Model.extend({
  defaults: {
    adjustedQuantity: null
  },
  idAttribute: 'objectId',
  calcNewQuantity: function(factor){
    this.quantity.set('adjustedQuantity', this.quantity * factor);
  },
  recipeIdToPointer: function(recipeObjectId){
    return {
      "__type": "Pointer",
      "className": "<Recipes>",
      "objectId": "recipeObjectId"
    };
  },
});

var IngredientCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://rene-recipe-app.herokuapp.com/classes/Ingredients'
});

module.exports = {
  Ingredient: Ingredient,
  IngredientCollection: IngredientCollection
};
