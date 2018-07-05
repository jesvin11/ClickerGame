hour = 5;
dayOfSeason = 1;
season = 2;
seasonName = "Spring";

function timeAdvance(){
    if (hour < 21){
        hour = hour + 3;
    } else {
        hour = 0;
        if (dayOfSeason < 30){
            dayOfSeason++;
        } else {
            dayOfSeason = 0;
            if (season < 4){
                season++;
            } else {
                season = 1;
            }
            seasonUpdate();
        }
    }
}

function seasonUpdate(){
    switch (season){
        case 1:
            weatherModifier = 0.5;
            seasonName = "Winter";
            break;
        case 2:
            weatherModifier = 1;
            seasonName = "Spring";
            break;
        case 3:
            weatherModifier = 1.25;
            seasonName = "Summer";
            break;
        case 4:
            weatherModifier = 1;
            seasonName = "Fall";
            break;
    }
}