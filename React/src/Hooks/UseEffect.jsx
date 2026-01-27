import React, { useEffect,useState} from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);
    const [value,setValue]=useState(0);
    useEffect(() => {
        console.log("UseEffect Mounted");
    },[count,value])
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>inc</button>
        <h1>Value : {value}</h1>
        <button onClick={() => setValue(value + 1)}>inc</button>
    </div>
  )
}

export default UseEffect