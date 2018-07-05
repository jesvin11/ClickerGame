civilianTotal = 0;
maxCivilians = 0;
civTimer = 0;
deathTimer = 0;

function addCivilian(){
    if (civilianTotal < maxCivilians && foodTotal !== 0){
        if (civTimer < 12){
            civTimer++;
        } else {
            civTimer = 0;
            civilianTotal++;
            addUnemployed();
        }
    } else {
        civTimer = 0;
    }
}

function killCivilian(){
    civilianTotal--;
    killJob();
}

