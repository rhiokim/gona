import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as Actions from '../actions/app'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <header className="toolbar toolbar-header">
        <h1 className="title">TODO <span className="js-update-time" /></h1>

        <div className="toolbar-actions">
          <div className="btn-group">
            <button className="btn btn-default active">
              <span className="icon icon-check" />
            </button>
            <button className="btn btn-default">
              <span className="icon icon-link" />
            </button>
            <button className="btn btn-default">
              <span className="icon icon-users" />
            </button>
          </div>

          <button className="btn btn-default">
            <span className="icon icon-plus icon-text" />
            New
          </button>

          <button className="btn btn-default btn-dropdown pull-right">
            <span className="icon icon-megaphone" />
          </button>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => Object.assign({}, state.App)

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header)
