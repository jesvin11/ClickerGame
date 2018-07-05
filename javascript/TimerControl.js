firstLaunch = true;
function Timer(){
    addFood();
    addWood();
    addStone();
    addScience();
    timeAdvance();
    addCivilian();
    refresh();
    setTimeout(Timer, 1000);

}