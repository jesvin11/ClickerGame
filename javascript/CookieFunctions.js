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
    makeCookie("unhidden", unhidden, 9999);
}

function load(){
    foodTotal = parseFloat(readCookie("foodTotal"));
    farmEfficiency = parseFloat(readCookie("farmEfficiency"));
    farmerEfficiency = parseFloat(readCookie("farmerEfficiency"));
    foodMax = parseFloat(readCookie("foodMax"));
    weatherModifier = parseFloat(readCookie("weatherModifier"));
    farmTotal = parseFloat(readCookie("farmTotal"));
    strawHutTotal = parseFloat(readCookie("strawHutTotal"));
    libraryTotal = parseFloat(readCookie("libraryTotal"));
    quarryTotal = parseFloat(readCookie("quarryTotal"));
    woodenHouseTotal = parseFloat(readCookie("woodenHouseTotal"));
    unemployed = parseFloat(readCookie("unemployed"));
    farmers = parseFloat(readCookie("farmers"));
    woodcutters = parseFloat(readCookie("woodcutters"));
    scientists = parseFloat(readCookie("scientists"));
    woodTotal = parseFloat(readCookie("woodTotal"));
    woodcutterEfficieny = parseFloat(readCookie("woodcutterEfficieny"));
    woodMax = parseFloat(readCookie("woodMax"));
    stoneTotal = parseFloat(readCookie("stoneTotal"));
    quarryEfficiency = parseFloat(readCookie("quarryEfficiency"));
    stoneMax = parseFloat(readCookie("stoneMax"));
    civilianTotal = parseFloat(readCookie("civilianTotal"));
    maxCivilians = parseFloat(readCookie("maxCivilians"));
    scienceTotal = parseFloat(readCookie("scienceTotal"));
    scienceMax = parseFloat(readCookie("scienceMax"));
    scientistEfficiency = parseFloat(readCookie("scientistEfficiency"));
    hour = parseFloat(readCookie("hour"));
    dayOfSeason = parseFloat(readCookie("dayOfSeason"));
    season = parseFloat(readCookie("season"));
    farmCost = parseFloat(readCookie("farmCost"));
    strawHutCost = parseFloat(readCookie("strawHutCost"));
    libraryCost = parseFloat(readCookie("libraryCost"));
    quarryCost = parseFloat(readCookie("quarryCost"));
    woodenHouseCost = parseFloat(readCookie("woodenHouseCost"));
    seasonName = readCookie("seasonName");
    unhidden = readCookie("unhidden");

    Elements = unhidden.split(",");
    if (unhidden !== "") {
        Elements.forEach(function (element) {
            reunhide(element);
        });
    }

    refresh();
}