/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
function getTotalCount(animals) {
  //Assign default variable to accumulate to, set to 0 so returns 0 if no animals
  let totalCount = 0;
  //Create loop to iterate through animals array
  for (let i = 0; i < animals.length; i++){ 
    //create variable for current animal in loop for clarity
    currentAnimal = animals[i];
    //in loop, add current animal's count to our total count
    totalCount += currentAnimal.count;
  }
  //after looping, return our total count
  return totalCount;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
  //Create default variable to accumulate to, set to empty array incase there are no animals
  let allKinds = []; //(our new array)
  //Create a loop to iterate through the animals array
  for (const currentAnimal of animals){
    //in loop, Push the current animals kind to our new array
    allKinds.push(currentAnimal.kind)
  }
  //after loop, return our new array
  return allKinds;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals, minimum) {
  //Create default variable to accumulate to, set to [] incase no animals meet the requirements
  let filteredAnimals = [];
  //Create a loop to iterate through animals array
  for (const currentAnimal of animals){
    //in loop, check if our current animal's count is >= the minimum
    if (currentAnimal.count >= minimum){
      //if it is, add the current animal to the new array
      filteredAnimals.push(currentAnimal);
    }
  }
  //after looping, return our filtered array
  return filteredAnimals;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {
  //Account for the edgecase of an empty array early
  //if animals array is empty
  if (animals.length === 0){
    //return null
    return null;
  }
  //Create default object to accumulate to, = animals[0] &
  //good default if it's our only animal &
  //gives us a starting point to start comparing animals
  let mostCommon = animals[0];
  //Create a loop to iterate through the animals array (start at index 1, index 0 is already our default)
  for (let i = 1; i < animals.length; i++) { //using i loop to change starting element in array
    //Create currentAnimal variable for clarity
    let currentAnimal = animals[i];
    //in loop, check if currentAnimal's count is higher than mostCommon animal's count
    if (currentAnimal.count > mostCommon.count){
      //if so, then our currentAnimal is our new mostCommon animal
      mostCommon = currentAnimal;
    }
  }
  //after loop, return mostCommon animal
  return mostCommon;
}

// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
