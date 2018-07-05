foodTotal = 0;
foodPerTick = 0;


function harvest(){
    foodTotal++;
    refresh();
}



function addFood(){
    foodPerTick = (farmTotal * 0.5) - (civilianTotal * 2) + (farmers * 3);
    foodTotal = foodTotal + foodPerTick;
    if (foodTotal < 0){
        if (civilianTotal > 0) {
            deathTimer = deathTimer + Math.abs(foodTotal);
            checkDeath();
        }
        foodTotal = 0;

    }
}

function checkDeath(){
    if (deathTimer > 9){
        killCivilian();
        deathTimer = 0;
    }
}