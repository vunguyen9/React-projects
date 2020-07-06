import React from 'react';
import * as BooksAPI from '../BooksAPI';
import SearchBar from './SearchBar';
import Book from './Book';
import history from '../history.js';
import '../App.css';

class BookSearch extends React.Component {
	state = { booksSearch: [], booksOnShelf: {} }

	componentDidMount() {
		BooksAPI.getAll().then(books => {
			console.log("BookSearch", books)
			this.setState({ booksOnShelf: books.reduce((booksById, book) => {
				booksById[book.id] = book.shelf
				return booksById;
			}, {}) })
		})
	}

	onSearchSubmit = query => {
		BooksAPI.search(query).then(res => {
			this.setState({booksSearch: res})
		});
		
	}


	handleChange = (book, shelf) => {
		BooksAPI.update(book, shelf).then(history.push('/'));
	}

	renderList = booksSearch => {
		if (!Array.isArray(booksSearch)) {
			return <li>No result</li>
		}
		else if (booksSearch.length) {
			return booksSearch.map(book => {
				book.shelf = book.id in this.state.booksOnShelf ? this.state.booksOnShelf[book.id] : 'none'
				console.log("BookSearch", book.shelf)
				return (
					<li key={book.id}>
						<Book book={book} handleChange={this.handleChange} />
					</li>
				)
			})
		}
	}

	

	render() {

		return (
			<div className="search-books">
	        	<SearchBar onSubmit={this.onSearchSubmit} />
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{this.renderList(this.state.booksSearch)}
	              </ol>
	            </div>
	        </div>
		)
	}
}

export default BookSearch;