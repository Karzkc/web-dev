import React ,{useContext} from 'react'
import { countercontext } from '../context/context'
import Comp3 from './Comp3'

const Comp2 = () => {
    const value = useContext(countercontext)
  return (
    <div>
        <Comp3/>
        <button onClick={() => value.setCount((count) => count + 1)}>
            click me
        </button> <br />
        Iam comp 2
       
    </div>
  )
}

export default Comp2
