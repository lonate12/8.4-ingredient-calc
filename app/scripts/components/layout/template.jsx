var $ = window.jQuery = window.$ = require('jquery');
var React = require('react');
require('bootstrap-sass/assets/javascripts/bootstrap.min.js');

var Template = React.createClass({
  render: function(){
    return(
      <div className="container">
        <header>
          <nav className="navbar navbar-default">
            <div className="container-fluid">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Brand</a>
              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#/recipe-list/">Recipe List <span className="sr-only">(current)</span></a></li>
                  <li><a href="#/add-recipe/">Add Recipe</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Users <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#/login/">Login</a></li>
                      <li><a href="#/sign-up/">Sign Up</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  {localStorage.getItem('sessionToken') ? <li><span>Hey {localStorage.getItem('username')}!</span></li> : <li><a href="#/login/">Login</a></li>}
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {this.props.children}

        <footer>
          Copyright &copy; 2016 Luis Rene Onate Productions
        </footer>
      </div>
    );
  }
});

module.exports = {
  Template: Template
};
