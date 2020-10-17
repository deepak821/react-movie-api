import React, { useState } from 'react';

const Toggle= () =>{
    const[count,setcount]=useState(1);
    const dark=()=>{
        if(count==="1"){
            setco("#e4e6eb")
            setcount("2")
              }
              else{
                setco("black")
                setcount("1")
              }
    }
    return(<>
    <label className="switch" style={{backgroundColor: bg}} index={count}>
             <input type="checkbox" onClick={dark}/>
              <span className="slider round"></span>
             </label>
    </>)
}

export default Toggle;