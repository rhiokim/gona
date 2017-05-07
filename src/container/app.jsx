import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Header, Footer} from '../components'
import Tasks from './Tasks'
import Links from './Links'
import Meets from './Meets'
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

              <div className="day">
                <h3 className="date">24 <small>Sunday</small></h3>
                <div className="yy-mm pull-right">
                  <b>April</b> <span>2017</span>
                </div>
              </div>

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
