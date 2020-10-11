import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as Actions from '../actions/links'
import CompletedLinks from '../components/links/CompletedLinks'

class Links extends React.Component {
  handleClick (id, event) {
    const el = event.target
    const value = el.checked
    this.props.doneLink(id, value)
  }

  render () {
    const {links} = this.props
    return (
      <div>
        {links.length === 0 ? (
          <div className="none">Well done :) Great job</div>
        ) : null}

        <ul className="list">
          {links.map(link => (
            <li className="link" key={link.id}>
              <label className="link-label">
                <input
                  type="checkbox"
                  checked={link.done}
                  onChange={this.handleClick.bind(this, link.id)}
                />
                <a href={link.url}>{link.url}</a>
              </label>
            </li>
          ))}
        </ul>

        <hr />

        <CompletedLinks />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  links: state.App.links
})
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Links)
