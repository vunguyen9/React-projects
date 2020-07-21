import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Nav from './Nav'
import NotFoundPage from './NotFoundPage'
import CustomRoute from './CustomRoute'
import { fetchUsers } from '../actions/users'
import { fetchQuestions } from '../actions/questions'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchQuestions()
  }



  render() {
    const authenticated = this.props.authedUser !== null
    


    return (
      <BrowserRouter>
        <div className="ui container">
            <Nav />
            <Switch>
              <Route path='/' exact component={LoginPage}/> 
              <CustomRoute authenticated={authenticated} path='/home' exact component={HomePage} />
              <CustomRoute authenticated={authenticated} path='/add' exact component={NewQuestion} />
              <CustomRoute authenticated={authenticated} path='/leaderboard' exact component={LeaderBoard} />
              <CustomRoute authenticated={authenticated} path='/question/:id' component={QuestionPage} />
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps, { fetchUsers, fetchQuestions })(App);



/*
<BrowserRouter>
        <div className="ui container">
            <Nav />
            <Switch>
              {this.props.loading === true
                ? <Route path='/' component={LoginPage}/>
                  : <Fragment>
                      <Route path='/' exact component={HomePage} />
                      <Route path='/add' exact component={NewQuestion} />
                      <Route path='/leaderboard' exact component={LeaderBoard} />
                      <Route path='/question/:id' component={QuestionPage} />
                    </Fragment>
              }
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
        </div>
      </BrowserRouter>
      */
