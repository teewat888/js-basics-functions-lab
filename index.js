// Code your solution in this file!
function distanceFromHqInBlocks(streetNum) {
    let blocks = Math.abs(42-streetNum);
    return blocks;
}

function distanceFromHqInFeet(streetNum) {
    return distanceFromHqInBlocks(streetNum)*264;
}

function distanceTravelledInFeet(startB,finishB) {
    return (Math.abs(startB-finishB)*264);
}

function calculatesFarePrice(start,destination) {
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400) {
        return 0
    } else if ((distance > 400) && (distance <= 2000)) {
        return (distance - 400)*0.02
    } else if ((distance > 2000) && (distance <= 2500)) {
        return 25
    } else return 'cannot travel that far'
}