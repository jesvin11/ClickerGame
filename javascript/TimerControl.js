firstLaunch = true;
function Timer(){
    addFood();
    addWood();
    addStone();
    addScience();
    timeAdvance();
    addCivilian();
    buildWonders();
    refresh();
    setTimeout(Timer, 1000);

}