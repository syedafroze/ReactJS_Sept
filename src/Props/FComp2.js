import React from "react";

export function FComp2(props) {
  let name = props.person;

  const handleClick = () => {
    name = name.toUpperCase();
    console.log(name)
  };
//list 
  return (
    <div>
      <h2>This Is FComp2</h2>

      <h3>{name}</h3>
      <button onClick={handleClick}>To UpperCase</button>
    </div>
  );
}


