import React,{useState} from 'react'


import stella from '../icon-star.svg';
import './box.css'
import Box2 from './box2'


function Box(){

const [selezione,setSetselezione] = useState({
    sel1:false,
    sel2:false,
    sel3:false,
    sel4:false,
    sel5:false,
    
  }  );
  
  function click(event){
  
  
    const scelta = event.target.id;
  
    document.getElementById("sel1").style="circle2"
    document.getElementById("sel2").style="circle2"
    document.getElementById("sel3").style="circle2"
    document.getElementById("sel4").style="circle2"
    document.getElementById("sel5").style="circle2"
  
    document.getElementById(scelta).style.backgroundColor="orange"
    setSetselezione(prevState=>
      {
         return {
        
        
        sel1:false,
        sel2:false,
        sel3:false,
        sel4:false,
        sel5:false,
        scelta:true,             
      
      }
    
      })
    console.log(scelta)
    
  }
  



  return (
      <div>
        <div className='blocco' id='blocco2'>
          <div className='circle'>
            
            <img src={stella}></img>
            
  
          </div>
  
          <h1> How did we do?
          </h1>
          <h3> Please let us know how we did with your support
            request. All feedback is appreciated to help us improve our offering!
          </h3>
        <div className='rate'>
        <div className='circle2'id="sel1" onClick={click}>1</div>
        <div className='circle2'id="sel2"onClick={click}>2</div>
        <div className='circle2'id="sel3"onClick={click}>3</div>
        <div className='circle2'id="sel4"onClick={click}>4</div>
        <div className='circle2'id="sel5"onClick={click}>5</div>
        </div>
        <div className='submit' onClick={handleSubmit}>SUBMIT</div>
        </div>
  
      </div>
    );
}

function handleSubmit(){
 
    // document.getElementsByClassName("blocco")[0].style.display="none"
    // console.log('ciao')
    // document.getElementsByName("h1").style.backgroundColor="white"
    
    return(
<>
<div>
<Box2/>
</div>
</>
    )}

   


export default Box;