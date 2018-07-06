farmTotal = 0;
strawHutTotal = 0;
libraryTotal = 0;
quarryTotal = 0;
woodenHouseTotal = 0;
farmCost = 10;

function buildFarm(){
    if (foodTotal >= 10){
        foodTotal = foodTotal - 10;
        farmTotal++;
        farmCost = 10 + 0.01 * Math.pow(farmTotal, 2);
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
        woodTotal = woodTotal - 75;
        libraryTotal++;
        scienceMax = scienceMax + 100;
        if (libraryTotal === 1){
            unhide("scienceResource");
            unhide("scienceJob");
            unhide("scienceTable");
            unhide("stoneWorkingTech");
            unhide("calendersTech");
            unhide("woodenHousingTech");
        }
        refresh();
    }
}

function buildQuarry(){
    if (woodTotal >= 100){
        woodTotal = woodTotal - 100;
        quarryTotal++;
    }
}

function buildWoodenHouse(){
    if (woodTotal >= 125){
        woodTotal = woodTotal - 125;
        woodenHouseTotal++;
        maxCivilians = maxCivilians + 3;
        refresh();
    }
}