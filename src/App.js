import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';
import { ContentContainer } from './ContentContainer';
import { SearchBar } from './SearchBar';
import { AddButton } from './AddButton';

class App extends Component {
  

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
          <AddButton />
        </Row>
        <Row>
          <ContentContainer />
        </Row>
      </Grid>

    );
  }
}

export default App;
