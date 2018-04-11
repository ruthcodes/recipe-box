import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './bootstrap.min.css';

import './App.css';

export function Form(props) {
    return (
      <form onSubmit={props.handleSubmit}>
        Title:<br/>
        <input type="text" onChange={props.nameChange} value={props.name} />
        <br/>
        Ingredients:<br/>
        <textarea type="text" onChange={props.ingredientsChange} value={props.ingredients}/>
        <Row>
          <Col className="popFoot ok" xs={0} sm={6} md={8} lg={8} xl={10}></Col>
          <Col className="popFoot delete" xs={12} sm={6} md={4} lg={4} xl={2}><Button onClick={props.submitForm}>OK</Button></Col>
        </Row>
      </form>
    );
}
