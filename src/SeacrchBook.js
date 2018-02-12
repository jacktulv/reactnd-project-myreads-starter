import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import * as  BooksAPI from './BooksAPI'

class SeacrchBook extends Component {

  state = {
    query: '',
    results: []
  }


  updateQuery = (query) => {
    this.setState({ query: query.trim() }),
    BooksAPI.search(query).then((results)=>(
      (results instanceof Array ) ? (this.setState({ results: results}))  :
       (this.setState({ results: [] }))
    )
  )}


  render()  {
    const { query } = this.state



    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
                    value={query} onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.state.results.map((book)=>(
              <li  key={book.id}>
                <div className="book">
                  <div className="book-top">
                  {book.hasOwnProperty('imageLinks') ? (
                  <div className="book-cover" style={{width:128,height:189,
                  backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                  ) :
                  (<div className="book-cover" style={{width:128,height:189,
                  backgroundImage:`url(/)`}}></div>
                  )}
                    <div className="book-shelf-changer">
                      <select value={this.props.getshelf(book)}
                        onChange={(event)=>this.props.onchangeShelf(book,event.target.value)} >
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))
          }
          </ol>
        </div>
      </div>


    )
  }
}


export default  SeacrchBook
