import React from 'react';
const Card= (props)=>{
    return(
    <div className="cards">
    <div className="card" style={{backgroundColor: "white"}}>
        <img src={props.imgsrc} alt="img" className="img1 inverted"/>
        <span><h4 style={{backgroundColor: "white"}}>A NETFLIX ORIGINAL</h4></span>
    <h5 style={{backgroundColor: "white"}}>{props.sname}</h5>
        <a href={props.slink} target="blank"><button className="btn">WATCH NOW</button></a>
    </div>
    {/* <div className="card">
        <img src="https://wallpapercave.com/wp/wp3814512.png" alt="img" className="img1"/>
        <span><h4>A NETFLIX ORIGINAL</h4></span>
        <h5>SACRED GAMES</h5>
        <a href="https://www.netflix.com/in/title/80115328" target="blank"><button>WATCH NOW</button></a>
    </div>
    <div className="card">
        <img src="https://wallpapercave.com/wp/wp3814512.png" alt="img" className="img1"/>
        <span><h4>A NETFLIX ORIGINAL</h4></span>
        <h5>SACRED GAMES</h5>
        <a href="https://www.netflix.com/in/title/80115328" target="blank"><button>WATCH NOW</button></a>
    </div> */}
    </div>
    )
}

export default Card;