var $ = require('jquery');
var Backbone = require('backbone');

var User = Backbone.Model.extend({
  urlRoot: 'https://rene-recipe-app.herokuapp.com/users',
  setLocalStorage: function(response){
    var JSONResponse = JSON.stringify(response);
    localStorage.setItem('sessionToken', response.sessionToken);
    localStorage.setItem('userID', response.objectId);
    localStorage.setItem('currentUser', JSONResponse);
  },
  setHeader: function(response){
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Parse-Application-Id', 'recipe_calc'),
        xhr.setRequestHeader('X-Parse-REST-API-Key', 'france'),
        xhr.setRequestHeader('X-Parse-Session-Token', response.sessionToken);
      }
    });
  },
  signUp: function(username, password){
    var newUserInput = {username: username, password: password};
    var self = this;
    localStorage.setItem('username', username);
    this.save(newUserInput).then(function(response){
      console.log(response);

      if(response.sessionToken){
        self.setLocalStorage(response);
      }

      self.setHeader(response);
    });
  },
  login: function(username, password){
      var url = 'https://rene-recipe-app.herokuapp.com/login';
      var self = this;
      localStorage.setItem('username', username);

      $.get(url+'?username='+username+'&password='+password).then(function(response){

        self.setLocalStorage(response);

        self.setHeader(response);
      });
  }
});

module.exports = {
  User: User
};
