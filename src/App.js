import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';
import { ContentContainer } from './ContentContainer';
import { SearchBar } from './SearchBar';
import { AddButton } from './AddButton';
import { Popup } from './Popup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };

    this.handlePopup = this.handlePopup.bind(this);
  }

  handlePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
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
          <Popup text='Add a Recipe'closePopup={this.handlePopup}/>
          : null
        }
      </Grid>
    );
  }
}

export default App;
