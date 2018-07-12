//maakCookie
function makeCookie(name, value, days){
	if(days)
    {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expireDate = "; expires = " + date.toGMTString();
	}else{
		expireDate = " ";
	}
	document.cookie = name + "=" + value + expireDate + ";path=/";
}

//leesCookie
function readCookie(cname){
	// nameCookie = name+"=";
	// cookieArray = document.cookie.split(";");
	// for( i=0; i < cookieArray.length; i++){
	// 	thisCookie = cookieArray[i];
	// 	while (thisCookie.charAt(0)===' '){
	// 		thisCookie = thisCookie.substring(1,thisCookie.length);
	// 	}
	// 	if (thisCookie.indexOf(nameCookie) === 0)
	// 	{
	// 		return thisCookie.substring(nameCookie.length,thisCookie.length);
	// 	}
	// }
	// return nameCookie;

    cname2 = cname + "=";
    decodedCookie = decodeURIComponent(document.cookie);
    ca = decodedCookie.split(';');
    for(i = 0; i <ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname2) === 0) {
            return c.substring(cname2.length, c.length);
        }
    }
    return "";
}

//
function deleteCookie(name){
	makeCookie(name,"",-1);
}

function save(){
	makeCookie("foodTotal", foodTotal, 9999);
    makeCookie("farmEfficiency", farmEfficiency, 9999);
    makeCookie("farmerEfficiency", farmerEfficiency, 9999);
    makeCookie("foodMax", foodMax, 9999);
    makeCookie("weatherModifier", weatherModifier, 9999);
    makeCookie("farmTotal", farmTotal, 9999);
    makeCookie("strawHutTotal", strawHutTotal, 9999);
    makeCookie("libraryTotal", libraryTotal, 9999);
    makeCookie("quarryTotal", quarryTotal, 9999);
    makeCookie("woodenHouseTotal", woodenHouseTotal, 9999);
    makeCookie("unemployed", unemployed, 9999);
    makeCookie("farmers", farmers, 9999);
    makeCookie("woodcutters", woodcutters, 9999);
    makeCookie("scientists", scientists, 9999);
    makeCookie("woodTotal", woodTotal, 9999);
    makeCookie("woodcutterEfficieny", woodcutterEfficieny, 9999);
    makeCookie("woodMax", woodMax, 9999);
    makeCookie("stoneTotal", stoneTotal, 9999);
    makeCookie("quarryEfficiency", quarryEfficiency, 9999);
    makeCookie("stoneMax", stoneMax, 9999);
    makeCookie("civilianTotal", civilianTotal, 9999);
    makeCookie("maxCivilians", maxCivilians, 9999);
    makeCookie("scienceTotal", scienceTotal, 9999);
    makeCookie("scienceMax", scienceMax, 9999);
    makeCookie("scientistEfficiency", scientistEfficiency, 9999);
    makeCookie("hour", hour, 9999);
    makeCookie("dayOfSeason", dayOfSeason, 9999);
    makeCookie("season", season, 9999);
    makeCookie("seasonName", seasonName, 9999);
    makeCookie("farmCost", farmCost, 9999);
    makeCookie("strawHutCost", strawHutCost, 9999);
    makeCookie("libraryCost", libraryCost, 9999);
    makeCookie("quarryCost", quarryCost, 9999);
    makeCookie("woodenHouseCost", woodenHouseCost, 9999);
    makeCookie("barnCost", barnCost, 9999);
    makeCookie("barnTotal", barnTotal, 9999);
    makeCookie("unhidden", unhidden, 9999);
}

