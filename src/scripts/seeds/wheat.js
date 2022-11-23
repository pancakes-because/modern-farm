
/* Create a module for each type of possible plant in the seeds directory. For example, one of the types of food you grow is corn. Create a scripts/seeds/corn.js module. Make sure that each file uses all lowercase letters for the file name. */ 

/* In each module define and export a function for creating a seed. Define the functions with the following syntax. If the plant is Asparagus, the function should be named createAsparagus. Same thing for all the others. */ 

/* 

Each of these functions should return an object with the following properties. Look at the table below the instructions to see what the values for each object are.

1. type
2. height
3. output 

*/ 

// We're creating seeds here, so this is an wheat seed. 

export const createWheat = () => {

    const wheat = {
        type: "Wheat", 
        height: 230, 
        output: 6, 
    }

    return wheat
   
}