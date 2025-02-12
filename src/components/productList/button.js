import React from "react"

 
 


function Buttons(props)
{
    console.log('buttons component logged in')

return (
    <button className="btn btn-primary"  onClick={props.eventHandler} >{props.children}</button>
)


}



export default Buttons