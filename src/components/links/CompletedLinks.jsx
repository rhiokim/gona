import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../../actions/links'

class CompletedLinks extends React.Component {
  handleClick (id, event) {
    const el = event.target
    const value = el.checked
    this.props.doneLink(id, value)
  }

  render () {
    const links = this.props.completedLinks
    return (
      <ul className="list">
        {links.map(link => (
          <li className="link done" key={link.id}>
            <label className="link-label">
              <input
                type="checkbox"
                checked={link.done}
                onChange={this.handleClick.bind(this, link.id)}
              />
              <span>{link.url}</span>
            </label>
            <span className="icon icon-pencil pull-right" />
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  completedLinks: state.App.completedLinks
})
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CompletedLinks)
