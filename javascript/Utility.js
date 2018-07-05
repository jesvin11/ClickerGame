function unhide(id) {
    document.getElementById(id).classList.remove('hidden');
}

function refresh(){
    document.getElementById('farms').innerHTML = farmTotal;
    document.getElementById('food').innerHTML = foodTotal;
    document.getElementById('foodPerTick').innerHTML = foodPerTick;
    document.getElementById('time').innerHTML = hour;
    document.getElementById('civilians').innerHTML = civilianTotal + "/" + maxCivilians;
    document.getElementById('unemployed').innerHTML = unemployed;
    document.getElementById('farmers').innerHTML = farmers;
    document.getElementById('straw huts').innerHTML = strawHutTotal;
    document.getElementById('science').innerHTML = scienceTotal;
    document.getElementById('sciencePerTick').innerHTML = sciencePerTick;
    document.getElementById('library').innerHTML = libraryTotal;
    document.getElementById('scientists').innerHTML = scientists;
    document.getElementById('wood').innerHTML = woodTotal;
    document.getElementById('woodPerTick').innerHTML = woodPerTick;
    document.getElementById('woodcutters').innerHTML = woodcutters;
    document.getElementById('stone').innerHTML = woodTotal;
    document.getElementById('stonePerTick').innerHTML = woodPerTick;
    document.getElementById('quarries').innerHTML = quarryTotal;
}