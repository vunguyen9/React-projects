import React from 'react';
import '../App.css';


const Book = props => {
	const {title, authors} = props.book;
	const noCoverImage = 'http://tinleychamber.org/wp-content/uploads/2019/01/no-image-available.png';
	const url = props.book.imageLinks === undefined ? noCoverImage : props.book.imageLinks.thumbnail;
	const shelf = props.book.shelf === undefined ? 'none' : props.book.shelf;
	

	return (
		<div className="book">
			<div className="book-top">
				<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
				<div className="book-shelf-changer">
	        		<select value={shelf} onChange={ (event) => props.handleChange(props.book, event.target.value)}>
			            <option value="move" disabled>Move to...</option>
			            <option value="currentlyReading">Currently Reading</option>
			            <option value="wantToRead">Want to Read</option>
			            <option value="read">Read</option>
			            <option value="none">None</option>
			  		</select>
				</div>
			</div>
			<div className="book-title">{title}</div>
			<div className="book-authors">{authors}</div>
		</div>
	)
}

export default Book;