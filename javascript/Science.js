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
        hide("stoneWorkingTech")
    }
}

function researchWoodenHousing(){
    if (scienceTotal >= 750) {
        scienceTotal = scienceTotal - 750;
        unhide("WoodenHouseHidden");
        hide("woodenHousingTech")
    }
}