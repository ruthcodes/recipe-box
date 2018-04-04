import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';


export function Popup(props) {
    return (
      <div className='popup'>
        <div className='popup_inner'>
            <Row className="popRowOne">
              <Col className="popHead" xs={12} sm={12} md={12} lg={12} xl={12}><h2>{props.text}</h2></Col>
            </Row>
            <Row>
              <form>
                Title:<br/>
                <input type="text" name="recipeTitle"/>
                <br/>
                Ingredients:<br/>
                <textarea type="text" name="recipeIngredients"/>
              </form>
            </Row>
            <Row>
              <Col className="popFoot" xs={12} sm={12} md={12} lg={12} xl={12}><button onClick={props.closePopup}>OK</button></Col>
            </Row>
        </div>
      </div>
    );
}
