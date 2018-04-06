import React from 'react';

import './App.css';

export function Form(props) {
    return (
      <form onSubmit={props.handleSubmit}>
        Title:<br/>
        <input type="text" value={props.name} onChange={props.changing}/>
        <br/>
        Ingredients:<br/>
        <textarea type="text" value={props.ingredients} onChange={props.changing}/>
      </form>
    );
}
