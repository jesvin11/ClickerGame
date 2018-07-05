stoneTotal = 0;
stonePerTick = 0;

function addStone(){
    stonePerTick = quarryTotal * 0.5;
    stoneTotal = stoneTotal + stonePerTick;
}