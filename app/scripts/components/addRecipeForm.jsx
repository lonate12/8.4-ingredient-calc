var React = require('react');
var Backbone = require('backbone');
var Template = require('./layout/template.jsx').Template;
var Recipe = require('../models/recipes.js').Recipe;
var Ingredient = require('../models/ingredients.js').Ingredient;

var AddRecipeForm = React.createClass({
  getInitialState: function(){

    return this.props.recipe.toJSON();
  },
  handleInputChange: function(e){
    var target = e.target;

    var newState =  {};
    newState[target.name] = target.value;

    this.props.recipe.set(target.name, target.value);

    this.setState(newState);
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.addRecipe(this.state);
  },
  render: function(){
    console.log(this.state);
    return(
      <form onSubmit={this.handleSubmit} className="col-md-6 col-md-offset-3">
        <h2>Add a recipe!</h2>
        <div className="form-group">
          <label htmlFor="recipe_name">Recipe Name</label>
          <input required="required" onChange={this.handleInputChange} type="text" className="form-control" name="recipe_name" id="recipe_name" placeholder="Recipe Name" value={this.state.recipe_name} />
        </div>
        <div className="form-group">
          <label htmlFor="creator">By</label>
          <input required="required" onChange={this.handleInputChange} type="text" className="form-control" name="creator" id="owner" placeholder="By" value={this.state.creator} />
        </div>
        <div className="form-group">
          <label htmlFor="recipe_type">Recipe Type</label>
          <select onChange={this.handleInputChange} id="recipe_type" name="recipe_type">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="prep_time">Prep Time (in min)</label>
          <input onChange={this.handleInputChange} type="number" className="form-control" id="prep_time" name="prep_time" placeholder="Prep Time in minutes (i.e. 30)" value={this.state.prep_time} />
          <label htmlFor="cook_time">Cook Time (in min)</label>
          <input onChange={this.handleInputChange} type="number" className="form-control" id="cook_time" name="cook_time" placeholder="Cook Time in minutes (i.e. 30)" value={this.state.cook_time}/>
          <label htmlFor="cook_temp">Cook Temp (in Farenheit)</label>
          <input onChange={this.handleInputChange} type="number" className="form-control" id="cook_temp" name="cook_temp" placeholder="Cook Temp in Farenheit (i.e. 350)" value={this.state.cook_temp}/>
        </div>
        <div className="form-group form-inline">
          <span>This recipe will make </span>
          <label className="sr-only" htmlFor="quantity">Serving Amount</label>
          <input onChange={this.handleInputChange} type="number" className="form-control" id="quantity" name="quantity" placeholder="Amount" value={this.state.quantity}/>
          <label className="sr-only" htmlFor="servings_unit">Serving Units</label>
          <input onChange={this.handleInputChange} type="text" className="form-control" id="servings_unit" name="servings_unit" placeholder="Serving Units (i.e. cookies, brownies, servings)" value={this.state.servings_unit}/>
        </div>
        <input type="submit" value="Add Ingredients"/>
      </form>
    );
  }
});

var AddIngredientForm = React.createClass({
  handleInputChange: function(e){

  },
  render: function(){
    return(
      <form className="col-md-6 col-md-offset-3">
        <div>
          <div className="form-group">
            <label className="sr-only" htmlFor="ingredient-amount">Amount</label>
            <input onChange={this.handleInputChange} type="text" className="form-control" name="amount" id="ingredient-amount" placeholder="Amount"  />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="ingredient-units">Units</label>
            <input onChange={this.handleInputChange} type="text" className="form-control" name="units" id="ingredient-units" placeholder="Units" />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="ingredient-name">Name</label>
            <input onChange={this.handleInputChange} type="text" className="form-control" name="name" id="ingredient-name" placeholder="Name"  />
          </div>
        </div>
      </form>
    );
  }
});

var AddRecipeFormContainer = React.createClass({
  getInitialState: function(){
    return{
      recipe: new Recipe(),
      isVisible: false
    }
  },
  addRecipe: function(props){
    this.state.recipe.set(props);
    this.state.recipe.parseNumbers();
    this.state.recipe.save().then(function(response){
      Backbone.history.navigate('/add-recipe/' + response.objectId + '/', {trigger: true});
    });
  },
  render: function(){
    console.log(this.state.recipe);
    return(
      <Template>
        <div className="row">
          <AddRecipeForm addRecipe={this.addRecipe} isVisible={this.state.isVisible} recipe={this.state.recipe}/>
        </div>
        {this.state.isVisible ? <div className="row"><AddIngredientForm /></div> : null}
      </Template>
    );
  }
});

module.exports = {
  AddRecipeFormContainer: AddRecipeFormContainer
};
