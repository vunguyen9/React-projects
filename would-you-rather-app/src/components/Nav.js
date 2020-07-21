import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
import AuthButton from './AuthButton'
import { connect } from 'react-redux'

class Nav extends React.Component {
	state = { activeItem: 'home' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	renderUserName = () => {
		if(this.props.authedUser !== null) {
			const name = this.props.users[this.props.authedUser].name
			const avatarURL = this.props.users[this.props.authedUser].avatarURL
			return (
				<Menu.Item>
					<Image circular size='mini' src={avatarURL} />
					<span>{`Hello, ${name}`}</span>
				</Menu.Item>
			)
		}
	}

	render() {
		const { activeItem } = this.state

		return (
			<div>
				<Menu size='massive' pointing secondary>	
					<Menu.Item
						as={Link} to='/home'
						name="home"
						active={activeItem === 'home'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={Link} to='/add'
						name="new question"
						active={activeItem === 'new question'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={Link} to='/leaderboard'
						name="leader board"
						active={activeItem === 'leader board'}
						onClick={this.handleItemClick}
					/>
					<Menu.Menu position='right'>
						{this.renderUserName()}
						<Menu.Item><AuthButton /></Menu.Item>
					</Menu.Menu>
				</Menu>
			</div>
		)
	}
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}



export default connect(mapStateToProps)(Nav)