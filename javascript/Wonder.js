pyramidsBuilding = false;
pyramidsDone = false;
pyramidsStoneDone = 0;
pyramidsPercent = 0;

function startPyramids(){
    pyramidsBuilding = true;
    unhide("stopPyrramids");
    hide("startPyramids")
}

function stopPyramids(){
    pyramidsBuilding = false;
    unhide("startPyrramids");
    hide("stopPyramids")
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
        pyramidsPercent = Math.round(pyramidsStoneDone / 50000 * 100);
        if (pyramidsStoneDone > 50000){
            pyramidsDone = true;
            hide("pyramidsCost");
            hide("startPyramids");
            woodMax = woodMax + 2000;
            foodMax = foodMax + 5000;
            stoneMax = stoneMax + 1500;
        }
    }
}