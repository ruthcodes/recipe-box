import React from 'react';

import './App.css';

export function Form(props) {
    return (
      <form onSubmit={props.handleSubmit}>
        Title:<br/>
        <input type="text" onChange={props.onChange}/>
        <br/>
        Ingredients:<br/>
        <textarea type="text" />
      </form>
    );
}
