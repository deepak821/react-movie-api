import React, {  useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
const Search=(props)=>{
    console.log(props)
    const[result,setResult]=useState([])
    const[count,setCount]=useState("0")
    // const[count1,setCount1]=useState(0)
    // const[plot,setPlot]=useState("")
      const {name}=useParams()
      if(count==="0"){
      axios.get('http://www.omdbapi.com/?s='+name+'&&apikey=a2aa142e').then((response)=>{
                if(response.data.Response==="True"){
            setResult(response.data.Search)
        }
        else{
            setResult([{Title:"null"}])
        }
          })
          setCount("1")
        }
        
   const ndata=((val)=>{
       if(val.Title!=="null"){
        //    if(count1<=10){
        //        console.log("loop")
        //    axios.get('http://www.omdbapi.com/?t='+val.Title+'&&apikey=a2aa142e').then((res)=>{
        //      setPlot(res.data.Plot)
        //    })
        //   setCount1(count1 + 1)
        //    }
           if(val.Title.length>36){
               val.Title=val.Title.substring(0,39);
           }
       if(val.Poster==="N/A"){
           val.Poster="https://www.flaticon.com/svg/static/icons/svg/483/483356.svg"
       }
        return(<>
        <div className="carrd card" style={{backgroundColor: "white"}}>
            {/* <img src={val.Poster} alt="" className="img1 inverted"/> */}
            <div className="cont inverted" style={{background:`url(${val.Poster})`}}>
        <div className="hoverdiv"><p style={{backgroundColor:"transparent"}}></p></div>
            </div>
        <span><h4 style={{backgroundColor: "white",height: "2rem"}}>{val.Title}</h4></span>
        <h5 style={{backgroundColor: "white"}}>IMDB COLLECTION</h5>
            <a href={`https://www.imdb.com/title/`+val.imdbID} target="blank"><button className="btn">WATCH NOW</button></a>
        </div>
        </>)
       }
       else{
           return(<h1>NO RESULT FOUND</h1>)
       }
    })
   return(<>
    <div className="cards">
   {result.map(ndata)}
   </div>
   </>) 
}
export default Search;