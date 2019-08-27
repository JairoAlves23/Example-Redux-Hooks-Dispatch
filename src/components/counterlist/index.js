import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inc, dec } from '../../actions/counter'

const Counter = props => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const decValue = dec()
  const incValue = inc()


  function decCounter() {
    dispatch({type:decValue.type})
  }

  function incCounter() {
    dispatch({type:incValue.type})
  }

  function stepCounter(e) {
    dispatch({type:'STEP_CHANGED',payload:e.target.value}
    )
  }

 
    return (
    <div>
       <h1>{counter.number}</h1>
        <input onChange={e => stepCounter(e)}
            value={counter.step} type='number' />
        <button onClick={decCounter}>Dec</button>
        <button onClick={incCounter}>Inc</button> 
    </div>
    )
}
export default Counter

