import React from 'react';
import { Redirect, Route } from 'react-router-dom'

class CustomRoute extends React.Component {
  render() {
    const { component: Component, authenticated, ...props } = this.props

    return (
      <Route
        { ...props }
        render={props => (
          authenticated ?
            <Component { ...props } /> :
            <Redirect 
              to={{
                pathname: '/',
                state: { from: props.location.pathname }
              }} 
            />
        )}
      />
    )
  }
}

export default CustomRoute