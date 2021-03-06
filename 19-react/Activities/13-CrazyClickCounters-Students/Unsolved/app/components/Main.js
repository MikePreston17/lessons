// Include React
var React = require("react");
var Adder = require("./panels/Adder");
var Imgr = require("./panels/Imgr");
var Multiplier = require("./panels/Multiplier");
var Randomizer = require("./panels/Randomizer");
// Import all of the sub components here

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick: function() {
    this.setState({ clicks: 1 + this.state.clicks });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1>Hey you! Click this button!</h1>
            <p>I do crazy things.</p>
            <p>
              {/*
                Here we create a button click.
                Note how we have an onClick event associated with our handleClick function.
                this.handleClick references the handleClick function defined above our render function
              */}
              <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
            </p>
          </div>

          {/*
            Below we add each of the sub components.
            Note how we "pass" in the click count as a prop called "clicks" to each sub component
          */}
          <div className="col-md-3">

            {/* Add code to render the Adder component here */}
            <Adder clicks={this.state.clicks}/>
          </div>

          <div className="col-md-3">

            {/* Add code to render the Multiplier component here */}
            <Multiplier clicks={this.state.clicks}/>
          </div>


          <div className="col-md-3">

            {/* Add code to render the Randomizer component here */}
            <Randomizer clicks = {this.state.clicks} />
          </div>

          <div className="col-md-3">

             {/* Add code to render the Imgr component here */}
             <Imgr clicks = {this.state.clicks} />
          </div>

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
