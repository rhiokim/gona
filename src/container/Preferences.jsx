import React from 'react'
import pkg from '../../package.json'

class Preferences extends React.Component {
  render () {
    return (
      <div className="content">
        <form>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
              {' '}
              Start
              {' '}
              <strong>{pkg.name}</strong>
              {' '}
              when you login
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default Preferences
