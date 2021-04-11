var dog, sadDog, happyDog;
var foodObj;
var foodS, foodStock;
var fedTime, lastFed, feed, addFood;

function preload() {
    sadDog = loadImage("dog.png");
    happyDog = loadImage("dog1.png");
}
function setup() {
    database = firebase.database            
    createCanvas(1000, 400);

    dog = createSprite(800, 200, 150, 150);
    dog.addImage('dog.png');
    dog.scale = 0.15;

    feed = createButton("Feed the dog");
    feed.position(700, 95);

    addFood = createButton("Add Food");
    addFood.position(800, 95);
   ;

}

function draw() {
    background(46, 139, 87);

    foodObj.display();

    fedTime = database.ref('FeedTime');
    fedTime.on("value", function(data) {
        lastFed = data.val();
    })

    fill(255, 255, 254);
    textSize(15);
    if (lastFed >= 12) {
        text("Last Feed: " + lastFed % 12 + "PM", 350, 30);
    } else if (lastFed == 0) {
        text("Last Feed: 12AM ", 350, 30);
    } else {
        text("Last Feed:  " + lastFed + "AM", 350, 30);
    }

    drawSprites();

}


function readStock(data) {
    foodS = data.val();
    foodObj.updateFoodStock('Milk.png');
}


function feedDog() {
    dog.addImage(dog1.png);

    foodObj.updateFoodStock(foodObj.getFoodStock() - 1);
    database.ref('/').update({
        Food: foodObj.getFoodStock(),
        FeedTime: hour()
    })
}

function addFoods() {
    foodS++;
    database.ref('/').update({
        Food: foodS
    })
}
