foodTotal = 0;
foodPerTick = 0;
farmEfficiency = 0.5;
farmerEfficiency = 4;
foodMax = 500;
weatherModifier = 1;


function harvest(){
    foodTotal++;
    refresh();
}



function addFood(){
    foodPerTick = (farmTotal * farmEfficiency) * weatherModifier + farmers * farmerEfficiency - (civilianTotal * 3);
    foodTotal = foodTotal + foodPerTick;
    if (foodTotal < 0){
        if (civilianTotal > 0) {
            deathTimer = deathTimer + Math.abs(foodTotal);
            checkDeath();
        }
        foodTotal = 0;
    } else if (foodTotal > foodMax){
        foodTotal = foodMax;
    }
}

function checkDeath(){
    if (deathTimer > 9){
        killCivilian();
        deathTimer = 0;
    }
}