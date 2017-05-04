import React from 'react'

class Links extends React.Component {
  render () {
    return (
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
    )
  }
}

export default Links
