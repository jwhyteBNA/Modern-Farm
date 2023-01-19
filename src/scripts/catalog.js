// You are a modern farm, so you want to put everything that you harvested on your farm's ordering web site so that buyers can access it from anywhere. To start, just list each of the plants in your harvest.

// Use Flexbox to make a grid layout like below.
// Define and export a Catalog function.
// The Catalog function should accept the harvested food array as input.
// The Catalog function should iterate the array of food objects.
// As you iterate the array, the <main> element should have its inner HTML appended with an HTML representation of a food item. Use the following example for each food item. The example has Corn hard-coded. Yours should not. It should output the name property of the current food object.
// <section class="plant">Corn</section>

export const catalog = (harvestedCrop) => {
  let mainHTML = " ";
  for (const food of harvestedCrop) {
    if (food.type === "Asparagus") {
      mainHTML += `<section class="plant asparagus">${food.type} </section>`;
    } else if (food.type === "Corn") {
      mainHTML += `<section class="plant corn">${food.type} </section>`;
    } else if (food.type === "Potato") {
      mainHTML += `<section class="plant potato">${food.type} </section>`;
    } else if (food.type === "Soybean") {
      mainHTML += `<section class="plant soybean">${food.type} </section>`;
    } else if (food.type === "Sunflower") {
      mainHTML += `<section class="plant sunflower">${food.type} </section>`;
    } else if (food.type === "Wheat") {
      mainHTML += `<section class="plant wheat">${food.type} </section>`;
    }
  }
  return mainHTML;
};
