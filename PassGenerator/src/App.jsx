import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState('');

  // used as reference to anything you want
  // to use a reference to any element on the page
  const passwordRef = useRef(null);

  function func(){
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numAllowed) str += "0123456789";
      if(charAllowed) str += "!@#$%^&*_-+=\/[]{}()";

      for (let i = 1; i <= length; i++) {
        pass += str.charAt(Math.floor(Math.random()*str.length)+1);
      }

      setPassword(pass);
  }
  const passwordGen = useCallback(func, [length, numAllowed, charAllowed, setPassword])
  //set password is sent as a dependency as an extra to optimize the calling

  // cache the functioning of some function to reduce reiterations
  // memorizes the function as much as possible
  const copyPass = useCallback(() => {
    //select the copiable text
    passwordRef.current?.select();
    //select some range
    passwordRef.current?.setSelectionRange(0, 8);
    //set the text to clipboard
    window.navigator.clipboard.writeText(password);
    // alert("Password Copied to Clipboard")
  }, [password])

  // put in dependencies on change of which the function shoots
  // also run once the page is loaded initially
  useEffect(() => {
    passwordGen()
  }, [length, numAllowed, charAllowed, passwordGen])

  // passwordGen();

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} placeholder='Password' className='outline-none w-full py-1 px-3' readOnly ref={passwordRef}/>
        <button onClick={copyPass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={15} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {numAllowed} id = "numInput" onChange={()=>{setNumAllowed((prev) => !prev);}} /> 
          <label >Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {charAllowed} id = "charInput" onChange={()=>{setCharAllowed((prev) => !prev);}} /> 
          <label >Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
