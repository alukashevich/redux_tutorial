import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/user.component'
import Page from '../components/page.component'
import * as pageActions from '../actions/page.actions'

class App extends Component {

  render() {

    const { user, page } = this.props
    const { getPhotos } = this.props.pageActions

    return  <div className='row'>
        <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} />
        <User name={user.name} />
      </div>
  }

}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)