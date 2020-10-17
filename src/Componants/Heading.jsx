 import React, { useState} from 'react';
 
const Heading= () =>{
   const col="#808080";
   const[bg,setbg]=useState(col);
   const[co,setco]=useState("black")
   const[count,setcount]=useState("1")
   const[inv,setinv]=useState("invert(0%)")
   const[name,setname]=useState("")
   
//   const dark=()=>{
//     if(count==="1"){
//   setbg("#242526")
//   setco("#e4e6eb")
//   setcount("2")
//     }
//     else{
//       setbg("#808080")
//       setco("black")
//       setcount("1")
//     }
// }
const dark=()=>{
    if(count==="1"){
    setbg("black")
   setco("#e4e6eb")
   setcount("2")
   setinv("invert(100%)")
     }
     else{
    setbg("#808080")
    setco("black")
    setinv("invert(0%)")
   setcount("1")

  }
    document.documentElement.classList.toggle('dark-mode');
    document.querySelectorAll('.inverted').forEach((result)=>{
      result.classList.toggle('invert')
    })
}
const inputEvent=(event)=>{
  setname(event.target.value)
}


    return (<>
         <div className="heading inverted" style={{backgroundColor: bg}}>
           <a href="/"><h1 style={{backgroundColor: bg,color: co}}>OMDB</h1></a>
            {/* <form action="" style={{backgroundColor: bg}}>
              <input type="text" name="search" onChange={inputevent}/>
              <button>SEARCH</button>
            </form> */}
            <div style={{backgroundColor: bg}}>
            <label className="switch" style={{backgroundColor: bg}}>
             <input type="checkbox" onClick={dark}/>
              <span className="slider round"></span>
             </label>
             </div>
             <form action="" style={{backgroundColor: bg,display:"flex"}}>
             <input type="text" name="search" onChange={inputEvent} value={name} className="box inverted"/>
             <a href={"/"+name} style={{backgroundColor:"transparent"}}><img src="https://www.flaticon.com/svg/static/icons/svg/483/483356.svg" style={{backgroundColor:"transparent", filter: inv}} alt="search"/></a>
               </form>
               </div>
    </>)
}

export default Heading;
