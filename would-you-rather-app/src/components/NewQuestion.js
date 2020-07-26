import React from 'react'
import { Form, Divider, Card } from 'semantic-ui-react'
import { saveQuestion } from '../actions/questions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class NewQuestion extends React.Component {
	state = { toHome: false, optionOneText: '', optionTwoText: ''}

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit = () => {
		const { optionOneText, optionTwoText } = this.state
		this.props.saveQuestion(optionOneText, optionTwoText)
		this.setState({toHome: true})
	} 

	renderSubmitButton = () => {
		const { optionOneText, optionTwoText } = this.state
		if (optionOneText && optionTwoText) {
			return <Form.Button fluid color='teal' content='Submit' />
		} else {
			return <Form.Button disabled fluid color='teal' content='Submit' />
		}
	}

	render() {
		if (this.state.toHome === true) {
			return <Redirect to='/home' />
		}

		const { optionOneText, optionTwoText } = this.state

		return (
			<Card color='teal' centered fluid>
				<Card.Content textAlign='center' header='Create New Question' />
				<Card.Content>
					<Card.Header>Would You Rather ...</Card.Header>
					<br/>
					<Form size='big' onSubmit={this.handleSubmit}>
						<Form.Field required>
							<Form.Input 
								placeholder='Enter Option One Text Here'
								name='optionOneText'
								value={optionOneText}
								onChange={this.handleChange}
							/>
						</Form.Field>
						<Divider horizontal>Or</Divider>
						<Form.Field required>
							<Form.Input 
								placeholder='Enter Option Two Text Here' 
								name='optionTwoText'
								value={optionTwoText}
								onChange={this.handleChange}
							/>
						</Form.Field>
						<Form.Field>
							{this.renderSubmitButton()}
						</Form.Field>
					</Form>
				</Card.Content>
				
			</Card>
		)
	}
}

export default connect(null, { saveQuestion })(NewQuestion)