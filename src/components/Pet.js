import React from "react";

function Pet({ pet, onAdoptPet}) {
  const {type, gender, age, weight, name, isAdopted} = pet

  function handleClick(){
    onAdoptPet(pet)
  }


  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "male" ? '♂' : '♀'/*'♀' OR '♂' */}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? <button  className="ui disabled button">Already adopted</button> :   <button onClick={handleClick} className="ui primary button">Adopt pet</button>}
        {/* <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button">Adopt pet</button> */}
      </div>
    </div>
  );
}

export default Pet;
