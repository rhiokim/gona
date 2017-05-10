import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as Actions from '../actions/links'

class Links extends React.Component {
  render () {
    const {links} = this.props
    return (
      <ul className="list">
        {links.map(link => (
          <li className="link" key={link.id}>
            <label className="link-label">
              <input type="checkbox" name="" />
              <a href={link.url}>
                {link.url}
              </a>
            </label>
            <img
              className="icon-pomo pull-right"
              src="./assets/pomodoro.png"
              alt=""
            />
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  links: state.App.links
})
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Links)
