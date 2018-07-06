stoneTotal = 0;
stonePerTick = 0;
quarryEfficiency = 0.5;
stoneMax = 200;

function addStone(){
    stonePerTick = quarryTotal * quarryEfficiency;
    stoneTotal = stoneTotal + stonePerTick;
    if (stoneTotal > stoneMax){
        stoneTotal = stoneMax;
    }
}