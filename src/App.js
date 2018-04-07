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
      nameInput : '',
      ingredients: [],
      ingredientsInput: '',
      counter: 0,
    };

    this.handleChangeName =this.handleChangeName.bind(this);
    this.handleChangeIngredients =this.handleChangeIngredients.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePopup = this.handlePopup.bind(this);
  }

  handlePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }


  handleChangeName(event){
    this.setState({
      nameInput: event.target.value
    });
  }

  handleChangeIngredients(event){
    this.setState({
      ingredientsInput: event.target.value
    });
  }


  handleSubmit(event) {
    const current = this.state.name;
    const newName = current.concat(this.state.nameInput);

    const currentIn = this.state.ingredients;
    const newIn = currentIn.concat(this.state.ingredientsInput);

    this.setState({ name: newName, ingredients: newIn }, function(){
      console.log(this.state.name);
      console.log(this.state.ingredients);
    });

    this.handlePopup();
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
          <Popup text='Add a Recipe' submitForm={this.handleSubmit} nameChange={this.handleChangeName} ingredientsChange={this.handleChangeIngredients}/>
          : null
        }
      </Grid>
    );
  }
}

export default App;
