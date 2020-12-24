import React from 'react'

function Func(props) {
  console.log("rendering Function Comp")
  return (
    <h2>{props.count}</h2>
  )
}

export default React.memo(Func);
