
// We imported this to help add the plants to the field. 

import { addPlant } from "./field.js"

// We imported the create factor functions to help pass in the seeds. 

import { createAsparagus } from "./seeds/asparagus.js"

import { createCorn } from "./seeds/corn.js"

import { createPotato } from "./seeds/potato.js"

import { createSoybean } from "./seeds/soybean.js"

import { createSunflower } from "./seeds/sunflower.js"

import { createWheat } from "./seeds/wheat.js"


/* In this module, define and export a plantSeeds function. The function must accept the year's planting plan as input (i.e. it must define a parameter). */

/* The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays. */ 

// We need a for...of loop within a for..of loop.
// The 1st loop will loop through the parent array, "row" of yearlyPlantingPlan
// The 2nd loop will loop through the child arrays, "crops" of row (the parent array)

/* As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed). */ 

// We need to call the create factory functions inside our plantSeeds() function. 
// So we must import the create factory functions from their individual modules to use here. See above. 

/* Take that seed and add it to the array of plants in the field module. */ 

// We need to call the addPlant() for each seed and pass in the create factory functions as arguments. 
// So we must also import the addPlant() function from the field.js module to use here. See above. 


export const plantSeeds = (yearlyPlantingPlan) => {

    for (const row of yearlyPlantingPlan) {

        for (const crops of row) {

            if (crops === "Asparagus") {
                addPlant(createAsparagus())

            } else if (crops === "Corn") {
                addPlant(createCorn())

            } else if (crops === "Potato") {
                addPlant(createPotato())

            } else if (crops === "Soybean") {
                addPlant(createSoybean())

            } else if (crops === "Sunflower") {
                addPlant(createSunflower())

            } else if (crops === "Wheat") {
                addPlant(createWheat()) 

            } 
        } 
    } 
} 