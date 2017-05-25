import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    const user = this.props.user;
    return <div>
      <p>Привет из App, {user.name} {user.surname}!</p>
      <p>You are already {user.age} years old! </p>
    </div>
  }

}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)