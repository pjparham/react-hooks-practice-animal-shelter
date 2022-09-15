import React from "react";

function Filters({ onChangeType, setPets, type }) {
  function onFindPetsClick(){
    if (type === "all"){
      fetch('http://localhost:3001/pets')
      .then(r => r.json())
      .then((petData) => setPets(petData))
    }
    else{
      fetch(`http://localhost:3001/pets?type=${type}`)
      .then(r => r.json())
      .then((petData) => setPets(petData))
    }
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select onChange={onChangeType} name="type" id="type" aria-label="type">
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick={onFindPetsClick} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;

// useEffect(() => {
//   fetch("http://localhost:3001/stocks")
//   .then ((r => r.json()))
//   .then((stockData) => setStocks(stockData))
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [])