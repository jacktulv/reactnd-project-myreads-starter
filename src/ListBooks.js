import React, { Component } from 'react';
import { Link }  from 'react-router-dom'

class ListBooks extends Component {


  render(){

      return(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
                <div className="list-books-content">
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.props.books.filter(c=>c.shelf=="currentlyReading").map((book)=>(
                        <li  key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              {book.hasOwnProperty('imageLinks') ? (
                              <div className="book-cover" style={{width:128,height:189,
                              backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                              ) :
                              (<div className="book-cover" style={{width:128,height:189,
                              backgroundImage:`url('/')`}}></div>
                              )}
                            <div className="book-shelf-changer">
                                <select value='currentlyReading' onChange={(event)=>this.props.onchangeShelf(book,event.target.value)} >
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
                        </li>))}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.props.books.filter(c=>c.shelf=="wantToRead").map((book)=>(
                        <li  key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{width:128,height:189,
                              backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                              <div className="book-shelf-changer">
                                <select value='wantToRead' onChange={(event)=>this.props.onchangeShelf(book,event.target.value)} >
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
                        </li>))}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.props.books.filter(c=>c.shelf=="read").map((book)=>(
                        <li  key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{width:128,height:189,
                              backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                              <div className="book-shelf-changer">
                                <select value='read' onChange={(event)=>this.props.onchangeShelf(book,event.target.value)} >
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
                        </li>))}
                      </ol>
                    </div>
                  </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
            </div>
        </div>
        )
      }
}



export default  ListBooks
