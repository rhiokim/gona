import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer className="toolbar toolbar-footer">

        <div className="toolbar-actions pull-left">
          <div className="btn-group">
            <a
              href="https://github.com/rhiokim/todo"
              className="btn btn-default"
            >
              <span className="icon icon-github" title="Refresh" />
            </a>
          </div>
        </div>

        <div className="toolbar-actions pull-right">
          <div className="btn-group">
            <button className="btn btn-default js-refresh-action">
              <span
                className="icon icon-arrows-ccw js-refresh-action"
                title="Refresh"
              />
            </button>

            <button className="btn btn-default show-devtool-action">
              <span
                className="icon icon-tools show-devtool-action"
                title="DevTool"
              />
            </button>

            <button className="btn btn-default js-quit-action">
              <span className="icon icon-cancel js-quit-action" title="Quit" />
            </button>
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer
