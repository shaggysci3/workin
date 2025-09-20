import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './graph.css'

const Graph = () =>{
 const[protein,setProtein]=useState(0)
 const[carb,setCarb]=useState(0)
 const[amount,setAmount]=useState(0) 
 const[goalIntake,setGoalIntake]=useState(260)

 useEffect(() => {
    setGoalIntake(goalIntake-amount)
},[protein,carb]);
    function handleAddCarb(e){
        e.preventDefault();
        if(goalIntake>0){
            if(e.target.name==="protein"){
                let num = parseInt(amount)
                setProtein(protein+num)
            }else{
                let num = parseInt(amount)
                setCarb(carb+num)
            }
        }
    }
    function handleAmount(e){
        setAmount(e.target.value/10)
    }
    function handleReset(){
        setCarb(0)
        setGoalIntake(260)
        setProtein(0)
    }
    
    
    
 
   
    return(
      <>
      <h3>total:{`${Math.ceil((protein/260+carb/260)*100)}%`}</h3>
      <div className="graph">
        <div style={{height:`${protein}px`,backgroundColor:"#f18181ff"}} className="proteinBar">{`${Math.ceil(protein/260*100)}%`}</div>
        <div style={{height:`${carb}px`,backgroundColor:"#f1d09fff"}} className="carbBar">{`${Math.ceil(carb/260*100)}%`}</div>
        <div style={{height:`${goalIntake}px`}} className="goalIntakeBar">{goalIntake*10}</div>
      </div>
      <input onChange={handleAmount}></input>
        <button className="graphButton" onClick={handleAddCarb} name="protein" >Add protein</button>
        <button onClick={handleAddCarb} name="carb" >Add Carb</button>
        <button onClick={handleReset}>Reset</button>
      
      </>
    )
  }
  export default Graph