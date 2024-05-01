import { useState } from 'react'

import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)


  let myObj = {
    name : "Vishal",
    age : 22,
    address : {
      city : "Patna",
      state : "Bihar",
      country: "india"
    }
  }

  let newArry = [1,2,3,4,5,6,6,8,7];

  return (
   <>
  
    <h1 className="text-1xl italic bg-green-500"> Hello world!</h1>
     
    <Card username = "Vishal Prakash" address = "UnderGraduate,Patna,Bihar" myArr={myObj}/>
   
 
   </>
  )
}

export default App
