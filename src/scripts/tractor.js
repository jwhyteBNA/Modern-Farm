// 1. Establish function plantSeeds that accepts the gardenPlan as a parameter (recall the garden plan holds 3 arrays of 6 plants each).

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlan) => {
  //2. Iterate through all the parent arrays' plant children; do this using an inner and an outer for loop?

  //3. invoke the correct seed functions for the appropriate crops as the crops are iterated using a for loop; push these seeds into the fieldPlants array created in the field.js module.
  for (const row of yearlyPlan) {
    for (const plant of row) {
      if (plant === "Asparagus") {
        addPlant(createAsparagus());
      } else if (plant === "Corn") {
        addPlant(createCorn());
      } else if (plant === "Potato") {
        addPlant(createPotato());
      } else if (plant === "Soybean") {
        addPlant(createSoybean());
      } else if (plant === "Sunflower") {
        addPlant(createSunflower());
      } else if (plant === "Wheat") {
        addPlant(createWheat());
      }
    }
  }
};
