var Backbone = require('backbone');

var Ingredient = Backbone.Model.extend({
  defaults: {
    adjustedQuantity: null
  },
  idAttribute: 'objectId',
  calcNewQuantity: function(factor){
    this.set('adjustedQuantity', this.get('quantity') * factor);
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
  model: Ingredient,
  url: 'https://rene-recipe-app.herokuapp.com/classes/Ingredients'
});

module.exports = {
  Ingredient: Ingredient,
  IngredientCollection: IngredientCollection
};
