import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
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
              <Col className="popFoot ok" xs={0} sm={6} md={8} lg={8} xl={10}></Col>
              <Col className="popFoot delete" xs={12} sm={6} md={4} lg={4} xl={2}><Button onClick={props.closePopup}>OK</Button><Button className="btn-danger">Delete</Button></Col>
            </Row>
        </div>
      </div>
    );
}
