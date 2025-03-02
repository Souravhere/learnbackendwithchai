import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [jokes, setjojkes] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/jokes')
    .then(response => setjojkes(response))
    
  })
  return (
    <>
      <h1>Jokes</h1>
      <p>Count of Jokes : {jokes.length}</p>
      {jokes.map( (jokes, index) => {
        <div key={jokes.id}>
          <h1>{setjojkes.title}</h1>
          <h3>{jokes.body}</h3>
        </div>
      })}
    </>
  )
} 

export default App
