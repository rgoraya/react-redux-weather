import React from 'react'
import FormattedTime from './formatted_time'

const TimeUpdated = (props) => {
  let date = new Date(props.timestamp * 1000);

  return (
    <small>{dayOfWeek(date.getDay())} <FormattedTime timestamp={props.timestamp} /></small>
  )
}

function dayOfWeek(day) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day]
}

export default TimeUpdated