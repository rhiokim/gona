import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as Actions from '../../actions/tasks'

class CompletedTasks extends React.Component {
  handleClick (id, event) {
    const el = event.target
    const value = el.checked
    this.props.doneTask(id, value)
  }

  render () {
    const tasks = this.props.completedTasks
    return (
      <ul className="list">
        {tasks.map(task => (
          <li className="task done" key={task.id}>
            <label className="task-label">
              <input
                type="checkbox"
                checked={task.done}
                onChange={this.handleClick.bind(this, task.id)}
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
