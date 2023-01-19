// Objectives: Functions - Iteration - Objects - Arrays
// console.log("Welcome to the main module")

import { createPlan } from "./plan.js";

const yearlyPlan = createPlan();

// console.log(yearlyPlan)
// }

// Testing Creating Seeds (pt 2 of assessment) in Server console
// import { createCorn } from "./seeds/corn.js"

// const popCorn = createCorn()
// console.log(popCorn)

// // Importing Crop Functions in Server console
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";

// const asparagus = createAsparagus()
// console.log(asparagus)

// const corn = createCorn()
// console.log(corn)

// const potato = createPotato()
// console.log(potato)

// const soyBean = createSoybean()
// console.log(soyBean)

// const sunflower = createSunflower()
// console.log(sunflower)

// const wheat = createWheat()
// console.log(wheat)

/* Testing Tilling the Field (pt 3 of Assessment) in server console
const sunflower = createSunflower()
const popCorn = createCorn()

const sowCrops = addPlant(popCorn)
const crops = usePlants(sowCrops)

console.log(crops) */

// const sowCrops = addPlant(asparagus)
// const crops = usePlants(sowCrops)
import { harvestPlants } from "./harvester.js";

plantSeeds(yearlyPlan);
let plantedField = usePlants();
// console.log(plantedField)

let harvest = harvestPlants(plantedField);
// console.log(harvest)

import { catalog } from "./catalog.js";

const htmlFood = document.querySelector(".container");
htmlFood.innerHTML =  catalog(harvest);
