import React, { useState } from 'react'
import Questions from './Questions.json';


const App = () => {
let [QIndex, stQIndex]= useState(0)
let [selectedindex, setselectedinex]= useState(null)
let [start, setstart]= useState(0)
let [viewquiz, setviewquiz]= useState(0)


const view= ()=>{
  let value= viewquiz;
  setviewquiz(value+1)
}
const add= ()=>{
  alert("under working")
}


const startquiz= () =>{
  setstart(start+1)
}

const next= () =>{
  setselectedinex(null)
  stQIndex(QIndex+1)
  
}
const restart= ()=>{
  stQIndex(0)
}

const selectedoption= (selectedindex)=>{
  setselectedinex(selectedindex)
}

const returntohome= ()=>{
  setstart(0);
  setviewquiz(0)
}




// ============================  HOME PAGE  ==================



if(start===0 && viewquiz===0){
return(
<>

<div className="container-fluid">

  <div className="navbr" style={{backgroundColor: "black", color: "white", textAlign: "center"}}> <h1>Online Quizz</h1></div>
</div>

  <div className="card text-center">
  <div className="card-header">
    By Sheraz Sheikh
  </div>
  <div className="card-body">
    <h5 className="card-title">wellcome to online quizz</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  
    <button onClick={startquiz} type="button" className="btn btn-success">Start Quizz</button>
   <div>
  <button onClick={add} type="button" className="btn btn-danger mt-2">Add to Quizz</button>
</div>
<div>
  <button onClick={view} type="button" className="btn btn-warning mt-2"  >View Quizz</button>
</div>

  </div>
  <div className="card-footer text-body-secondary">
    Copyright@gmail.com
  </div>
</div>
</>
)

}
if(start===0 && viewquiz ===1){
  return(
    <>
    <div className="container-fluid ">

<div className="container-fluid" style={{backgroundColor: "black", color: "white", display:"flex"}}> <h1>All Questions</h1>    
<div><button onClick={returntohome} className='btn btn-success mx-5 mt-2' >back to home</button></div>
</div>
</div>
    { Questions.map((q)=>(
      <div key={q.id} className='card card-header'> <h6>{q.statemnt}</h6>

      <ul className="list-group">
        {q.options.map((opt,index)=>(
          <li key={index} className="list-group-item">{opt}</li>
        ))}
  
 
</ul>
      </div>
    ))}
    </>
  )
}





// ========================================= END PAGE=================



if(QIndex=== Questions.length){
  return(
    <>
    <div className="container-fluid">

<div className="navbr" style={{backgroundColor: "black", color: "white", textAlign: "center"}}> <h1>Online Quizz</h1></div>
</div>
    <div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Your Quiz is ended</h5>
    <p className="card-text">If you want tp start quiz again then press the the button below</p>
    <button onClick={restart} type="button" className="btn btn-success">RESTART</button>
    <button onClick={returntohome} type="button" className="btn btn-success mx-5">Home page</button>
  </div>
  <div className="card-footer text-body-secondary">
    THANK YOU
  </div>
</div>

    </>
  )
}
// ======================= Quizz page=================================

 

  return (
    <div >
      <nav className="navbar bg-body-tertiary"  >
  <div className="container-fluid" style={{backgroundColor: "black"} }>
    <a className="navbar-brand" style={{color: "white"}}>ONLINE QUIZ</a>
    <h2 style={{color: "white"}}>{QIndex+1}/{Questions.length}</h2>
    <form className="d-flex" role="search">
      {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
      <button className="btn btn-outline-success" type="submit">SUBMIT</button>
    </form>
  </div>
</nav>

<div className="card ">
  <div className="card-header">  <h3>{Questions[QIndex].statemnt}</h3> </div>

  <ul className="list-group list-group-flush ">
    {Questions[QIndex].options.map((option, index)=>(
    <li style={{cursor: "pointer"}}
    className={ selectedindex ===index  ?    "list-group-item active"  :"list-group-item"}
     onClick={()=> selectedoption(index)}
      key={index}
      
      > {option}</li>
    ))}
    
  </ul>
       
</div>

<button disabled={selectedindex===null} className=" mt-5 btn btn-success" style={{marginLeft:50}} onClick={next}>Next Question</button>



</div>

    
  )
}

export default App