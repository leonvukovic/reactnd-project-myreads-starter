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

  render() {
    console.log(this.state.myBooks);
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
            myBooks={this.state.myBooks}
          />
        )}/>
      <Route path="/search" render={({history}) => (
          <SearchPage />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
