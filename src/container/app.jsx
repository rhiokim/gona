import React from 'react'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'

import {Header, Footer} from '../components'
import Tasks from './Tasks'
import Links from './Links'
// import * as Actions from '../actions/app'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      active: 'todo'
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

              <Tasks />

              <hr />

              <Links />

            </div>
          </div>

          <Footer />

        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
// })
// const mapDispatchToProps = dispatch => bindActionCreators(Action, dispatch)

export default App
