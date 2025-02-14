import React from "react"

 
 


function Buttons(props)
{
     

return (
    <button className="btn btn-primary"  onClick={props.eventHandler}  disabled={props.disable} >{props.children}</button>
)


}



export default Buttons