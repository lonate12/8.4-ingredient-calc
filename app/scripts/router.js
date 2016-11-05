// Third Party Imports
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

// Component Imports
var AppComponent = require('./components/app.jsx').AppComponent;
var RecipeList = require('./components/recipeList.jsx').RecipeList;
var RecipeForm = require('./components/recipeForm.jsx').RecipeForm;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'recipe-list/': 'recipeList',
    'add-recipe/': 'recipeForm'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(AppComponent),
      document.getElementById('app')
    );
  },
  recipeList: function(){
    ReactDOM.render(
      React.createElement(RecipeList),
      document.getElementById('app')
    );
  },
  recipeForm: function(){
    ReactDOM.render(
      React.createElement(RecipeForm),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.export = router;
