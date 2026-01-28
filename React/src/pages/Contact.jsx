import React, { useState } from 'react'

const Contact = () => {
  const [name,setName] = useState("mehatab");
  const toggleName = ()=>{
    setName(name==="mehatab"?"mehaa":"mehatab")
  }
  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={toggleName}>Toggle</button>

    </div>
  )
}

export default Contact