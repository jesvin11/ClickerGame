stoneTotal = 0;
stonePerTick = 0;
stoneEfficiency = 0.5;
stoneMax = 200;

function addStone(){
    stonePerTick = quarryTotal * 0.5;
    stoneTotal = stoneTotal + stonePerTick;
    if (stoneTotal > stoneMax){
        stoneTotal = stoneMax;
    }
}