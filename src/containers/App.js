import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    const {user, page} = this.props.data;
    return <div>
      <p>Привет из App, {user.name}!</p>
      <p>You have {page.photos.length} photos in {page.year}</p>
    </div>
  }

}

function mapStateToProps(state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(App)