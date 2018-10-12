import React from 'react'
import FormattedTime from './formatted_time'

const TimeUpdated = (props) => {
  let date = new Date(props.timestamp * 1000);

  return (
    <p className="text-muted mb-0">{dayOfWeek(date.getDay())} <FormattedTime timestamp={props.timestamp} /></p>
  )
}

function dayOfWeek(day) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day]
}

export default TimeUpdated