import { useState, useEffect } from "react"
import axios from 'axios'

const Hooks = (props) => {
  const [counter, setCounter] = useState(0)
  const [myName, setMyName] = useState("")

  useEffect(() => {
      axios.get(`/api/movies/${props.id}`)
      .then((res) => {
          console.log(res.data)
      }).catch(() => console.log('there was an error'))
      return () => {
          console.log('component is unmounting')
      }
  }, [props.id])

  return (
    <div>
      <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <div>
          <input value={myName} onChange={(e) => setMyName(e.target.value) } />
          <button onClick={() => alert(myName)}>Alert My Name</button>
      </div>
    </div>
  )
}

export default Hooks
