import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';

export function ContentContainer(props){
    return (
        <Row className="recipeRow">
          <Col className="recipeCol" xs={12} sm={12} md={12} lg={12} xl={12}>
            <p>Recipes go here</p>
          </Col>
        </Row>
    );
}
