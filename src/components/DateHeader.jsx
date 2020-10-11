import React from 'react'
import moment from 'moment'

class DateHeader extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentWillMount () {
    this.computeDate()
  }

  computeDate () {
    const d = new Date()

    this.setState({
      year: d.getFullYear(),
      month: moment().format('MMMM'),
      date: d.getDate(),
      dayOfWeek: moment().format('dddd')
    })

    setTimeout(this.computeDate.bind(this), 60000)
  }

  render () {
    const { year, month, date, dayOfWeek } = this.state
    return (
      <div>
        <div className="day">
          <h3 className="date">
            {date} <small>{dayOfWeek}</small>
          </h3>
          <div className="yy-mm pull-right">
            <b>{month}</b> <span>{year}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default DateHeader