function load(){
    if (readCookie("foodTotal") !== ""){
        foodTotal = parseFloat(readCookie("foodTotal"));
    }
    if (readCookie("farmEfficiency") !== ""){
        farmEfficiency = parseFloat(readCookie("farmEfficiency"));
    }
    if (readCookie("farmerEfficiency") !== ""){
        farmerEfficiency = parseFloat(readCookie("farmerEfficiency"));
    }
    if (readCookie("foodMax") !== ""){
        foodMax = parseFloat(readCookie("foodMax"));
    }
    if (readCookie("weatherModifier") !== ""){
        weatherModifier = parseFloat(readCookie("weatherModifier"));
    }
    if (readCookie("farmTotal") !== ""){
        farmTotal = parseFloat(readCookie("farmTotal"));
    }
    if (readCookie("strawHutTotal") !== ""){
        strawHutTotal = parseFloat(readCookie("strawHutTotal"));
    }
    if (readCookie("libraryTotal") !== ""){
        libraryTotal = parseFloat(readCookie("libraryTotal"));
    }
    if (readCookie("quarryTotal") !== ""){
        quarryTotal = parseFloat(readCookie("quarryTotal"));
    }
    if (readCookie("woodenHouseTotal") !== ""){
        woodenHouseTotal = parseFloat(readCookie("woodenHouseTotal"));
    }
    if (readCookie("unemployed") !== ""){
        unemployed = parseFloat(readCookie("unemployed"));
    }
    if (readCookie("farmers") !== ""){
        farmers = parseFloat(readCookie("farmers"));
    }
    if (readCookie("woodcutters") !== ""){
        woodcutters = parseFloat(readCookie("woodcutters"));
    }
    if (readCookie("scientists") !== ""){
        scientists = parseFloat(readCookie("scientists"));
    }
    if (readCookie("woodTotal") !== ""){
        woodTotal = parseFloat(readCookie("woodTotal"));
    }
    if (readCookie("woodcutterEfficieny") !== ""){
        woodcutterEfficieny = parseFloat(readCookie("woodcutterEfficieny"));
    }
    if (readCookie("woodMax") !== ""){
        woodMax = parseFloat(readCookie("woodMax"));
    }
    if (readCookie("stoneTotal") !== ""){
        stoneTotal = parseFloat(readCookie("stoneTotal"));
    }
    if (readCookie("quarryEfficiency") !== ""){
        quarryEfficiency = parseFloat(readCookie("quarryEfficiency"));
    }
    if (readCookie("stoneMax") !== ""){
        stoneMax = parseFloat(readCookie("stoneMax"));
    }
    if (readCookie("civilianTotal") !== ""){
        civilianTotal = parseFloat(readCookie("civilianTotal"));
    }
    if (readCookie("maxCivilians") !== ""){
        maxCivilians = parseFloat(readCookie("maxCivilians"));
    }
    if (readCookie("scienceTotal") !== ""){
        scienceTotal = parseFloat(readCookie("scienceTotal"));
    }
    if (readCookie("scienceMax") !== ""){
        scienceMax = parseFloat(readCookie("scienceMax"));
    }
    if (readCookie("scientistEfficiency") !== ""){
        scientistEfficiency = parseFloat(readCookie("scientistEfficiency"));
    }
    if (readCookie("hour") !== ""){
        hour = parseFloat(readCookie("hour"));
    }
    if (readCookie("dayOfSeason") !== ""){
        dayOfSeason = parseFloat(readCookie("dayOfSeason"));
    }
    if (readCookie("season") !== ""){
        season = parseFloat(readCookie("season"));
    }
    if (readCookie("farmCost") !== ""){
        farmCost = parseFloat(readCookie("farmCost"));
    }
    if (readCookie("strawHutCost") !== ""){
        strawHutCost = parseFloat(readCookie("strawHutCost"));
    }
    if (readCookie("libraryCost") !== ""){
        libraryCost = parseFloat(readCookie("libraryCost"));
    }
    if (readCookie("quarryCost") !== ""){
        quarryCost = parseFloat(readCookie("quarryCost"));
    }
    if (readCookie("woodenHouseCost") !== ""){
        woodenHouseCost = parseFloat(readCookie("woodenHouseCost"));
    }
    if (readCookie("seasonName") !== ""){
        readCookie("seasonName");
    }
    if (readCookie("barnTotal") !== ""){
        barnTotal = parseFloat(readCookie("barnTotal"));
    }
    if (readCookie("barnCost") !== ""){
        barnCost = parseFloat(readCookie("barnCost"));
    }
    unhidden = readCookie("unhidden");

    Elements = unhidden.split(",");
    if (unhidden !== "") {
        Elements.forEach(function (element) {
            reunhide(element);
        });
    }

    refresh();
}