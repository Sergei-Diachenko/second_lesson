import React, {useEffect, useState} from "react"
import axios from 'axios'
import "./style.scss"

const App = () => {
  const [data, setData] = useState(null)

  const arr = [1,2,3,54,5]

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => setData(response?.data)).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (data) console.log(data)
  }, [data])

  return (
    <div>
      {data?.map(elem => <div className="hi">{elem?.name}</div>)}
    </div>
  )
}

export default App
