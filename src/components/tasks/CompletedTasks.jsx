import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as Actions from '../../actions/tasks'

class CompletedTasks extends React.Component {
  handleClick () {}

  render () {
    const tasks = this.props.completedTasks
    return (
      <ul className="list">
        {tasks.map((task, i) => (
          <li className="task done" key={i}>
            <label className="task-label">
              <input
                type="checkbox"
                name=""
                checked={task.done}
                onChange={this.handleClick.bind(this, i)}
              />
              <span>{task.subject}</span>
            </label>
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  completedTasks: state.App.completedTasks
})
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTasks)
