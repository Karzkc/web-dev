import React ,{useContext} from 'react'
import { countercontext } from '../context/context'

const Comp3 = () => {
    const value = useContext(countercontext)
  return (
    <div>
        
       I am comp 3 <br />
       {value.count}
    </div>
  )
}

export default Comp3
