/* Create a module for each type of possible plant in the seeds directory. For example, one of the types of food you grow is corn. Create a scripts/seeds/corn.js module. Make sure that each file uses all lowercase letters for the file name. */  

/* In each module define and export a function for creating a seed. Define the functions with the following syntax. If the plant is Asparagus, the function should be named createAsparagus. Same thing for all the others. */ 

/* 

Each of these functions should return an object with the following properties. Look at the table below the instructions to see what the values for each object are.

1. type
2. height
3. output 

*/ 

/* The one exception is corn. The createCorn function should return an array with two identical objects in it. Each with the proper keys and values. */ 

// We're creating seeds here, so this is a corn seed. 

export const createCorn = () => {

    const corn = [

        {
            type: "Corn", 
            height: 180, 
            output: 6 
        }, 
        {
            type: "Corn", 
            height: 180, 
            output: 6 
    
        }
    ]
    

    return corn
}