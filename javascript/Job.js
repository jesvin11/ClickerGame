unemployed = 0;
farmers = 0;
scientists = 0;
woodcutters = 0;

function addUnemployed(){
    unemployed++;
    unhide("jobTable");
    unhide("woodResource");
    unhide("libraryHidden");
    refresh()
}

function killJob(){
    if (unemployed >= 1){
        unemployed--;
    } else if (woodcutters >= 1){
        woodcutters--;
    } else if (scientists >= 1){
        scientists--;
    } else if (farmers >= 1){
        farmers--;
    }
}

function removeFarmer(){
    if (farmers > 0) {
        unemployed++;
        farmers--;
        refresh()
    }
}

function addFarmer(){
    if (unemployed > 0) {
        unemployed--;
        farmers++;
        refresh();
    }
}

function removeScientist(){
    if (scientists > 0) {
        unemployed++;
        scientists--;
        refresh()
    }
}

function addScientist(){
    if (unemployed > 0) {
        unemployed--;
        scientists++;
        refresh();
    }
}

function removeWoodcutter(){
    if (woodcutters > 0) {
        unemployed++;
        woodcutters--;
        refresh()
    }
}

function addWoodcutter(){
    if (unemployed > 0) {
        unemployed--;
        woodcutters++;
        refresh();
    }
}