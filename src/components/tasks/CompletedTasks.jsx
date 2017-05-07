import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as Actions from '../../actions/tasks'

class CompletedTasks extends React.Component {
  render () {
    return (
      <ul className="list">
        <li className="task">
          <label className="task-label">completed tasks</label>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompletedTasks)
