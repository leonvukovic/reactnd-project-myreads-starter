import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    myBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((myBooks) => {
      this.setState({ myBooks })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((myBooks) => {
      this.setState({ myBooks })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
            myBooks={this.state.myBooks}
            moveBook={this.moveBook}
          />
        )}/>
      <Route path="/search" render={({history}) => (
          <SearchPage
            moveBook={this.moveBook}
            myBooks={this.state.myBooks}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
