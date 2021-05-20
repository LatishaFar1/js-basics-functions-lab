// Code your solution in this file!

let HQ = 42;
function distanceFromHqInBlocks(Location){
    if (Location > HQ) {
        return (Location - HQ);
    } else{
        return (HQ - Location);
    } 
};

function distanceFromHqInFeet(Location){
    return distanceFromHqInBlocks(Location) * 264;
};

function distanceTravelledInFeet(start, end){
    if (start > end){
        return (start - end) * 264;
    } else {
        return (end - start) * 264;
        }
};

function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end);
   if (distance < 400){
       return 0;
   }    else if (distance > 400 && distance < 2001){
           return (distance - 400) * .02;
       } 
    else if (distance > 2000 && distance < 2501){
           return 25;
       }
       else if (distance > 2500){
           return "cannot travel that far";
       }
   };