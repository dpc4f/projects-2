

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

function getDay(day, bLongForm = true) {
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

function convertToElte(aDate) {
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
    let elteMonth = getMonth(month < 2 ? month + 10 : month - 2);
    let elteYear;
    let elteDOB;

    if (month < 2) // month is Jan OR Feb
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
