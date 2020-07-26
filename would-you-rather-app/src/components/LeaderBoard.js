import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {

	renderList() {
		const sortedList = this.props.users.sort((a, b) => (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length) )
		return sortedList.map(user => {
			return (
				<Table.Row key={user.id}>
					<Table.Cell>
						<Header as='h3' image>
							<Image src={user.avatarURL} rounded size='mini' />
							<Header.Content>
								{user.name}
							</Header.Content>
						</Header>
					</Table.Cell>
					<Table.Cell textAlign='center'>{Object.keys(user.answers).length}</Table.Cell>
					<Table.Cell textAlign='center'>{user.questions.length}</Table.Cell>
					<Table.Cell textAlign='center'>{Object.keys(user.answers).length + user.questions.length}</Table.Cell>
				</Table.Row>
			)
		})
	}

	render() {
		return (
			<div>
				<br/>
				<Table celled definition size='large' color='teal'>
					<Table.Header fullWidth>
						<Table.Row>
							<Table.HeaderCell textAlign='center'></Table.HeaderCell>
							<Table.HeaderCell textAlign='center'>Question Answered</Table.HeaderCell>
							<Table.HeaderCell textAlign='center'>Question Created</Table.HeaderCell>
							<Table.HeaderCell textAlign='center'>Total Score</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{this.renderList()}
					</Table.Body>
				</Table>
				
			</div>
		)
	}
}

function mapStateToProps ({ users }) {
	return {
		users: Object.values(users)
	}
}

export default connect(mapStateToProps)(LeaderBoard)