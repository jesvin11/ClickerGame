unhidden = "";


function unhide(id) {
    document.getElementById(id).classList.remove('hidden');
    if (unhidden === ""){
        unhidden = id;
    } else {
        unhidden = unhidden + "," + id;
    }
}

function reunhide(id) {
    document.getElementById(id).classList.remove('hidden');
}

function hide(id) {
    rebuild = "";
    firstLoop = true;
    search = unhidden.split(",");
    search.forEach(function(element){
        if (element !== id){
            if (firstLoop){
                rebuild = element;
                firstLoop = false;
            } else {
                rebuild = rebuild + "," + element;
            }
        }
    });
    document.getElementById(id).classList.add('hidden');
    unhidden = rebuild;
}

function refresh(){
    document.getElementById('farms').innerHTML = farmTotal;
    document.getElementById('food').innerHTML = foodTotal + "/" + foodMax;
    document.getElementById('foodPerTick').innerHTML = foodPerTick;
    document.getElementById('time').innerHTML = hour;
    document.getElementById('civilians').innerHTML = civilianTotal + "/" + maxCivilians;
    document.getElementById('unemployed').innerHTML = unemployed;
    document.getElementById('farmers').innerHTML = farmers;
    document.getElementById('straw huts').innerHTML = strawHutTotal;
    document.getElementById('science').innerHTML = scienceTotal + "/" + scienceMax;
    document.getElementById('sciencePerTick').innerHTML = sciencePerTick;
    document.getElementById('library').innerHTML = libraryTotal;
    document.getElementById('scientists').innerHTML = scientists;
    document.getElementById('wood').innerHTML = woodTotal + "/" + woodMax;
    document.getElementById('woodPerTick').innerHTML = woodPerTick;
    document.getElementById('woodcutters').innerHTML = woodcutters;
    document.getElementById('stone').innerHTML = stoneTotal + "/" + stoneMax;
    document.getElementById('stonePerTick').innerHTML = stonePerTick;
    document.getElementById('quarries').innerHTML = quarryTotal;
    document.getElementById('woodenHouses').innerHTML = woodenHouseTotal;
    document.getElementById('day').innerHTML = dayOfSeason;
    document.getElementById('season').innerHTML = seasonName;
    document.getElementById('farmCost').innerHTML = farmCost;
    document.getElementById('strawHutCost').innerHTML = strawHutCost;
    document.getElementById('libraryCost').innerHTML = libraryCost;
    document.getElementById('quarryCost').innerHTML = quarryCost;
    document.getElementById('woodenHouseCost').innerHTML = woodenHouseCost;
    document.getElementById('barnCost').innerHTML = barnCost;
    document.getElementById('barnTotal').innerHTML = barnTotal;
    document.getElementById('barnTotal').innerHTML = pyramidsPercent + "%";


}