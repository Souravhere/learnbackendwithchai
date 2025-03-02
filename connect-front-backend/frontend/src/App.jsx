import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
  const [jokes, setjokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setjokes(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])
  return (
    <>
      <h1>Jokes</h1>
      <p>Count of Jokes : {jokes.length}</p>
      {jokes.map( (jokes, index) => (
        <div key={jokes.id}>
          <h3>{jokes.title}</h3>
          <h4>{jokes.body}</h4>
        </div>
      ))}
    </>
  )
} 

export default App
