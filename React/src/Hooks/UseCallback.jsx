import React, { useState, useCallback } from 'react';
import Header from "../component/Header";


const UseCallback = () => {
  const [count, setCount] = useState(0);
  const Newfun = useCallback(()=>{

  },[count]
)

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Header newFun = {Newfun}/>
      <h1>{count}</h1>
      <button onClick={increment}>Count++</button>
    </div>
  );
};

export default UseCallback;
