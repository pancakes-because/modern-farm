/* In the plan.js module, there is a createPlan() function that is exported. In the main.js module, import that function and invoke it. */ 

// Creates the plan with 3 rows for crops to be planted, that also has 6 plots of land per row. 

import { createPlan } from "./plan.js" 

// Creates the seeds for each type of food to be planted later. 

import { createAsparagus } from "./seeds/asparagus.js"

import { createCorn } from "./seeds/corn.js"

import { createPotato } from "./seeds/potato.js"

import { createSoybean } from "./seeds/soybean.js"

import { createSunflower } from "./seeds/sunflower.js" 

import { createWheat } from "./seeds/wheat.js"

// The addPlant() takes the seeds we created from above and adds the plants to the field. 

// The usePlants() returns a copy of the array of plants that were added to the field.  

import { addPlant, usePlants } from "./field.js"

// The plantSeeds() function plants all the seeds 

import { plantSeeds } from "./tractor.js"

// The harvestPlants() function makes plant array objects according to each plant crop's output 

import { harvestPlants } from "./harvester.js"

// The catalog() function takes the harvested food and makes an html representation of it 

import { catalog } from "./catalog.js"

/* This was just here before I put anything in this module. I put the plan.js import code line above it since those normally go first in a module */ 

console.log("Welcome to the main module")

/* Since that (createPlan) function returns a value, you need to store that value in a variable named yearlyPlan. Then use console.log() to output the value of yearlyPlan to the developer console in Chrome. */ 

// We imported createPlan() above and are invoking it here. 

const yearlyPlan = createPlan()
console.log(yearlyPlan)

/* In the main.js module, invoke the function that plants all of the seeds, and then get the plants array from the fields.js module */ 

const vegs = plantSeeds(yearlyPlan) 
// console.log(vegs) 
// expected result is "undefined" for the console.log line 

/* Write some temporary, test code in the main module to invoke some of your seed creation functions that you defined in your modules. Use console.log() to ensure that you get the right value back. 

The following code should display an object with three properties - type, height, output - in the developer console. */ 

// We imported createAsparagus(), createCorn(), createPotato(), createSoybean(), createSunflower(), and createWheat() above, are invoking them here, and are storing the results in variables. 

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const cornSeed = createCorn()
console.log(cornSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)

/* 

Write some temporary test code in the main module to check if your functions do their job correctly.

Create a seed object.
Invoke addPlant() and specify the seed object as the argument.

Invoke usePlants() and store its return value in a variable.
Use console.log() to make sure your seed object got added to the array of plants in the field.

*/ 

// We imported addPlant() from above and are invoking it here. 

const asparagusPlant = addPlant(asparagusSeed)
console.log(asparagusPlant)

const cornPlant = addPlant(cornSeed)
console.log(cornPlant)

const potatoPlant = addPlant(potatoSeed)
console.log(potatoPlant) 

const soybeanPlant = addPlant(soybeanSeed)
console.log(soybeanPlant)

const sunflowerPlant = addPlant(sunflowerSeed)
console.log(sunflowerPlant)

const wheatPlant = addPlant(wheatSeed)
console.log(wheatPlant)

// We imported usePlants() from above and are invoking it here. 
// We store the result in a variable, "fieldPlants" to see it's value. 

const fieldPlants = usePlants()  
console.log(fieldPlants) 

/* In the main.js module, get the array of plants from the field module, and then harvest them by invoking the appropriate function that you defined above. Make sure you specify the array of plants as an argument to the harvesting function. */ 

const harvestedPlants = harvestPlants(fieldPlants)
console.log(harvestedPlants)

/* In the main.js module, invoke the Catalog function and make sure you pass the array of food as an argument. Make sure your web server is running and refresh the browser. Your DOM should look similar to the image above.

Please do not try to make it identical. Just make sure you are displaying them in a grid layout. */ 

const harvestHTML = catalog(harvestedPlants)
console.log(harvestHTML)

//This makes the HTML Represenation we created appear in our web browser once served. 

const html = document.querySelector(".container")
html.innerHTML = harvestHTML