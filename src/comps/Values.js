import React from 'react'

function Values(props) {
  const con = props.x.confirmed.value
  return (
    <div>
      <h1>{con}</h1>
    </div>
  )
}

export default Values