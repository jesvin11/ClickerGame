farmTotal = 0;
strawHutTotal = 0;
libraryTotal = 0;
quarryTotal = 0;
woodenHouseTotal = 0;
farmCost = 10;
strawHutCost = 50;
libraryCost = 75;
quarryCost = 100;
woodenHouseCost = 60;

function buildFarm(){
    if (foodTotal >= farmCost){
        foodTotal = foodTotal - farmCost;
        farmTotal++;
        farmCost = Math.round(10 + 0.01 * Math.pow(farmTotal, 2));
        refresh();
    }
}

function buildStrawHut(){
    if (foodTotal >= strawHutCost){
        foodTotal = foodTotal - strawHutCost;
        strawHutTotal++;
        maxCivilians++;
        if (strawHutTotal === 1){
            unhide("civilianResource");
        }
        strawHutCost = Math.round(10 + 0.01 * Math.pow(strawHutTotal, 2));
        refresh();
    }
}

function buildLibrary(){
    if (woodTotal >= libraryCost){
        woodTotal = woodTotal - libraryCost;
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
        libraryCost = Math.round(10 + 0.01 * Math.pow(libraryTotal, 2));
        refresh();
    }
}

function buildQuarry(){
    if (woodTotal >= quarryCost){
        woodTotal = woodTotal - quarryCost;
        quarryTotal++;
        quarryCost = Math.round(10 + 0.01 * Math.pow(quarryTotal, 2));
    }
}

function buildWoodenHouse(){
    if (woodTotal >= woodenHouseCost){
        woodTotal = woodTotal - woodenHouseCost;
        woodenHouseTotal++;
        maxCivilians = maxCivilians + 3;
        woodenHouseCost = Math.round(10 + 0.01 * Math.pow(woodenHouseTotal, 2));
        refresh();
    }
}