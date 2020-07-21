import React, { Fragment } from 'react'
import { Card, Radio, Image, Progress, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { saveQuestionAnswer } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class QuestionPage extends React.Component {
	state = { value: '' }

	componentDidMount() {
		if (this.props.question) {
			if(this.props.question.optionOne.votes.includes(this.props.authedUser)){
				this.setState({ value: 'optionOne'})
			}
			else if (this.props.question.optionTwo.votes.includes(this.props.authedUser)){
				this.setState({ value: 'optionTwo'})
			}
		}
	}
	
	handleChange = (e, { value }) => this.setState({ value })

	onSubmit = (qid, answer) => {
		this.props.saveQuestionAnswer(qid, answer)
	}

	renderContent(authedUser, id, question, users, name, avatarURL) {
		let viewPoll = false
		let myAnswer = ''
		if(Object.keys(users[authedUser].answers).includes(id)){
			viewPoll = true
			myAnswer = users[authedUser].answers
		}

		
		const optionOneVotes = question.optionOne.votes.length
		const optionTwoVotes = question.optionTwo.votes.length
		const totalVotes = optionOneVotes + optionTwoVotes
		const optionOnePercent = Math.floor((optionOneVotes/totalVotes)*100)
		const optionTwoPercent = Math.floor((optionTwoVotes/totalVotes)*100)

		return (
			<Fragment>
				<Card.Content>
					<Image floated='right' size='small' src={avatarURL} />
					<Card.Header>{`${name} asks: `}</Card.Header>
				</Card.Content>
				<Card.Content>
					
					{(viewPoll === false)
						?	<Card.Header>Would You Rather:
								<br></br>
								<br></br>
								<Radio
						            label={`${question.optionOne.text}`}
						            name='radioGroup'
						            value='optionOne'
						            checked={this.state.value === 'optionOne'}
						            onChange={this.handleChange}
						        />
						        <br/>
						        <br/>
						        <Radio
						            label={`${question.optionTwo.text}`}
						            name='radioGroup'
						            value='optionTwo'
						            checked={this.state.value === 'optionTwo'}
						            onChange={this.handleChange}
						        />
						        <br/>
						        <br/>
						      	<button className="ui primary fluid button" disabled={this.state.value === ''} onClick={() => this.onSubmit(id, this.state.value)}>Submit</button>
							</Card.Header>

						:   <Fragment>
								
								<Card fluid color="green">
									<Card.Content>
										{myAnswer[id] === 'optionOne' ? <Label as='a' color='orange' ribbon='right'>Your Vote</Label> : null}
										<Card.Header>{`Would You rather ${question.optionOne.text} ?`}</Card.Header>
										
										
										<Card.Description><Progress color={'teal'} percent={optionOnePercent} progress/></Card.Description>
									</Card.Content>
									<Card.Content extra>{`${optionOneVotes} out of ${totalVotes}`}</Card.Content>
								</Card>
								<Card fluid>
									<Card.Content>
										{myAnswer[id] === 'optionTwo' ? <Label as='a' color='orange' ribbon='right'>Your Vote</Label> : null}
										<Card.Header>{`Would You rather ${question.optionTwo.text} ?`}</Card.Header>
										
										<Card.Description><Progress color={'teal'} percent={optionTwoPercent} progress/></Card.Description>
									</Card.Content>
									<Card.Content extra>{`${optionTwoVotes} out of ${totalVotes}`}</Card.Content>
								</Card>
							</Fragment>
					}
					
				</Card.Content>
			</Fragment>
		)
	}

	render() {
		if(this.props.question === undefined){
			return <Redirect to='/404'/>
		}
		const { id } = this.props.match.params
		const { question, users, authedUser } = this.props
		const name = users[question.author].name
		const avatarURL = users[question.author].avatarURL



		return (
			
			<div className="ui card centered" style={{ width: '50vh' }}>
				{this.renderContent(authedUser, id, question, users, name, avatarURL)}
			</div>
		)
	}
}

function mapStateToProps({ authedUser, questions, users }, ownProps) {
	return {
		authedUser,
		users,
		question: questions[ownProps.match.params.id]
	}
}


export default connect(mapStateToProps, { saveQuestionAnswer })(QuestionPage)