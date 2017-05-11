import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Header, Footer, DateHeader} from '../components'
import Tasks from './Tasks'
import Links from './Links'
import Meets from './Meets'
import Preferences from './Preferences'
import * as Actions from '../actions/app'

class App extends React.Component {
  componentWillMount () {
    this.props.fetchTodoAll()
  }

  renderMain () {
    const {activeMenu} = this.props
    switch (activeMenu) {
      case 'links':
        return <Links />
      case 'meettings':
        return <Meets />
      case 'preferences':
        return <Preferences />
      default:
        return <Tasks />
    }
  }

  render () {
    return (
      <div>
        <div className="header-arrow" />
        <div className="window">

          <Header />

          <div className="window-content">
            <div className="pane">

              <div className="summary js-summary hide">Loading…</div>

              <div className="progress">
                <div className="remain" />
                <div className="done" />
              </div>

              <DateHeader />

              {this.renderMain()}

            </div>
          </div>

          <Footer />

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activeMenu: state.App.activeMenu
})
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
