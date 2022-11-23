/* In this module, define and export a harvestPlants function. */ 

/* The harvestPlants function must accept the plants array as input. */ 

// This means the plants array should be a parameter for the harvestPlants function we're making. 

/* The function will return an array of seed objects. */ 

// Anything I return must be stored in a variable. 
// So I've made an empty array and stored it in a variable called "seedObjectsArray"
// I am returning the "seedObjectsArray" variable to myself now. 

/* Iterate the array of growing plants. On each plant, get the value of the output property. */ 

// Use a for...of loop to loop through each item or "plant" in the plants array 
// Use dot notation to extract the "output" property from the array, so something like "plant.output"

/* Add that many of the plant objects to the array that the function returns. */ 

/* Again, the exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns. */ 

let seedObjectsArray = []

export const harvestPlants = (plantsArray) => {

    for (const plant of plantsArray ) {

        if (plant.type !== "Corn") {
            for (let output = 0; output < plant.output; output++) {
                seedObjectsArray.push(plant) 
            }
        } else {
            for (let output = 0; output < plant.output / 2; output++) {
                seedObjectsArray.push(plant) 
            }
        }
    }  
 
    return seedObjectsArray
}