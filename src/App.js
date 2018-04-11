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
      active: '',
      action: 'Add',
      indexToChange: 0
    };

    this.saveLocally = this.saveLocally.bind(this);
    this.handleChangeName =this.handleChangeName.bind(this);
    this.handleChangeIngredients =this.handleChangeIngredients.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePopup = this.handlePopup.bind(this);
    this.expandRecipe = this.expandRecipe.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
    this.handleRemoveRecipe = this.handleRemoveRecipe.bind(this);
  }

  componentDidMount(){
    let saveName = JSON.parse(localStorage.getItem('saveName'));
    console.log(saveName);
    let saveIngredients = JSON.parse(localStorage.getItem('saveIngredients'));
    //localStorage.clear();
    if (saveName && saveIngredients){
      this.setState({
        name: saveName,
        ingredients: saveIngredients
      })
    }
  }

  handlePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
      action: 'Add'
    });
  }

  expandRecipe(e){
    if (e === this.state.active){
      this.setState({
        active: ''
      })
    } else {
      this.setState({
        active: e
      });
    }

  }

  handleEditing(e){
    this.setState({
      indexToChange: e,
      nameInput: this.state.name[e],
      ingredientsInput: this.state.ingredients[e],
      action: 'Edit',
      showPopup: true
    });
  }


  handleChangeName(event){
      this.setState({nameInput: event.target.value});
  }

  handleChangeIngredients(event){
      this.setState({ingredientsInput: event.target.value});
  }

  saveLocally(){
    const localName = this.state.name.slice();
    const localIngredients = this.state.ingredients.slice();
    localStorage.setItem("saveName", JSON.stringify(localName));
    localStorage.setItem("saveIngredients", JSON.stringify(localIngredients));
  }

  handleRemoveRecipe(id){
      this.setState((currentState) => {
        return {
          name: currentState.name.filter((names) => names !== currentState.name[id]),
          ingredients: currentState.ingredients.filter((ingredient) => ingredient !== currentState.ingredients[id])
        }
      })
  }

  handleSubmit(event) {

    var current = this.state.name;
    var currentIn = this.state.ingredients;


    //if editing, instead of concating newName, replace appropriate index in name array with newName
    if (this.state.nameInput && this.state.ingredientsInput){
      if (this.state.action === "Add"){
        this.setState((currentState) => {
          return {
            name: currentState.name.concat([this.state.nameInput]),
            ingredients: currentState.ingredients.concat([this.state.ingredientsInput]),
            nameInput: '',
            ingredientsInput: '',
          }
        })

      } else {
        current[this.state.indexToChange] = this.state.nameInput;
        currentIn[this.state.indexToChange] = this.state.ingredientsInput;

          this.setState({
             name: current,
             ingredients: currentIn,
             nameInput: '',
             ingredientsInput: ''
           });

      }
    this.saveLocally();
    this.handlePopup();
    //this is where form adds to html (dangerously set) or deletes
    event.preventDefault();

    }
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
          <ContentContainer name={this.state.name} ingredients={this.state.ingredients} active={this.state.active} expandRecipe={this.expandRecipe} handleEditing={this.handleEditing} editing={this.state.editing} deleteRecipe={this.handleRemoveRecipe}/>
        </Row>
        {this.state.showPopup ?
          <Popup text={this.state.action +' a Recipe'} submitForm={this.handleSubmit} nameChange={this.handleChangeName} ingredientsChange={this.handleChangeIngredients} nameInput={this.state.nameInput} ingredientsInput={this.state.ingredientsInput}/>
          : null
        }
      </Grid>
    );
  }
}

export default App;
