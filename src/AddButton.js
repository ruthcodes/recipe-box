import React from 'react';
import { Button } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';

export function AddButton(props){
    return <Button className="add btn-primary" onClick={props.onClick}>+</Button>;
}
