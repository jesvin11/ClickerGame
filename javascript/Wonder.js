pyramidsBuilding = false;
pyramidsDone = false;
pyramidsStoneDone = 0;
pyramidsPercent = 0;
wondersStoneCost = 0;

function startPyramids(){
    pyramidsBuilding = true;
    unhide("stopPyramids");
    hide("startPyramids");
    wondersStoneCost = wondersStoneCost + 10;
}

function stopPyramids(){
    pyramidsBuilding = false;
    unhide("startPyramids");
    hide("stopPyramids");
    wondersStoneCost = wondersStoneCost - 10;
}

function buildWonders(){
    if (pyramidsBuilding === true){
        if (pyramidsStoneDone > 50000 && pyramidsDone !== true){
            pyramidsDone = true;
            pyramidsStoneDone = 50000;
            pyramidsBuilding = false;
            hide("pyramidsCost");
            hide("stopPyramids");
            woodMax = woodMax + 2000;
            foodMax = foodMax + 5000;
            stoneMax = stoneMax + 1500;
        }
    }
    pyramidsPercent = Math.round(pyramidsStoneDone / 50000 * 100);
}