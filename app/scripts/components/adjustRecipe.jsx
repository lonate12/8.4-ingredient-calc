var React = require('react');
var RecipeCollection = require('../models/recipes.js').RecipeCollection;

var AdjustRecipe = React.createClass({
  getInitialState: function(){
    return{
      amountToMake: 1,
      originalQuantity: 1
    }
  },
  handleAmountChange: function(e){
    this.setState({amountToMake: e.target.value});
  },
  adjustRecipe: function(e){
    e.preventDefault();

    var factor = this.state.amountToMake/this.state.originalQuantity;
    this.props.adjustRecipe(factor, this.state.amountToMake);
  },
  componentWillReceiveProps: function(nextProps){
    var quantity = nextProps.currentRecipe.get('quantity');
    var adjustedQuantity = nextProps.currentRecipe.get('adjustedQuantity');
    this.setState({amountToMake: adjustedQuantity, originalQuantity: quantity});
  },
  render: function(){
    var self = this;
    var ingredients = this.props.currentRecipe.get('ingredients')

    if(ingredients){
      var listOfIngredients = ingredients.map(function(ingredient){
      return(
        <li key={ingredient.cid}>{ingredient.get('adjustedQuantity')} {ingredient.get('units')} {ingredient.get('description')}</li>
      );
    })};

    return(
      <div className="container">
       <div className="row">
         <div className="col-md-8 recipe-pane">
           <div className="row">
             <div className="col-md-12 recipe-header">
               <div className="col-md-10 recipe-servings">
                 <form onSubmit={this.adjustRecipe} className="form-inline">
                   <div className="form-group">
                     <label className="header-span" htmlFor="exampleInputName2">Makes</label>
                     <input onChange={this.handleAmountChange} type="text" className="form-control" id="servings" placeholder="#" value={this.state.amountToMake} />
                     <span className="header-span"> {this.props.currentRecipe.get('servings_unit')}</span>
                   </div>
                   <button type="submit" className="btn btn-default">Adjust Recipe</button>
                 </form>
               </div>
               <div className="col-md-10 recipe-message">
                 <span className="recipe-message-span"><span>check  </span>Ingredients list now reflects the new serving size.</span>
               </div>
             </div>
             <div className="col-md-12 ingredient-panel">
               <div className="col-md-12">
                 <ul className="ingredients-ul">
                   {listOfIngredients}
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    );
  }
});

module.exports = {
  AdjustRecipe: AdjustRecipe
};
