import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as TaskActions from '../actions/tasks'

class Tasks extends React.Component {
  componentWillMount () {
    this.props.getTasks()
  }

  render () {
    return (
      <ul className="list">
        <li className="task">
          <label className="task-label">
            <input type="checkbox" name="" />
            <span>Call Mom</span>
          </label>
          <img
            className="icon-pomo pull-right"
            src="./assets/pomodoro.png"
            alt=""
          />
        </li>
        <li className="task">
          <label className="task-label">
            <input type="checkbox" name="" />
            <span>Schedule annual checkup</span>
          </label>
          <img
            className="icon-pomo pull-right"
            src="./assets/pomodoro.png"
            alt=""
          />
        </li>
        <li className="task">
          <label className="task-label">
            <input type="checkbox" name="" />
            <span>Outline chapter 5</span>
          </label>
          <img
            className="icon-pomo pull-right"
            src="./assets/pomodoro.png"
            alt=""
          />
        </li>
        <li className="task">
          <label className="task-label">
            <input type="checkbox" name="" />
            <span>
              Presentation - Continuous integration with Node.js
            </span>
          </label>
          <img
            className="icon-pomo pull-right"
            src="./assets/pomodoro.png"
            alt=""
          />
        </li>
        <li className="task">
          <label className="task-label">
            <input type="checkbox" name="" />
            <span>Make Gorae 2017 development plan</span>
          </label>
          <img
            className="icon-pomo pull-right"
            src="./assets/pomodoro.png"
            alt=""
          />
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators(TaskActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
