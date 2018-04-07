import React, { Component } from 'react';
import { Grid, Row, Jumbotron } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';
import { ContentContainer } from './ContentContainer';
//import { SearchBar } from './SearchBar';
import { AddButton } from './AddButton';
import { Popup } from './Popup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      name: [],
      ingredients: []
    };

    this.handleName = this.handleName.bind(this);
    this.handleIngredients = this.handleIngredients.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePopup = this.handlePopup.bind(this);
  }

  handlePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChange(event) {
    var name = this.state.name.slice();
    name.push(event.target.value);
    console.log("pushing " + event.target.value);
    var ingredients = this.state.ingredients.slice();
    ingredients.push(event.target.value);

    this.setState({
      name: name,
      ingredients: ingredients
    });

    console.log("name is: " + this.state.name);
    console.log("ingredients are: " + this.state.ingredients);
  }

  handleName(event){
    var name = this.state.name.slice();
    name.push(event.target.value);
    console.log("name: " + name);
    this.setState({
      name: name
    });
  }

  handleIngredients(event){
    var ingredients = this.state.ingredients.slice();
    ingredients.push(event.target.value);
    console.log("ingredients: " + ingredients);
    this.setState({
      ingredients: ingredients
    });
  }

  handleSubmit(event) {
    console.log(event.target);
    this.handleName(event);
    this.handleIngredients(event);
    this.handlePopup();
    console.log("closing the popup");


    //this is where form adds to html (dangerously set) or deletes
    event.preventDefault();
  }


  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Recipe Box</h1>
        </Jumbotron>
        <Row>
          <AddButton onClick={this.handlePopup}/>
        </Row>
        <Row>
          <ContentContainer />
        </Row>
        {this.state.showPopup ?
          <Popup text='Add a Recipe' closePopup={this.handlePopup} submitForm={this.handleSubmit} name={this.state.name} ingredients={this.state.ingredients}/>
          : null
        }
      </Grid>
    );
  }
}

export default App;
