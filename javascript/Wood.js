woodTotal = 0;
woodPerTick = 0;
woodcutterEfficieny = 1;

function addWood(){
    woodPerTick = woodcutters * woodcutterEfficieny;
    woodTotal = woodTotal + woodPerTick;
}