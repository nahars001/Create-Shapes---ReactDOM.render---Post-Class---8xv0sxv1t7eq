import React, { useState } from 'react'
import '../styles/App.css';
import Creater from './Creater';
const App = () => {
  const [selectedShape, setSelectedShape] = useState("square");
  const [myData , setMydata] = useState([]);
  const[value , setValue] = useState(0);
  
  let children ;
 const  buttonClickHandler = ()=> {
   setValue((prev) => prev++);
        setMydata((prevstate) => {
         let  newObj ={
           key: prevstate.length,
            shape: selectedShape
          }
         
        
            return [...prevstate ,newObj];
        });
 
        
  
  //   children = myData.map((key) => (
  //    React.createElement("div",
  //     { key: ["key"], className: "square" , key:key},
  //       key[key]
  //    )
  //  ));
   

  }
 

  const onChangeHandler = (e) => {
     setSelectedShape(e.target.value);
    
  }

  return (
    <div id="main">
      <div id="shape-creator">
       <select onChange={onChangeHandler}> 
          <option value="square">Square </option>
          <option value="circle" >Circle </option>
         
        </select> 
        <button onClick={buttonClickHandler} > Add Shape</button>

      </div>
      <Creater data={myData}></Creater>
    </div>
  )
}


export default App;
