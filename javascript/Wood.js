woodTotal = 0;
woodPerTick = 0;
woodcutterEfficieny = 1;
woodMax = 300;

function addWood(){
    woodPerTick = woodcutters * woodcutterEfficieny;
    woodTotal = woodTotal + woodPerTick;
    if (woodTotal > woodMax){
        woodTotal = woodMax;
    }
}