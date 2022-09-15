import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(e){
   setFilters({type: `${e.target.value}`})
   console.log(filters)
  }

  function onAdoptPet(adoptedPet){
    console.log(adoptedPet)
    const updatedPets = pets.map((pet) => {
      if (pet.id === adoptedPet.id){
        return {...pet, isAdopted: true}
      }
      else {return pet}
    })
    setPets(updatedPets)
  }

  // function onAdoptPet(a){
  //   console.log('hi')
  // }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              setPets={setPets}
              onChangeType={onChangeType}
              type={filters.type}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={onAdoptPet} pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
