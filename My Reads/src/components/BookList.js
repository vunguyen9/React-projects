import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookShelf from './BookShelf';
import '../App.css';


class BookList extends React.Component {
	state = {	books: [], 
				currentlyReading: [],
				wantToRead: [],
				read: []
			}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {

			console.log("BookList", books)
			this.setState({	books,
							currentlyReading: books.filter(book => { return book.shelf === "currentlyReading"; }),
							wantToRead: books.filter(book => { return book.shelf === "wantToRead";}),
							read: books.filter(book => { return book.shelf === "read";})
			});
		})
		
	}

	handleChange = (book, shelf) => {
		if (shelf === book.shelf) {
			return
		}
		const oldShelf = book.shelf;
		
		if (shelf === 'none') {
			BooksAPI.update(book, shelf).then(	
				this.setState((currentState) => ({
					[oldShelf]: currentState[oldShelf].filter(c => {
						return c.id !== book.id;
					})
				})),
				book.shelf = shelf
			);
		} else {
			BooksAPI.update(book, shelf).then(	
				this.setState((currentState) => ({
					[shelf]: currentState[shelf].concat([book]),
					[oldShelf]: currentState[oldShelf].filter(c => {
						return c.id !== book.id;
					})
				})),
				book.shelf = shelf	
			);
		}
	}

	

	render() {
		BooksAPI.get("8jZBksh-bUMC").then(b => console.log(b.shelf));
		return (
			<div className="list-books">
	            <div className="list-books-title">
	            	<h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	            	<div>
	            		<BookShelf
	            			books={this.state.currentlyReading}
	            			shelf="Currently Reading"
	            			handleChange={this.handleChange}
	            		/>
	            		<BookShelf
	            			books={this.state.wantToRead}
	            			shelf="Want To Read"
	            			handleChange={this.handleChange}
	            		/>
	            		<BookShelf
	            			books={this.state.read}
	            			shelf="Read"
	            			handleChange={this.handleChange}
	            		/>
	              	</div>
	            </div>
	            <Link to="/search" className="open-search">
	            	<button>Add a book</button>
	            </Link>
	        </div>
		)
		
	}
}

export default BookList;