/* Define and export a Catalog function. */ 

/* The Catalog function should accept the harvested food array as input. */ 

/* The Catalog function should iterate the array of food objects. */ 

// I need a for...of loop to loop through all the items, "food", in "harvestedFoods"

/* As you iterate the array, the <main> element should have its inner HTML appended with an HTML representation of a food item. Use the following example for each food item. The example has Corn hard-coded. Yours should not. It should output the name property of the current food object.

<section class="plant">Corn</section> */ 

let htmlFood = ""

export const catalog = (harvestedFoods) => {
    
    for (const food of harvestedFoods) {
        htmlFood += `<section class="plant">${food.type}</section>`
    }

    return htmlFood 
}