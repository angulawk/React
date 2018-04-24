import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <input type="text" onChange={props.onChange} value={props.userName}/>
    </div>
  )
}

export default UserInput;