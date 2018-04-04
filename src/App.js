import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
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
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}><h1>Recipe Box</h1></Col>
        </Row>
        <Row>
          <SearchBar />
        </Row>
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
