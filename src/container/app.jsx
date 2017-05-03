import React from 'react'

import {Header, Footer} from '../components'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      active: 'todo'
    }
  }

  render () {
    return (
      <div>
        <div className="header-arrow" />
        <div className="window">

          <Header />

          <div className="window-content">
            <div className="pane">

              <div className="summary js-summary hide">Loading…</div>

              <div className="progress">
                <div className="remain" />
                <div className="done" />
              </div>

              <div className="day">
                <h3 className="date">24 <small>Sunday</small></h3>
                <div className="yy-mm pull-right">
                  <b>April</b> <span>2017</span>
                </div>
              </div>

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

              <hr />

              <ul className="list">
                <li className="link">
                  <label className="link-label">
                    <input type="checkbox" name="" />
                    <a href="https://github.com/rhiokim/todo">
                      https://github.com/rhiokim/todo
                    </a>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <Footer />

        </div>
      </div>
    )
  }
}
