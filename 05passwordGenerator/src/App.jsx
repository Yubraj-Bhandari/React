import { useState,useCallback,useEffect,useRef} from 'react'

import './App.css'

function App() {
 const [length,setLength]= useState(8);
 const [numberAllowed,setNumberAllowed]= useState(false);
 const[charactersAllowed,setCharactersAllowed]= useState(false);
 const [password,setPassword]=useState("");

 //useRef hook
 const passwordRef= useRef(null)
 

 const passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
 
  if(numberAllowed) str= str+"0123456789";
  if(charactersAllowed) str= str+"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
for (let i= 1; i < length; i++) {
  let char=Math.floor(Math.random()*str.length+1)
  pass += str.charAt(char)
}
setPassword(pass)

 }
 ,[length,numberAllowed,charactersAllowed,setPassword])

 const copyPasswordToClipBoard =useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,10);
  window.navigator.clipboard.writeText(password)
 },[password])


useEffect(()=>{passwordGenerator()},[length,numberAllowed,charactersAllowed,passwordGenerator])



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-7 text-orange-500 bg-gray-500'>
      <div className='flex-shadow rounded-lg overflow-hidden'>
      <h1 className='text-white text-center py-3'>Password Generator</h1>
        <input type='text' value={password} className='outline-none px-3 w-full py-1' placeholder='password' readOnly
        ref={passwordRef}></input>

        <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-600 px-3  py-1' >Copy</button>
  </div>
  <div className='flex items-center gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input type='range' 
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}
    >

    </input>
    <label>Length:{length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
  <input type='checkbox' 
    defaultChecked={numberAllowed}
    id='numberInput'
    
    onChange={(e)=>{setNumberAllowed((prev)=>!prev)}}
    />
   <label htmlFor='numberInput'>Numbers</label>
  </div>

  <div className='flex items-center gap-x-1'>
  <input type='checkbox' 
    defaultChecked={charactersAllowed}
    id='characterInput'
    
    onChange={(e)=>{setCharactersAllowed((prev)=>!prev)}}
    />
   <label htmlFor='characterInput'>Characters</label>
  </div>

  </div>
    </div>
    </>
  )
}

export default App
