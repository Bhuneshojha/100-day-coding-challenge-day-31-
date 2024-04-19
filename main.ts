//          100 days of coding challenge ( DAY 31 )

// Question 01
let favouriteFruits:string[] = ["Apple","Banna","Mango"];
favouriteFruits.push("Olive");

console.log(favouriteFruits);
//--This line addds a new fruit
// Question 02
function removeLastElement<T>(arr: T[]): T | undefined{
  return arr.pop();
}
// --Example: Removing the last fruit from the array
const languages:string[] = ["Sindhi","Urdu","Engish","Hindi"]
console.log(removeLastElement(languages));
console.log(languages);
// --Here, we take out the last fruit and show the updated list.
//   Question 03 
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits: string[]): void {
  const index = fruits.indexOf("Banana"); // Finds the index of "Banana"
  if (index !== -1) fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}

// Example: Replacing "Banana" in the array
const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.
