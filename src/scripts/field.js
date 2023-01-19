// 1. Build field.js file (module).
// 2. In module, establish an empty array variable to store all plants growing in your field. The array will NOT be exported.

let fieldPlants = [];

// 3. Establish addPlant function that accepts a seed object as input to add to the field. Use the push method to add it to your array. 
export const addPlant = (seed) => {
  if(Array.isArray(seed)){
    for (const sprout of seed) {
      fieldPlants.push(sprout)
    }
  }
  else {
    fieldPlants.push(seed);
  }
  return fieldPlants;
};

// 4. Export a function usePlants that will include a copy of the array of plants.
export const usePlants = () => {
  let plantsUsed = fieldPlants;
  return plantsUsed;
};
