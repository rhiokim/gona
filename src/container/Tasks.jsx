import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as TaskActions from '../actions/tasks'

import CompletedTasks from '../components/tasks/CompletedTasks'

class Tasks extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      workspace: 'default'
    }
  }

  handleClick (i, event) {
    const el = event.target
    const value = el.checked
    this.props.doneTask(i, value)
  }

  componentWillMount () {
    // this.props.fetchTasks()
  }

  render () {
    const {workspace} = this.state
    const tasks = this.props.workspaces[workspace]
    return (
      <div>
        <ul className="list">
          {tasks.map((task, i) => {
            return (
              <li className="task" key={i}>
                <label className="task-label">
                  <input
                    type="checkbox"
                    name=""
                    checked={task.done}
                    onChange={this.handleClick.bind(this, i)}
                  />
                  <span>{task.subject}</span>
                </label>
                <img
                  className="icon-pomo pull-right"
                  src="./assets/pomodoro.png"
                  alt=""
                />
              </li>
            )
          })}
        </ul>

        <hr />

        <CompletedTasks />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  workspaces: state.App.workspaces
})
const mapDispatchToProps = dispatch => bindActionCreators(TaskActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
