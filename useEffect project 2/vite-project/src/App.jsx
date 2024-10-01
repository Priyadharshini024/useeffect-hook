import React, { useEffect, useState } from 'react'

const App = () => {

  const[count1,setCount1] = useState(0);
  const[count2,setCount2] = useState(0);

  useEffect(() =>{
  console.log("inside useEffect");
  },[count2])


  return (
    
    <div>
      <h1>Use Effect Hook</h1>
      <div className='box'>
        <h1>{count1}</h1>
        <button onClick={() => setCount1(count1+1)}>Inc button 1</button>
      </div>
      <div className='box'>
        <h1>{count2}</h1>
        <button onClick={() => setCount2(count2+1)}>Inc button 2</button>
      </div>
    </div>
  )
}

export default App