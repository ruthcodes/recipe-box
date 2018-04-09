import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';

export function ContentContainer(props){
    return (
        <Row className="recipeRow">
          <Col className="recipeCol" xs={12} sm={12} md={12} lg={12} xl={12}>
            <ul>
            {
              Object.keys(props.name).map(function(key) {
                return <li key={key} className={props.active === key ? 'activeRecipe': null}
                onClick={props.expandRecipe.bind(this, key)} >{props.name[key]}<br/><br/>{props.ingredients[key]}</li>
              })
            }
            </ul>
          </Col>
        </Row>
    );
}
