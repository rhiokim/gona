import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ipcRenderer, shell } from 'electron'

import * as Actions from '../actions/app'

class Footer extends React.Component {
  handleClick (e) {
    const { currentTarget } = e

    e.preventDefault()
    shell.openExternal(currentTarget.href)

    window.hide()
  }

  handleShowPreferences () {
    this.props.setActiveMenu('preferences')
  }

  handleClose (e) {
    if (window.confirm('Are you sure?')) {
      window.close()
    }
  }

  openAbout (event) {
    ipcRenderer.send('show-about')
  }

  render () {
    return (
      <footer className="toolbar toolbar-footer">
        <div className="toolbar-actions pull-left">
          <div className="btn-group">
            <a
              href="https://github.com/rhiokim/todo"
              className="btn btn-default"
              onClick={this.handleClick}
            >
              <span className="icon icon-github" title="Refresh" />
            </a>
            <button className="btn btn-default" onClick={this.openAbout}>
              <span className="icon icon-info-circled" />
            </button>
          </div>
        </div>

        <div className="toolbar-actions pull-right">
          <div className="btn-group">
            <button className="btn btn-default js-refresh-action">
              <span
                className="icon icon-arrows-ccw js-refresh-action"
                title="Refresh"
              />
            </button>

            <button
              className="btn btn-default"
              onClick={this.handleShowPreferences.bind(this)}
            >
              <span className="icon icon-cog" title="Preferences" />
            </button>

            <button
              className="btn btn-default js-quit-action"
              onClick={this.handleClose}
            >
              <span className="icon icon-cancel js-quit-action" title="Quit" />
            </button>
          </div>
        </div>
      </footer>
    )
  }
}

const mapStateToProps = state => ({
  activeMenu: state.App.activeMenu
})

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
