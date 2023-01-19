// 1. Export harvestPlants function, with a parameter of fieldPlants from field.js. Return an array with seed objects. (The harvestPlants function must accept the plants array as input.)


export const harvestPlants = (fieldPlants) => {
  let seedArray = [];
  // Iterate the array of growing plants. On each plant, get the value of the *output* property. Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
  for (const plants of fieldPlants) {
     if (plants.type === "Corn") {
      let output = plants.output / 2
      for(let i = 0; i < output; i++){
      seedArray.push(plants);
      }
    } else {
      for (let i = 0; i < plants.output; i++)
      seedArray.push(plants);
    }
    // The function will return an array of seed objects.
      }
  return seedArray;
};


// export const harvestPlants = (plantArray) => {
//   let something = []
//   for (let plant of plantArray){
//       if (plant.type === 'Corn'){
//           for (let i = 0; i < plant.output / 2; i++){
//               something.push(plant)
//           }
          
//       } else {
//       for (let i = 0; i < plant.output; i++){
//       something.push(plant)
//       }
//   }
//   }
//   return something
// }