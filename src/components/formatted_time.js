import React from 'react'

const FormattedTime = (props) => {
  let date = new Date(props.timestamp * 1000);
  let minutes = `0${date.getMinutes()}`;
  let hours = date.getHours();
  
  // convert to 12 hour format
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  let timeString = `${hours}:${minutes.substr(-2)} ${ampm}`;
  
  return (
    <span>{timeString}</span>
  )
}

export default FormattedTime