import React from 'react'
import { connect } from 'react-redux'
import { Item } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'


class HomePage extends React.Component {
	state = { answered: false}
	
	handleViewPoll = (id) => {
		console.log(id)
	}

	renderList(ids) {
		const { users, questions } = this.props
		const sortedIds = ids.sort((a, b) => questions[b].timestamp - questions[a].timestamp)

		return sortedIds.map(id => {
			return (	
				<Item key={id}>
					<Item.Image size='tiny' src={users[questions[id].author].avatarURL} />
					<Item.Content>
						<Item.Header as='a'>{`${users[questions[id].author].name} asks:`}</Item.Header>
						<Item.Meta>Would You Rather</Item.Meta>
						<Item.Description>{`...${questions[id].optionOne.text}...`}</Item.Description>
						<Item.Extra>
							<Link to={`/question/${id}`}>
								<button onClick={ () => this.handleViewPoll(id) } className="ui teal fluid button">
									View Poll
								</button>
							</Link>
						</Item.Extra>
					</Item.Content>
				</Item>
			)
		})
	}


	

	render() {
		

		return (
			<div className="ui centered card" style={{ width: '50vh' }}>
				<div className="extra content">
					<div className="ui two buttons">
						<button className="ui fluid large button" onClick={()=>{this.setState({answered: false})}}>Unanswered Questions</button>
						<button className="ui fluid large button" onClick={()=>{this.setState({answered: true})}}>Answered Questions</button>
					</div>
				</div>
				
				<div className="extra content">
					<Item.Group divided>
						{this.state.answered === true 
							? this.renderList(this.props.answeredQuestions)
							: this.renderList(this.props.unansweredQuestions)
						}
					</Item.Group>
				</div>
					
			</div>
			
		)
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	const answeredQuestions = Object.keys(users[authedUser].answers)
	const unansweredQuestions = Object.keys(questions).filter(id => !answeredQuestions.includes(id))
	return {
		authedUser,
		users,
		questions,
		answeredQuestions,
		unansweredQuestions
	}
}

export default withRouter(connect(mapStateToProps)(HomePage))