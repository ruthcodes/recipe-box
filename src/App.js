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
      changed: false,
      active: '',
      editing: ''
    };

    this.saveLocally = this.saveLocally.bind(this);
    this.handleChangeName =this.handleChangeName.bind(this);
    this.handleChangeIngredients =this.handleChangeIngredients.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePopup = this.handlePopup.bind(this);
    this.expandRecipe = this.expandRecipe.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
  }

  UNSAFE_componentWillMount(){
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
      showPopup: !this.state.showPopup
    });
  }

  expandRecipe(e){

      this.setState({
        active: e
      });

  }

  handleEditing(e){
    this.setState({
      editing: e
    });
    
  }



  handleChangeName(event){
      this.setState({nameInput: event.target.value, changed: true});
  }

  handleChangeIngredients(event){
      this.setState({ingredientsInput: event.target.value, changed: true});
  }

  saveLocally(){
    const localName = this.state.name.slice();
    const localIngredients = this.state.ingredients.slice();
    localStorage.setItem("saveName", JSON.stringify(localName));
    localStorage.setItem("saveIngredients", JSON.stringify(localIngredients));
  }

  handleSubmit(event) {

      if (this.state.changed){
        const current = this.state.name;
        const newName = current.concat(this.state.nameInput);
        const currentIn = this.state.ingredients;
        const newIn = currentIn.concat(this.state.ingredientsInput);

          this.setState({ name: newName, ingredients: newIn, changed: false }, function(){
          //  console.log(this.state.name);
          //  console.log(this.state.ingredients);
            this.saveLocally();
          });
      }

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
          <ContentContainer name={this.state.name} ingredients={this.state.ingredients} active={this.state.active} expandRecipe={this.expandRecipe} handleEditing={this.handleEditing} editing={this.state.editing}/>
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
