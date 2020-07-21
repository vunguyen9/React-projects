import React from 'react'
import { Card, Dropdown, Button, Grid, Header, Image} from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class LoginPage extends React.Component {
	state = { value: ''}


	onSubmit = () => {
		if (this.state.value) { 
			this.props.setAuthedUser(this.state.value)
			this.setState({toHome: true})
		}
	}

	handleChange = (e, { value }) => {
		e.preventDefault()
		this.setState({ value }) 
	}


	render() {
		const {from} = this.props.location.state || {from: {pathname: '/'}}
		if(this.props.authedUser === true){
			return <Redirect to={from}/>
		}

		return (
			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			    <Grid.Column style={{ maxWidth: 500 }}>
			    	<Header as='h2' color='teal' textAlign='center'>
				    	Welcome to the Would You Rather App!
				    </Header>
				    <Image className='fluid' src='https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.4/1586457946286/Microsoft.VisualStudio.Services.Icons.Default' />
			      	<Card size='large' className='fluid'>
						<Card.Content>
							<Card.Header>Sign In</Card.Header>
							<Card.Description>
								<Dropdown
									placeholder='Select Friend'
									fluid
									selection
									options={this.props.users}
									onChange={this.handleChange}
								/>
								<br/>
								<Button fluid color='teal' onClick={this.onSubmit}>Submit</Button>
							</Card.Description>
						</Card.Content>
					</Card>
			    </Grid.Column>
			</Grid>
		)
	}
}

function mapStateToProps({ authedUser, users }) {
	const groupByUser = Object.values(users).reduce((groupUsers, user) => {
		groupUsers.push({ 'key': user.id, 
						'text': user.name, 
						'value': user.id, 
						'image': { 'avatar': true, 'src': user.avatarURL } 
					})
		return groupUsers
	}, [])
	return {
		authedUser: authedUser !== null,
  		users:  groupByUser
  	}
}

export default connect(mapStateToProps, { setAuthedUser })(LoginPage)