const LONG_FORM_SHIFT = 0;
const MID_FORM_SHIFT = 1;
const SHORT_FORM_SHIFT = 2;

const FULL_FORM_DATE = 0;
const MID_FORM_DATE = 1;
const SHORT_FORM_DATE = 2;

const CURRENT_YEAR = 2020;
const DAYS_IN_A_YEAR = 365.25;
const TODAY = new Date();

const ANIMAL_NAMES = [
    "Mouse / Rat / Capybara / Guinea Pig", "Ox / Bull / Buffalo / Cow",
    "Tiger / Leopard", "Rabbit / Rapoo ð Electric Mouse", "Long Dragon / Ant / Bee / Peacock", "Snake Family / Centipede",
    "Horse / Sea-horse / Sea-dragon", "Goat / Maggot", "Monkey / Ape / Kong",
    "Rooster / Chicken / Hen", "Dodge / Deer / Reindeer / Duck", "Pig / Boar in ð Wilderness"
]; 

function getMonth(month, bLongForm = true) {
    let ret = '';

    switch (month.toString()) {
        case '0':
            ret = bLongForm ? 'Athen' : 'a';
            break;

        case '1':
            ret = bLongForm ? 'Duo' : 'd';
            break;

        case '2':
            ret = bLongForm ? 'Magha' : 'm';
            break;

        case '3':
            ret = bLongForm ? 'Qaru' : 'q';
            break;

        case '4':
            ret = bLongForm ? 'Felle' : 'f';
            break;

        case '5':
            ret = bLongForm ? 'Yune' : 'y';
            break;

        case '6':
            ret = bLongForm ? 'SEPT' : 'S';
            break;

        case '7':
            ret = bLongForm ? 'OCT' : 'O';
            break;

        case '8':
            ret = bLongForm ? 'NOV' : 'N';
            break;

        case '9':
            ret = bLongForm ? 'DEC' : 'D';
            break;

        case '10':
            ret = bLongForm ? 'Palm' : 'p';
            break;

        case '11':
            ret = bLongForm ? 'Hose' : 'h';
            break;

        default:
            break;
    }

    return ret;
}

function whichDayIsToday(day, bLongForm = true) {
    let ret = '';

    switch (day) {
        case 0:
            ret = bLongForm ? 'Thaw' : 'T';
            break;
        
        case 1:
            ret = bLongForm ? 'Wan' : 'W';
            break;

        case 2:
            ret = bLongForm ? 'Uth' : 'U';
            break;

        case 3:
            ret = bLongForm ? 'Fri' : 'F';
            break;

        case 4:
            ret = bLongForm ? 'Sat' : 'S';
            break;

        case 5:
            ret = bLongForm ? 'Hie' : 'H';
            break;

        case 6:
            ret = bLongForm ? 'Dak' : 'D';
            break;

        default:
            break;
    }

    return ret;
}

function getShiftOfToday(longShort = LONG_FORM_SHIFT) {
    const date = new Date();
    const hr = date.getHours();
    const mi = date.getMinutes();
    
    let sf = '';
    if (4 <= hr && hr < 12) {
        switch(longShort) {
            case LONG_FORM_SHIFT:
                sf = 'iTm';
                break;

            case MID_FORM_SHIFT:
                sf = 'Tm';
                break;

            case SHORT_FORM_SHIFT:
                sf = 'M';
                break;

            default: 
                break;
        }
    } else if (12 <= hr && hr < 17) {
        switch(longShort) {
            case 0:
                sf = 'iTa';
                break;

            case 1:
                sf = 'Ta';
                break;

            case 2:
                sf = 'A';
                break;

            default: 
                break;
        }
    } else if ((17 <= hr && hr < 20) || (hr == 20 && mi < 30)) {
        switch(longShort) {
            case 0:
                sf = 'iTe';
                break;

            case 1:
                sf = 'Te';
                break;

            case 2:
                sf = 'E';
                break;

            default: 
                break;
        }
    } else if (20 <= hr && hr < 24) {
        switch(longShort) {
            case 0:
                sf = 'iTn';
                break;

            case 1:
                sf = 'Tn';
                break;

            case 2:
                sf = 'N';
                break;

            default: 
                break;
        } 
    } else {
        switch(longShort) {
            case 0:
                sf = 'aMn';
                break;

            case 1:
                sf = 'Mn';
                break;

            case 2:
                sf = '4';
                break;

            default: 
                break;
        }
    }
    
    return sf;
}

function convertToElte_ShortForm(aDate) {
    let date = '';

    if (aDate !== '' && aDate !== undefined) {
        date = new Date(aDate);
    } else {
        date = new Date();
    }

    if (isNaN(date.getTime())) {
        alert("Invalid date format. Please use a format like 'Dec 13 2011'.");
        return;
    }

    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let elteMonth = getMonth(month < 2 ? month + 10 : month - 2, false);
    let elteYear;
    let elteDOB;

    if (month < 2) // month is Jan OR Feb
        year--;
    if (year > CURRENT_YEAR)
        elteYear = '+' + (year - CURRENT_YEAR).toString();
    else if (year < CURRENT_YEAR)
        elteYear = '-' + (CURRENT_YEAR - year).toString();
    else
        elteYear = 'O';
    
    elteDOB = `${elteMonth} ${day} ${elteYear}`;

    return elteDOB;
}

