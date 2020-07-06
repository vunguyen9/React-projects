import React from 'react';
import Book from './Book';
import '../App.css';

class BookShelf extends React.Component {


	renderList = books => {
		return books.map(book => {
			return (
				<li key={book.id}>
					<Book book={book} handleChange={this.props.handleChange} />
				</li>
			)
		})
	}

	render() {

		return (
			<div className="bookshelf">
          		<h2 className="bookshelf-title">{this.props.shelf}</h2>
          		<div className="bookshelf-books">
            		<ol className="books-grid">
              			{this.renderList(this.props.books)}
            		</ol>
          		</div>
        	</div>
		)
	}
}

export default BookShelf;