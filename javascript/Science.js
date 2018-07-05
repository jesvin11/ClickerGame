scienceTotal = 0;
sciencePerTick = 0;

function addScience(){
    sciencePerTick = scientists * 2 + libraryTotal * 0.5;
    scienceTotal = scienceTotal + sciencePerTick;
}

function researchStoneWorking(){
    if (scienceTotal >= 10000) {
        scienceTotal = scienceTotal - 10000;
        unhide("stoneResource");
        unhide("quarryBuilding");
    }
}