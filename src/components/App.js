import React from 'react'
import '../styles/App.css';
const App = () => {

  return (
    <div id="main">
      <div id="shape-creator">
       <select> 
          <option value="Square">Square </option>
          <option value="Circle" >Circle </option>
          <button > Add Shape</button>
       </select>

      </div>
      <div id="shapes-holder">
      </div>
    </div>
  )
}


export default App;
