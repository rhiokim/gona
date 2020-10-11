import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ipcRenderer} from 'electron'

import * as Actions from '../actions/config'
import pkg from '../../package.json'

class Preferences extends React.Component {
  componentWillMount () {
    this.props.fetchConfig()
  }

  toggleStartAtLogin (event) {
    const el = event.target
    this.props.putConfig('startAtLogin', el.checked)

    ipcRenderer.send('enable-start-at-login', el.checked)
  }

  render () {
    const {startAtLogin} = this.props.config
    return (
      <div className="content">
        <form>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                defaultChecked={startAtLogin}
                onChange={this.toggleStartAtLogin.bind(this)}
              />{' '}
              Start <strong>{pkg.name}</strong> when you login
            </label>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  config: state.App.config
})

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Preferences)
