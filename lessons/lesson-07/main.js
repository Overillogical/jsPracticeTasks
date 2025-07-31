let gold = 100;
function createBuilding (buildingName, goldCost){
    const hasEnoughGold = gold>= goldCost;
    if (hasEnoughGold) {
        reduceResource(gold,goldCost);
        console.log(`${buildingName}: work complete!`);
    } else {
        console.log(`${buildingName}: not enough resources!`);
    }
}
function increaseResource(currentAmount, increment=10){
    return currentAmount+increment;
}
function reduceResource(currentAmount, increment=10){
    return currentAmount - increment;
}
createBuilding('Tower',  30);
createBuilding('House', 140);
console.log(gold);