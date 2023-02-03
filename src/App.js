import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';

//first value second is function


function App() {
  ///To get local Time 
  let now = new Date().toLocaleTimeString();
  //First we set the time and second function in useState we set the value
  const [time,setTime] = useState(now);
  const [count,setCount] = useState(12);
  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(updateTime,1000);
  function increase(){
    setCount(count + 1);
  }
  function decrease(){
    setCount(count - 1);
  }
  return (
   <div className='container'>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <br />
   <h1>{time}</h1>
   <br />
   <button onClick={updateTime}>Get Time</button>
   </div>

  );
}

export default App;
