// Third Party Imports
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

// Component Imports
var AppComponent = require('./components/app.jsx').AppComponent;
var RecipeListContainer = require('./components/recipeList.jsx').RecipeListContainer;
var AddRecipeFormContainer = require('./components/addRecipeForm.jsx').AddRecipeFormContainer;
var SignUpContainer = require('./components/signUp.jsx').SignUpContainer;
var LoginContainer = require('./components/login.jsx').LoginContainer;
var RecipeContainer = require('./components/recipeView.jsx').RecipeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'recipe-list/': 'recipeList',
    'add-recipe/': 'recipeForm',
    'sign-up/': 'signUp',
    'login/': 'login',
    'classes/Recipes/:id/': 'recipe'
  },
  initialize: function(){
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Parse-Application-Id', 'recipe_calc'),
        xhr.setRequestHeader('X-Parse-REST-API-Key', 'france')
      }
    });
  },
  index: function(){
    ReactDOM.render(
      React.createElement(AppComponent),
      document.getElementById('app')
    );
  },
  recipeList: function(){
    ReactDOM.render(
      React.createElement(RecipeListContainer),
      document.getElementById('app')
    );
  },
  recipeForm: function(){
    ReactDOM.render(
      React.createElement(AddRecipeFormContainer),
      document.getElementById('app')
    );
  },
  signUp: function(){
    ReactDOM.render(
      React.createElement(SignUpContainer),
      document.getElementById('app')
    );
  },
  login: function(){
    ReactDOM.render(
      React.createElement(LoginContainer, {router: this}),
      document.getElementById('app')
    );
  },
  recipe: function(id){
    ReactDOM.render(
      React.createElement(RecipeContainer, {currentId: id}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.export = router;
