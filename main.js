// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);


// 1: Show me how to calculate the average price of all items.
function question1 () {
  let price = [];
  for (i=0; i<data.length; i++){ //i is declaring the array number, data.length is the length of the array, adding one
    price.push(data[i].price); //pushing into new price array from the data variable all of the properties of price
  }
  let sum = 0;
  for (let j=0; j<price.length; j++){ //set to 0 to add to it. referencing price array just newly built
    sum=sum + price[j]; //going through and adding all the prices and applying to the sum
    average = sum/(price.length); //creating the average
    newNumber = average.toFixed(2); //taking the average and applying a fix to round up the number to third position
    }
    return (newNumber); //needs rounded
}
console.log("The average price is " + question1()); //calls the function




// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let item =[];
  for (let i=0; i<data.length; i++){
    if (data[i].price <= 18 && data[i].price >= 14) { //if price object within data variable <= 18 AND price object  greater than
      item.push(data[i].title); //pushes to item variable as array the title from data variable
    }
  } return item;
}
console.log(question2());




// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let code = [];
  for (i=0; i<data.length; i++){
    if (data[i].currency_code === "GBP"){
      code.push(data[i].title);
    }
  }
  return code;
}

console.log(question3());


// 4: Display a list of all items who are made of wood.
function question4 () {
  let container = [];
  let items = [];
  for (let i=0; i<data.length; i++){
    container.push(data[i].materials);
    for (let j=0; j<container.length; j++){
      if (container[i][j] === "wood"){
        items.push(data[i].title);
      }
    }
  }
  console.log(items);
}

question4();


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let container = [];
  let items = [];
  for (let i=0; i<data.length; i++){
    container.push(data[i].materials);
    for (let j=0; j<container.length; j++){
      if (container[i][j] >= 8){ // NOTE: Contains more than 8?
        items.push(data[i].title);
      }
    }
  }
  console.log(items);
}
question5();


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let made = [];
  let count = 0;
  for (let i=0; i<data.length; i++) {
    if (data[i].who_made === "i_did") {
      made.push(data[i].who_made);
      count = made.length;
    }
  } return count;
}

console.log(question6() + " items were made by their sellers.");
