scienceTotal = 0;
sciencePerTick = 0;
scientistEfficiency = 2;
scienceMax = 0;

function addScience(){
    sciencePerTick = scientists * scientistEfficiency;
    scienceTotal = scienceTotal + sciencePerTick;
    if (scienceTotal > scienceMax){
        scienceTotal = scienceMax;
    }
}

function researchStoneWorking(){
    if (scienceTotal >= 500) {
        scienceTotal = scienceTotal - 500;
        unhide("stoneResource");
        unhide("quarryBuilding");
        hide("stoneWorkingTech");
        unhide("wondersTech");
    }
}

function researchWoodenHousing(){
    if (scienceTotal >= 750) {
        scienceTotal = scienceTotal - 750;
        unhide("WoodenHouseHidden");
        hide("woodenHousingTech");
    }
}

function researchCalenders(){
    if (scienceTotal >= 1000) {
        scienceTotal = scienceTotal - 1000;
        unhide("calenderHidden");
        hide("calendersTech");
        unhide("foodStorageTech");
    }
}

function researchFoodStorage(){
    if (scienceTotal >= 1500) {
        scienceTotal = scienceTotal - 1500;
        unhide("barnHidden");
        hide("foodStorageTech");
    }
}

function researchWonders(){
    if (scienceTotal >= 2500) {
        scienceTotal = scienceTotal - 2500;
        unhide("wondersHidden");
        unhide("pyramids");
        unhide("startPyramids");
        unhide("pyramidsCost");
        hide("wondersTech");
    }
}
