import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [selectedShape, setSelectedShape] = useState("square");
  const [myData , setMydata] = useState([]);
  const[value , setValue] = useState(0);
  

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
  const children = myData.map((val) => (
    React.createElement("div",
      { id: val["key"], className: val["shape"] },
      val["key"])
  ));

  return (
    <div id="main">
      <div id="shape-creator">
       <select onChange={onChangeHandler}> 
          <option value="square">Square </option>
          <option value="circle" >Circle </option>
         
        </select> 
        <button onClick={buttonClickHandler} > Add Shape</button>

      </div>{
      React.createElement("div", {id: "shapes-holder" },
      children
      )}
    </div>
  )
}


export default App;