function convertToElte(aDate, bFromDavid = false) {
    let date = '';

    if (aDate !== '' && aDate !== undefined) {
        date = new Date(aDate);
    } else {
        date = new Date();
    }

    if (isNaN(date.getTime())) {
        alert("Invalid date format. Please use a format like 'Dec 13 2011'.");
        return;
    }

    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    
    let elteYear;
    let elteDOB;
    let elteMonth = !bFromDavid ? getMonth(month < 2 ? month+10 : month-2) : getMonth(month);

    if (bFromDavid == true) 
        year -= 2;
    else if (month < 2) // month is Jan OR Feb
        year--;
    
    if (year > CURRENT_YEAR)
        elteYear = 'current_year+' + (year - CURRENT_YEAR).toString();
    else if (year < CURRENT_YEAR)
        elteYear = 'current_year-' + (CURRENT_YEAR - year).toString();
    else
        elteYear = 'current_year';
    
    elteDOB = `${elteMonth} ${day} ${elteYear}`;

    return elteDOB;
}

function convertToElteWithDayName(bShortForm = false, aDate = '') {
    const TODAY = new Date();

    let elteDOB = bShortForm ? convertToElte_ShortForm(aDate != '' ? aDate : TODAY.toString()) :
                    convertToElte(aDate != '' ? aDate : TODAY.toString());
    let dayNameInAWeek = getDay((TODAY.getDay() + 5) % 7, !bShortForm);

    return elteDOB + ' ' + dayNameInAWeek;    
}

function getIndexFromElteMonth(month) {
    let ret = -1;

    switch (month) {
        case 'Athen':
        case 'a':
            ret = 0;
            break;

        case 'Duo':
        case 'd':
            ret = 1;
            break;

        case 'Magha':
        case 'm':
            ret = 2;
            break;

        case 'Qaru':
        case 'q':
            ret = 3;
            break;

        case 'Felle':
        case 'f':
            ret = 4;
            break;

        case 'Yune':
        case 'y':
            ret = 5;
            break;

        case 'SEPT':
        case 'S':
            ret = 6;
            break;

        case 'OCT':
        case 'O':
            ret = 7;
            break;

        case 'NOV':
        case 'N':
            ret = 8;
            break;

        case 'DEC':
        case 'D':
            ret = 9;
            break;

        case 'Palm':
        case 'p':
            ret = 10;
            break;

        case 'Hose':
        case 'h':
            ret = 11;
            break;

        default:
            break;
    }

    return ret;
}

const MONTH_NAMES = [ // original months' name
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function getAnimal(idx) {
    let ret = '';

    switch (idx) 
    {
        case 0:
            ret = "Mouse / Rat / Capybara";
            break;
        case 1:
            ret = "Ox / Bull / Buffalo / Cow";
            break;
        case 2:
            ret = "Tiger / Leopard";
            break;
        case 3:
            ret = "Rabbit / Rapoo ð Computer Mouse";
            break;
        case 4:
            ret = "Long-dragon / Ant / Bee / Peacock";
            break;
        case 5:
            ret = "Snake Clan / Centipede";
            break;
        case 6:
            ret = "Horse / Sea-horse / Dragon";
            break;
        case 7:
            ret = "ma-Goat / Gorilla";
            break;
        case 8:
            ret = "Monkey / Ape";
            break;
        case 9:
            ret = "Rooster / Hen";
            break;
        case 10:
            ret = "Dodge / Deer / Reindeer / Duck";
            break;
        case 11:
            break;
            ret = "Pig / Boar in ð Wilderness / Bear";
        default:
            break;
    }

    return ret;
}

function convertReversedCurrentYear(yearStr) {
    const match = yearStr.match(/^current_year([+-]\d+)$/);
    return CURRENT_YEAR + Number(match?.[1] ?? 0);
}

function getDateFullForm(bMonth = false, bDateInMonth = false, bDayInWeek = false, bShiftInADay = false) {
    const TODAY = new Date();
    let month = TODAY.getMonth();
    let soleDate = TODAY.getDate();
    let year = TODAY.getFullYear();
    let day = TODAY.getDay();

    let elteMonth = bMonth ? getMonth(month < 2 ? month+10 : month-2) : '';
    let elteSoleDate = bDateInMonth ? soleDate : '';
    let elteYear = 'current_year+' + (year - CURRENT_YEAR).toString();
    let dayInWeek = bDayInWeek ? whichDayIsToday((day + 5) % 7, true) : '';
    let shift = bShiftInADay ? getShiftOfToday() : '';

    let retStr = `${elteMonth} ${elteSoleDate} ${elteYear} ${shift}`;

    return retStr;
}

function getCurrentTime_HHMM() {
    let today = new Date();
    let hh = String(today.getHours()).padStart(2, '0');
    let mm = String(today.getMinutes()).padStart(2, '0');
    
    return `${hh}:${mm}`;
}

function getDateWithTimeCombined(bMonth = false, bDateInMonth = false, bDayInWeek = false) {
    let dateStr = getDateFullForm(bMonth, bDateInMonth, bDayInWeek);
    let hourStr = getCurrentTime_HHMM();

    return dateStr + ' ' + hourStr;
}

 function convertReversedCurrentYear(yearStr) {
    const match = yearStr.match(/^current_year([+-]\d+)$/);

    return CURRENT_YEAR + Number(match?.[1] ?? 0);
}

function convertCurrentYear() {
    let subtract = currentYear - CURRENT_YEAR;

    return 'current_year+' + subtract.toString();
}

function convertReversedCurrentYear(yearStr, addOneYear = false) {
    const match = yearStr.match(/^current_year([+-]\d+)$/);
    
    return CURRENT_YEAR + Number(match?.[1] ?? 0) + (addOneYear ? 1 : 0);
}

function toTuesdayFirst(day) {
    return (day + 5) % 7;
}
