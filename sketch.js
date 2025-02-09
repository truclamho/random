let items = [
  { name: "Super Rare Hot Blonde Crown Prince", weight: 0.005 }, // 0.5% chance
  { name: "Epic Duke of the North", weight: 0.02 }, // 2% chance
  { name: "Magic White Hair Mage", weight: 0.05 }, // 5% chance
  { name: "Common Peasant", weight: 0.3 }, // 30% chance
  { name: "Rare Knight", weight: 0.07 }, // 7% chance
  { name: "Mystic Dragon Demon Lord", weight: 0.01 }, // 1% chance
  { name: "Poor Farmer", weight: 0.3 }, // Same as Common Peasant
  { name: "Loser Boy", weight: 0.3 }, // Same as Common Peasant
  { name: "Shoe Cleaner", weight: 0.3 }, // Same as Common Peasant
  { name: "Door Cleaner", weight: 0.3 }, // Same as Common Peasant
  { name: "Kinda Poor Farmer", weight: 0.3 } // Same as Common Peasant
];

let result = "";
let button;
let pityCounter = 0; // To count the pulls
let pityThreshold = 60; // Number of pulls until guaranteed Super Rare

function setup() {
  createCanvas(700, 700);
  // Create a button on the canvas and center it horizontally
  button = createButton("Draw Your Man");
  button.position(width / 2 - button.width / 2, 500); // Center the button
  button.mousePressed(drawItem);  // When button is pressed, call drawItem()
}

function draw() {
  background(0); // Set background to black

  // Set text color to white
  fill(255);
  
  // Display title
  textSize(24);
  textAlign(CENTER);
  text("Who Will You Get?", width / 2, 50);

  // Display the result (if any)
  textSize(18);
  text(result, width / 2, 300);

  // Display pity counter
  textSize(16);
  text("Pity Pulls: " + (pityThreshold - pityCounter), width / 2, 350);
}

// Function to draw an item based on weighted chances
function drawItem() {
  if (pityCounter >= pityThreshold) {
    // Reset pity system and give the Super Rare
    result = "Congrats, you are now lovers with a: Super Rare Hot Blonde Crown Prince!";
    pityCounter = 0;
  } else {
    const drawnItem = weightedRandomItem(items);
    result = "Congrats, you are now lovers with a: " + drawnItem;
    pityCounter++;
  }
}

// Weighted random draw based on item weights
function weightedRandomItem(items) {
  let totalWeight = 0;
  for (let item of items) {
    totalWeight += item.weight;
  }

  let randomNum = random(1);
  let cumulativeWeight = 0;

  for (let item of items) {
    cumulativeWeight += item.weight;
    if (randomNum <= cumulativeWeight) {
      return item.name;
    }
  }
}
