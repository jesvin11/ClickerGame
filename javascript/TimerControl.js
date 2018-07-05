firstLaunch = true;
function Timer(){
    addFood();
    addWood();
    addScience();
    timeAdvance();
    addCivilian();
    refresh();
    setTimeout(Timer, 1000);

}