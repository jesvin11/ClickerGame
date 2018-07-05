stoneTotal = 0;
stonePerTick = 0;
stoneEfficiency = 0.5;

function addStone(){
    stonePerTick = quarryTotal * 0.5;
    stoneTotal = stoneTotal + stonePerTick;
}