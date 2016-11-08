var React = require('react');
var RecipeCollection = require('../models/recipes.js').RecipeCollection;

var AdjustRecipe = React.createClass({
  render: function(){
    var self = this;
    var ingredients = this.props.currentRecipe.get('ingredients')

    if(ingredients){
      var listOfIngredients = ingredients.map(function(ingredient){
      return(
        <li key={ingredient.cid}>{ingredient.get('quantity')} {ingredient.get('units')} {ingredient.get('description')}</li>
      );
    })};

    return(
      <div className="container">
       <div className="row">
         <div className="col-md-8 recipe-pane">
           <div className="row">
             <div className="col-md-12 recipe-header">
               <div className="col-md-10 recipe-servings">
                 <form className="form-inline">
                   <div className="form-group">
                     <label className="header-span" htmlFor="exampleInputName2">Makes</label>
                     <input type="text" className="form-control" id="servings" placeholder="#" value={this.props.currentRecipe.get('quantity')} />
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
