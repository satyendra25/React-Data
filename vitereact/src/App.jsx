import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(8)
  const [numberAllowed, setNemberAllowed]= useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = ""
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+}{:';/`~"

    for (let i = 0; i <= array.length; i++) {
      let char = Math.floor(Math.random()*str.length + 1);
      pass = str.charAt(char)
    }
    setPassword(pass)

  } , [count, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700">
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
        />
      </div>
      </div>
    </>
  )
}

export default App
