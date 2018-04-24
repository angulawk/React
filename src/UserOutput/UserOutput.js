import React from "react";

const UserOutput = (props) => {
  return (
    <div>
      <p style={props.style}>{props.readOnlyUserName}</p>
      <p style={props.style}>{props.userName}</p>
    </div>
  );
};

export default UserOutput;