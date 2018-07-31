pyramidsBuilding = false;
pyramidsDone = false;
pyramidsStoneDone = 0;
pyramidsPercent = 0;

function startPyramids(){
    pyramidsBuilding = true;
}

function stopPyramids(){
    pyramidsBuilding = false;
}

function buildWonders(){
    if (pyramidsBuilding === true){
        if (stoneTotal >= 10){
            pyramidsStoneDone = pyramidsStoneDone + 10;
            stoneTotal = stoneTotal - 10;
        } else {
            pyramidsStoneDone = pyramidsStoneDone + stoneTotal;
            stoneTotal = 0;
        }
        pyramidsPercent = math.round(pyramidsStoneDone / 10000 * 100);
        if (pyramidsStoneDone > 60000){
            pyramidsDone = true;
            hide("pyramidsCost");
            woodMax = woodMax + 2000;
            foodMax = foodMax + 5000;
            stoneMax = stoneMax + 1500;
        }
    }
}