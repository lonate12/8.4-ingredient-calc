var React = require('react');
var Template = require('./layout/template.jsx').Template;

var AddRecipeForm = React.createClass({
  render: function(){
    return(
      <div className="col-md-6 col-md-offset-3">
        <div className="row form-head">
          <img src="..." alt="..." className="col-md-3"/>
          <input type="text" className="col-md-9" id="recipe-name" placeholder="Recipe Name"/>
          <input type="text" className="col-md-9" id="by" placeholder="By"/>
          <label>
            <input type="checkbox" id="make-public" value="make-public"/> <i>Make it Public</i>
          </label>
          <label>
            <input type="checkbox" id="keep-private" value="keep-private"/> <i>Keep it Private</i>
          </label>
        </div>
        <div className="row body">
          <span className="col-md-3">This recipe will make</span>
          <input type="text" className="col-md-1" id="initial-quantity" placeholder="Amount"/>
          <input type="text" className="col-md-8" id="initial-quantity-units" placeholder="Cookies, Loaves, Servings, etc"/>
        </div>
        <div className="row ingredient-input form-inline">
          <p>Step 1</p>
          <div className="form-group col-md-12">
            <input type="text" className="ingredient-quantity" placeholder="Amount" />
            <input type="text" className="ingredient-unit" placeholder="Units" />
            <input type="text" className="ingredient-name" placeholder="Bread, Flour, Sugar, etc." />
            <button>+</button>
          </div>
        </div>
        <div className="row additional-instructions">
          <textarea rows="5" className="col-md-12" placeholder="What directions go with this step?"></textarea>
        </div>
        <button>Add Another Step</button>
      </div>
    );
  }
});

var AddRecipeFormContainer = React.createClass({
  render: function(){
    return(
      <Template>
        <form className="row">
          <AddRecipeForm />
        </form>
      </Template>
    );
  }
});

module.exports = {
  AddRecipeFormContainer: AddRecipeFormContainer
};
