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
    if (pyramidsBuilding === true) {
        if (stoneTotal >= 10) {
            pyramidsStoneDone = pyramidsStoneDone + 10;
            stoneTotal = stoneTotal - 10;
        } else {
            pyramidsStoneDone = pyramidsStoneDone + stoneTotal;
            stoneTotal = 0;
        }
        stonePerTick = quarryTotal * quarryEfficiency + 10;
        if (stonePerTick < 0 && stoneTotal === 0){
            stonePerTick = 0
        }
    }
}