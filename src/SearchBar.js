import React from 'react';
import { Button } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';

export function SearchBar(props){
    return (
      <div className="search">
         <input type="text" className="searchTerm" placeholder="Search"/>
         <Button type="submit" className="searchButton"></Button>
      </div>
    )
}
