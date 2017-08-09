// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);


// 1: Show me how to calculate the average price of all items.
function question1 () {
  let priceSum = 0;
  let averagePrice = 0;
  for (let i=0; i<data.length; i++) {
    priceSum += data[i].price;
  }
  averagePrice = (Math.ceil((priceSum/data.length)*100)/100);
  console.log("The average price is $" + averagePrice);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let priceMin = 14;
  let priceMax = 18;
  let priceNew = [];

  for (let i=0; i<data.length; i++) {
    if (data[i].price >= priceMin && data[i].price <= priceMax) {
      priceNew.push(data[i]);
    }
  }
  for (let i=0; i<priceNew.length; i++) {
    console.log(priceNew[i].title);
  }
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let itemTitle = [];
  let itemPrice = [];

  for (let i=0; i<data.length; i++) {
    if (data[i].currency_code === 'GBP') {
      itemTitle.push(data[i].title);
      itemPrice.push(data[i].price);
    }
  }
  for (let i=0; i<itemPrice.length; i++) {
    console.log(itemTitle[i] + " costs " + itemPrice[i] + " pounds.");
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let container = [];
  let items = [];
  for (let i=0; i<data.length; i++){
    container.push(data[i].materials);
    for (let j=0; j<container.length; j++){
      if (container[i][j] === "wood"){
        items.push(data[i].title);
        console.log(`${data[i].title}`);
      }
    }
  }
return items;
}
question4();



// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
 for (let i = 0; i < data.length; i++) {
   if (data[i].materials.length >7) {
   console.log(`${data[i].title} has ${data[i].materials.length} materials:`);
   for (let j = 0; j < data[i].materials.length; j++) {
     const material = data[i].materials[j];
     console.log("- " + material);
      }
    }
    }
  }
console.log(question5());

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
  }
    console.log(count + " items were made by their sellters.");
}
