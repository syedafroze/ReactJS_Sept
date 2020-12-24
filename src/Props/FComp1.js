import React from 'react'
import {FComp2} from './FComp2'
function FComp1(){
   let name ="Devika"
  return (
    <div>
      <h2>This is FComp1</h2>
      <FComp2 person={name}></FComp2>
    </div>
  )
}

export default FComp1