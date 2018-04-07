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
      name: ["icecream", "CHEESE"],
      ingredients: ["sugar, cream, vanilla", "milk"],
      counter: 0,
    };

    this.handleChange =this.handleChange.bind(this);
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

  handleChange(event){
    console.log(event.target.data);
    if (event.target.data === "name"){
      console.log("doing name one");
      this.handleName(event);
    } else {
      console.log("doing ing one");
      this.handleIngredients(event);
    }

  }


  handleName(event){
    console.log(event.target);
    this.setState({
      name: event.target.value
    });

    console.log("name is: " + this.state.name);
  }

  handleIngredients(event){

    this.setState({
      ingredients: event.target.value
    });
  }

  handleSubmit(event) {

    let count = this.state.counter;
    count +=1;

    this.setState({
      counter : count
    });
    this.handlePopup();
    console.log("final name: " + this.state.name);
    console.log("final ing: " + this.state.ingredients);
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
          <Popup text='Add a Recipe' submitForm={this.handleSubmit} name={this.state.name} ingredients={this.state.ingredients} onChange={this.handleChange}/>
          : null
        }
      </Grid>
    );
  }
}

export default App;
