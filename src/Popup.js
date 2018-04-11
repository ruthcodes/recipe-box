import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form } from './Form';
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
              <Form nameChange={props.nameChange} ingredientsChange={props.ingredientsChange} submitForm={props.submitForm} name={props.nameInput}/>
            </Row>
        </div>
      </div>
    );
}
