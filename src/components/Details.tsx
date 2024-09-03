import React from 'react'

function Details({data}:any) {
  return (
    <div>
        <h3>Name: {data?.name}</h3>
        <h4>Price: ${data?.price}</h4>
    </div>
  )
}

export default Details