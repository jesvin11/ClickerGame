firstLaunch = true;
function Timer(){
    addFood();
    addScience();
    timeAdvance();
    addCivilian();
    refresh();
    setTimeout(Timer, 1000);

}