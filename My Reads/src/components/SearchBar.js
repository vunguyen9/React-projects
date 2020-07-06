import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class SearchBar extends React.Component {
	state = {query: ''}

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.query);
	}

	render() {
		return (
			<div className="search-books-bar">
            	<Link to="/" className="close-search">
					Close
				</Link>
				
            	<div className="search-books-input-wrapper">
            		<form onSubmit={this.onFormSubmit}>
	            		<input 
	            			type="text" 
	            			placeholder="Search by title or author"
	            			value={this.state.query}
	            			onChange={e => this.setState({query: e.target.value})}
	            		/>
            		</form>
            	</div>
	            
            </div>
		)
	}
}

export default SearchBar; 