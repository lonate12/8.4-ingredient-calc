var Backbone = require('backbone');

var Ingredient = Backbone.Model.extend({
  defaults: {
    adjustedQuantity: null
  },
  idAttribute: 'objectId',
  calcNewQuantity: function(factor){
    this.quantity.set('adjustedQuantity', this.quantity * factor);
  }
});

var IngredientCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://rene-recipe-app.herokuapp.com/classes/Ingredients'
});

module.exports = {
  Ingredient: Ingredient,
  IngredientCollection: IngredientCollection
};
