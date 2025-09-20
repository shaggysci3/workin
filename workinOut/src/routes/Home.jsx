import { useState } from "react"
import { Link } from "react-router-dom"
import Graph from "../components/graph"

const Home = () =>{
 

 
   

    return(
      <>
      <div className="homePage">
        <div className="imgBlock">
        <div>
          <div>
            <Graph/>
          </div>
        </div>
        <img className="blockImg" src="https://th.bing.com/th/id/OIG3.9Sh1ygKJPljDur2gcROY?pid=ImgGn"></img>
        </div>
        <div className="blockCard">
          <div className="cardContainer">
              <div className="myCard">
                <h3 className="cardTitle">card 1</h3>
                <h4 style={{fontWeight:"bold"}}>investment</h4>
                <p>here at card one we pride ourself on how much we love the number 1 as in we wont be making you a single dollar.</p>
              </div>
              <div className="myCard">
                <h3 className="cardTitle">card 2</h3>
              </div>
              <div className="myCard">
                <h3 className="cardTitle">card 3</h3>
              </div>
              
          </div>

        </div>
        
      </div>
        
      </>
    )
  }
  export default Home