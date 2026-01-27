import React, { useEffect } from 'react'

const UseEffectApi = () => {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.join())
        .then((data)=>console.log(data));
    },[])
    
  return (
    <div>UseEffectApi</div>
  )
}

export default UseEffectApi