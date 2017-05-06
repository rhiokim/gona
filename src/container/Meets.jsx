import React from 'react'

class Meets extends React.Component {
  render () {
    return (
      <ul className="list">
        <li className="link">
          <label className="link-label">
            <input type="checkbox" name="" />
            <span>Daily Stand-Up Meeting</span> <span>at 3:00pm</span>
          </label>
        </li>
      </ul>
    )
  }
}

export default Meets
