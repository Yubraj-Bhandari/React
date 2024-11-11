
import { useState } from "react";

function App() {
 const [color,setColor]= useState("olive")

  return (
    <>
   <h1 className="text-center font-serif ">Background Color changer</h1>

   <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

<div className="fixed flex flex-wrap justify-center gap-3 bg-white px-2 py-2 rounded-3xl">

  <button onClick={()=>setColor("red")} className="outlline-none px-3  rounded-3xl" style={{backgroundColor:"red" }}>Red</button>

  <button onClick={()=>setColor("black")}  className="outlline-none px-3  rounded-3xl" style={{backgroundColor:"black",color:"white"}}>Black</button>

  <button onClick={()=>setColor("green")}  className="outlline-none px-3  rounded-3xl" style={{backgroundColor:"green" }}>Green</button>

  <button onClick={()=>setColor("blue")}  className="outlline-none px-3  rounded-3xl" style={{backgroundColor:"blue" }}>Blue</button>

  <button onClick={()=>setColor("yellow")}  className="outlline-none px-3  rounded-3xl" style={{backgroundColor:"yellow" }}>Yellow</button>
  </div>
</div>
</div>

    </>
  )
}
export default App;


// // export default App
// import { useState } from 'react';

// function App() {
//   const [color, setColor] = useState("olive");

//   return (
//     <>
//       <div
//         style={{
//           width: "100vw",
//           height: "100vh",
//           backgroundColor: color,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//       >
//         <h1 style={{ color: "white" }}>Hello</h1>
//       </div>
//     </>
//   );
// }

// export default App;
