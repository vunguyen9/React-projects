import React from 'react'
import { signOut } from '../actions/authedUser'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class AuthButton extends React.Component {

	onSignOutClick = () => {
		this.props.signOut()
	}

	renderAuthButton() {
		if(this.props.isSignedIn) {
			return (
				
				<Button onClick={this.onSignOutClick}>
					Sign Out
				</Button>
				
			)
		}
		else {
			return (
				
				<Button as={Link} to='/' primary>
					Sign In 
				</Button>
				
			)
		}
	}

	render() {
		return (
			<div>{this.renderAuthButton()}</div>
		)
	}
}

function mapStateToProps({ authedUser }) {
	return {
		isSignedIn: authedUser !== null
	}
}

export default connect(mapStateToProps, { signOut })(AuthButton)