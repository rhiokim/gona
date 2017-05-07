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

  handleClick (id, event) {
    const el = event.target
    const value = el.checked
    this.props.doneTask(id, value)
  }

  componentWillMount () {
    // this.props.fetchTasks()
  }

  render () {
    // const {workspace} = this.state
    const {tasks} = this.props
    return (
      <div>
        {tasks.length === 0
          ? <div className="none">Well done :) Great job</div>
          : null}
        <ul className="list">
          {tasks.map(task => {
            return (
              <li className="task" key={task.id}>
                <label className="task-label">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={this.handleClick.bind(this, task.id)}
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
  workspaces: state.App.workspaces,
  tasks: state.App.tasks
})
const mapDispatchToProps = dispatch => bindActionCreators(TaskActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
