import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as TaskActions from '../actions/tasks'

class Tasks extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentWillMount () {
    this.props.fetchTasks()
  }

  render () {
    const {tasks} = this.props
    return (
      <ul className="list">
        {tasks.map((task, i) => {
          return (
            <li className="task" key={i}>
              <label className="task-label">
                <input type="checkbox" name="" />
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
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.Tasks.tasks
})
const mapDispatchToProps = dispatch => bindActionCreators(TaskActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
