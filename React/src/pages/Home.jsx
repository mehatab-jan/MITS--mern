import React from 'react'
import { useNavigate } from 'react-router-dom'
import About from './About';

const Home = (props) => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/about');
  }
  return (
    <div>
        <h1>Name: {props.name}</h1>
        <button onClick={handleClick}>Go to about pages</button>
        <About name = {name}/>
        <About name = {name}/>
        <About name = {name}/>
        <About name = {name}/>
        

        </div>
  )
}

export default Home