import React from "react";
function Creater(props) {
   
    console.log(props.data);
    const children = props.data.map((val) => (
        React.createElement("div", 
        { id: val["key"] , className: val["shape"]},
         val["key"])
    ));
    // the div with children inside
    return (
        React.createElement("div", { className: "shapes-holder" },
            children
        )
    );
}

export default Creater;