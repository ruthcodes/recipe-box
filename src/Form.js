import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      ingredients: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var name = this.state.name.slice();
    name.push(event.target.name);
    var ingredients = this.state.ingredients.slice();
    ingredients.push(event.target.ingredients);

    this.setState({
      name: name,
      ingredients: ingredients
    });

    console.log(this.state.name);
    console.log(this.state.ingredients);
  }

  handleSubmit(event) {
    //this is where form adds to html (dangerously set) or deletes
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Title:<br/>
        <input type="text"/>
        <br/>
        Ingredients:<br/>
        <textarea type="text" />
      </form>
    );
  }
}
