/* Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array. */

const fieldItems = []

/* In the module, define and export a function named addPlant. */

/* The addPlant function must accept a seed object as input. The function will add the seed to the field (How do you add something to an array? Do you remember the method for it?). */

// It's the .push method we have to use here. 

/* Be aware that when planting corn, an array of objects will be provided instead of a single object like all the other type of seeds. Investigate the Array.isArray method to check if corn got passed in, or one of the others. */

// See for context: https://www.geeksforgeeks.org/javascript-array-isarray-method/ 
// The Array.isArray() method determines whether the value passed to this function is an array or not. 
// This function returns "true" if the argument passed is an array else it returns "false". 

export const addPlant = (seedObject) => {

    if (Array.isArray(seedObject)) {
        for (const seed of seedObject) {
            fieldItems.push(seed)
        }
    } else {
        fieldItems.push(seedObject)
    }
    return fieldItems
}

/* Define and export a function named usePlants that returns a copy of the array of plants. */

export const usePlants = () => {
    return fieldItems.map(fieldItem => ({ ...fieldItem }));
};


