farmTotal = 0;
strawHutTotal = 0;
libraryTotal = 0;

function buildFarm(){
    if (foodTotal >= 10){
        foodTotal = foodTotal - 10;
        farmTotal++;
        refresh();
    }
}

function buildStrawHut(){
    if (foodTotal >= 50){
        foodTotal = foodTotal - 50;
        strawHutTotal++;
        maxCivilians++;
        if (strawHutTotal === 1){
            unhide("civilianResource");
        }
        refresh();
    }
}

function buildLibrary(){
    if (woodTotal >= 75){
        foodTotal = foodTotal - 75;
        libraryTotal++;
        if (libraryTotal === 1){
            unhide("scienceResource");
            unhide("scienceJob")
        }
        refresh();
    }
}
