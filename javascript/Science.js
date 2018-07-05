scienceTotal = 0;
sciencePerTick = 0;

function addScience(){
    sciencePerTick = scientists * 2 + libraryTotal * 0.5;
    scienceTotal = scienceTotal + sciencePerTick;
}

function researchStoneWorking(){
    if (scienceTotal >= 500) {
        scienceTotal = scienceTotal - 500;
        unhide("stoneResource");
        unhide("quarryBuilding");
    }
}

function researchWoodHousing(){
    if (scienceTotal >= 750) {
        scienceTotal = scienceTotal - 750;
        unhide("WoodenHouseHidden");
    }
}