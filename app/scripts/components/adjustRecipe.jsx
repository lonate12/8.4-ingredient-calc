var React = require('react');
var RecipeCollection = require('../models/recipes.js').RecipeCollection;

var AdjustRecipe = React.createClass({
  render: function(){
    var testRecipeCollection = new RecipeCollection();
    testRecipeCollection.add([
      {
        quantity: 2,
        units: 'cups',
        description: 'chocolate'
      },{
        quantity: 1,
        units: 'cup',
        description: 'flour'
      },{
        quantity: 7,
        units: 'ounces',
        description: 'vanilla'
      }
    ]);
    var self = this;
    var ingredients = testRecipeCollection.map(function(ingredient){
      return(
        <li className="ingredient" key={ingredient.get('description')}>
          <span>{ingredient.get('quantity')}</span>
          <span> {ingredient.get('units')}</span>
          <span> {ingredient.get('description')}</span>
        </li>
      );
    });
    // var ingredients = this.props.recipe.map(function(ingredients){
    //   return(
    //     <li className="ingredients">
    //       <span>ingredients.get('quantity')</span>
    //       <span>ingredients.get('units')</span>
    //       <span>ingredients.get('description')</span>
    //     </li>
    //   );
    // });

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
                     <input type="text" className="form-control" id="servings" placeholder="#" />
                     <span className="header-span">Servings</span>
                   </div>
                   <button type="submit" className="btn btn-default">Adjust Recipe</button>
                 </form>
               </div>
               <div className="col-md-10 recipe-message">
                 <span className="recipe-message-span"><span>check  </span>Ingredients list now reflects the new serving size.</span>
               </div>
             </div>
             <div className="col-md-12 ingredient-pane">
               <div className="col-md-12">
                 <ul className="ingredients-ul">
                   {ingredients}
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
