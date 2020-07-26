import React from 'react'
import './App.css'

import { Router, Route } from 'react-router-dom';
import history from './history';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';

const BooksApp = () => {
  return (
    <div className="app">
      <Router history={history}>
        <div>
          <Route path="/" exact component={BookList} />
          <Route path="/search" exact component={BookSearch} />
        </div>
      </Router>
    </div>
  )
}

export default BooksApp
