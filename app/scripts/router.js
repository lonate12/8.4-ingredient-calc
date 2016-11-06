// Third Party Imports
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

// Component Imports
var AppComponent = require('./components/app.jsx').AppComponent;
var RecipeList = require('./components/recipeList.jsx').RecipeList;
var AddRecipeForm = require('./components/addRecipeForm.jsx').AddRecipeForm;
var SignUpContainer = require('./components/signUp.jsx').SignUpContainer;
var LoginContainer = require('./components/login.jsx').LoginContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'recipe-list/': 'recipeList',
    'add-recipe/': 'recipeForm',
    'sign-up/': 'signUp',
    'login/': 'login'
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
      React.createElement(RecipeList),
      document.getElementById('app')
    );
  },
  recipeForm: function(){
    ReactDOM.render(
      React.createElement(AddRecipeForm),
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
      React.createElement(LoginContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.export = router;
