import React from 'react'
import { useSelector } from 'react-redux'

export const Counter = () => {
  // const count = useSelector((state)=> state.Counter.value)
  const count = useSelector( (state)=> state.Counter.value)
    return (
    <div>
        <div>
        <button>Increment</button>
        <br/>
        <br/>
        <div > {count} </div>
        <br/>
        <br/>
        <button>Decrement</button>
       
        </div>


    </div>
  )
}
