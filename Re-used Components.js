const LONG_FORM_SHIFT = 0;
const MID_FORM_SHIFT = 1;
const SHORT_FORM_SHIFT = 2;

const FULL_FORM_DATE = 0;
const MID_FORM_DATE = 1;
const SHORT_FORM_DATE = 2;

const DATE_FULL_FORM = 0;
const DATE_MID_FORM = 1;
const DATE_SHORT_FORM = 2;

const CURRENT_YEAR = 2020;
const DAYS_IN_A_YEAR = 365.25;
const TODAY = new Date();

const ANIMAL_NAMES = [
    "Mouse / Rat / Capybara / Guinea Pig", "Ox / Bull / Buffalo / Cow",
    "Tiger / Leopard", "Rabbit / Rapoo ð Electric Mouse", "Long Dragon / Ant / Bee / Peacock", "Snake Family / Centipede",
    "Horse / Sea-horse / Sea-dragon", "Goat / Maggot", "Monkey / Ape / Kong",
    "Rooster / Chicken / Hen", "Dodge / Deer / Reindeer / Duck", "Pig / Boar in ð Wilderness"
]; 

function getMonth(month, form = FULL_FORM_DATE) {
    let ret = '';

    switch (month) {
        case 0:
            ret = form == FULL_FORM_DATE ? 'Athen' : (form == MID_FORM_DATE ? 'At' : 'a');
            break;

        case 1:
            ret = form == FULL_FORM_DATE ? 'Duo' : (form == MID_FORM_DATE ? 'Du' : 'd');
            break;

        case 2:
            ret = form == FULL_FORM_DATE ? 'Magha' : (form == MID_FORM_DATE ? 'Ma' : 'm');
            break;

        case 3:
            ret = form == FULL_FORM_DATE ? 'Qaru' : (form == MID_FORM_DATE ? 'Qa' : 'q');
            break;

        case 4:
            ret = form == FULL_FORM_DATE ? 'Felle' : (form == MID_FORM_DATE ? 'Fe' : 'f');
            break;

        case 5:
            ret = form == FULL_FORM_DATE ? 'Yune' : (form == MID_FORM_DATE ? 'Yu' : 'y');
            break;

        case 6:
            ret = form == FULL_FORM_DATE ? 'SEPT' : (form == MID_FORM_DATE ? 'SE' : 'S');
            break;

        case 7:
            ret = form == FULL_FORM_DATE ? 'OCT' : (form == MID_FORM_DATE ? 'OC' : 'O');
            break;

        case 8:
            ret = form == FULL_FORM_DATE ? 'NOV' : (form == MID_FORM_DATE ? 'NO' : 'N');
            break;

        case 9:
            ret = form == FULL_FORM_DATE ? 'DEC' : (form == MID_FORM_DATE ? 'DE' : 'D');
            break;

        case 10:
            ret = form == FULL_FORM_DATE ? 'Palm' : (form == MID_FORM_DATE ? 'Pa' : 'p');
            break;

        case 11:
            ret = form == FULL_FORM_DATE ? 'Hose' : (form == MID_FORM_DATE ? 'Ho' : 'h');
            break;

        default:
            break;
    }

    return ret;
}

function whichDayIsToday(day, form = FULL_FORM_DATE) {
    let ret = '';

    switch (day) {
        case 0:
            ret = form == FULL_FORM_DATE ? 'Thaw' : (form == MID_FORM_DATE ? 'th' : 'T');
            break;
        
        case 1:
            ret = form == FULL_FORM_DATE ? 'Wan' : (form == MID_FORM_DATE ? 'wa' : 'W');
            break;

        case 2:
            ret = form == FULL_FORM_DATE ? 'Uth' : (form == MID_FORM_DATE ? 'ut' : 'U');
            break;

        case 3:
            ret = form == FULL_FORM_DATE ? 'Fri' : (form == MID_FORM_DATE ? 'fr' : 'F');
            break;

        case 4:
            ret = form == FULL_FORM_DATE ? 'Sat' : (form == MID_FORM_DATE ? 'sa' : 'S');
            break;

        case 5:
            ret = form == FULL_FORM_DATE ? 'Hie' : (form == MID_FORM_DATE ? 'hi' : 'H');
            break;

        case 6:
            ret = form == FULL_FORM_DATE ? 'Dak' : (form == MID_FORM_DATE ? 'da' : 'D');
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
                sf = 'm';
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
                sf = 'a';
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
                sf = 'e';
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
                sf = 'n';
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
    let dayInWeek = bDayInWeek ? whichDayIsToday((day + 5) % 7) : '';
    let shift = bShiftInADay ? getShiftOfToday() : '';

    let retStr = `${elteMonth} ${elteSoleDate} ${elteYear} ${dayInWeek} ${shift}`;

    return retStr;
}

function getDateMidForm(bMonth = false, bDateInMonth = false, bDayInWeek = false, bShiftInADay = false) {
    const TODAY = new Date();
    let month = TODAY.getMonth();
    let soleDate = TODAY.getDate();
    let year = TODAY.getFullYear();
    let day = TODAY.getDay();

    let elteMonth = bMonth ? getMonth(month < 2 ? month+10 : month-2, MID_FORM_DATE) : '';
    let elteSoleDate = bDateInMonth ? soleDate : '';
    let elteYear = 'cur_yea+' + (year - CURRENT_YEAR).toString();
    let dayInWeek = bDayInWeek ? whichDayIsToday((day + 5) % 7, MID_FORM_DATE) : '';
    let shift = bShiftInADay ? getShiftOfToday(MID_FORM_SHIFT) : '';

    let retStr = `${elteMonth} ${elteSoleDate} ${elteYear} ${dayInWeek} ${shift}`;

    return retStr;
}

function getDateShortForm(bMonth = false, bDateInMonth = false, bDayInWeek = false, bShiftInADay = false) {
    const TODAY = new Date();
    let month = TODAY.getMonth();
    let soleDate = TODAY.getDate();
    let year = TODAY.getFullYear();
    let day = TODAY.getDay();

    let elteMonth = bMonth ? getMonth(month < 2 ? month+10 : month-2, SHORT_FORM_DATE) : '';
    let elteSoleDate = bDateInMonth ? soleDate : '';
    let elteYear = year == CURRENT_YEAR ? 'O' : ((bMonth == false ? 'i+' : '+') + (year - CURRENT_YEAR).toString());
    let dayInWeek = bDayInWeek ? whichDayIsToday((day + 5) % 7, SHORT_FORM_DATE) : '';
    let shift = bShiftInADay ? getShiftOfToday(SHORT_FORM_SHIFT) : '';

    let retStr = `${elteMonth} ${elteSoleDate} ${elteYear} ${dayInWeek} ${shift}`;

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

const DATE_FORMAT_STRINGS = [
    /** full forms */ 
    // **month **{ date in month } year **{{ day in week } **{ shift in day }}
        [false, false, false], // current_year+6
        [true, false, false], // Yune current_year+6
        [true, true, false], // Yune 22 current_year+6
        [true, true, true, false], // Yune 22 current_year+6 Sat
        [true, true, true, true] // Yune 22 current_year+6 Sat iTa 

    /** mid forms */
    // **month **{ date in month } year **{{ day in week } **{ shift in day }}
        // cy+6
        // Du cy+6 (Duo current_year+6); DE cy+6 (DEC current_year+6)
        // Yu 22 cy+6
        // Yu 23 cy+6 H
        // Yu 23 cy+6 H Ta

    /** short forms */
    // **month **{ date in month } year **{{ day in week } **{ shift in day }}

];

const DATE_FORMAT_COUNT = DATE_FORMAT_STRINGS.length;

const TIME_FORMAT_STRINGS = [false, true]; // hh:mm; only

function getDateValuesTimeStamp(formLength = FULL_FORM_DATE, index = 0) {
    let bMonth = DATE_FORMAT_STRINGS[index][0]; 
    let bDateInMonth = DATE_FORMAT_STRINGS[index][1]; 
    let bDayInWeek = DATE_FORMAT_STRINGS[index][2]; 
    let bShiftInADay = bDayInWeek ? DATE_FORMAT_STRINGS[index][3] : false;
    let valuesStr = '';

    switch (formLength) {
        case FULL_FORM_DATE:
            valuesStr = getDateFullForm(bMonth, bDateInMonth, bDayInWeek, bShiftInADay);
            break;

        case MID_FORM_DATE:
            valuesStr = getDateMidForm(bMonth, bDateInMonth, bDayInWeek, bShiftInADay);
            break;

        case SHORT_FORM_DATE:
            valuesStr = getDateShortForm(bMonth, bDateInMonth, bDayInWeek, bShiftInADay);
            break;

        default:
            break;
    }

    return valuesStr;
}

// [; nr] implement using read-only properties <-- done
class TimeConstants {
    constructor() {
        this._ONE_SECOND_IN_MILLISECONDS = 1000;
        this._TWO_HOURS = 7200000; //
        this._ONE_MINUTE_IN_SECONDS = 60;
        this._ONE_MINUTE_IN_MILLISECONDS = 60000;
    }
    
    get ONE_SECOND_IN_MILLISECONDS() {
        return this._ONE_SECOND_IN_MILLISECONDS;
    }

    get TWO_HOURS() {
        return this._TWO_HOURS;
    }

    get ONE_MINUTE_IN_SECONDS() {
        return this._ONE_MINUTE_IN_SECONDS;
    }

    get ONE_MINUTE_IN_MILLISECONDS() {
        return this._ONE_MINUTE_IN_MILLISECONDS;
    }
}

class TimeValues {
    constructor() {
        this.Today = new Date();
        
        this.h = this.Today.getHours();
        this.m = this.Today.getMinutes();
        this.s = this.Today.getSeconds();
        this.ms = this.Today.getMilliseconds();
        
        this.callback = null;
        this.idcb = null;
        this.Constants = new TimeConstants();

        setInterval(() => this.timeTheCurrent(), this.Constants.TWO_HOURS);
    }

    timeTheCurrent() {
        this.Today = new Date();

        this.h = this.Today.getHours();
        this.m = this.Today.getMinutes()
        this.s = this.Today.getSeconds();

        console.log(`${this.h}:${this.m}:${this.s}`);
    }

    addHours(hours) {
        if (hours <= 0) 
            return;
        this.h = (this.h + hours) % 24;
    }

    subtractInRangeHours(hours) {
        if (hours <= 0 || hours > this.h)
            return;

        this.h -= hours;
    }

    formatTime(additionalHours = 0, bSecond = false) {
        let tmp = this.h + additionalHours;
        if (tmp < 0) 
            return;

        let hh = String(tmp % 24).padStart(2, '0');
        let mm = String(this.m).padStart(2, '0');
        let ss = String(this.s).padStart(2, '0');
    
        return `${hh}:${mm}` + (bSecond ? `:${ss}` : '');
    }

    increaseSecond() {
        ++this.s;
        if (this.s == 60) {
            this.s = 0;
            ++this.m;
            if (this.m == 60) {
                this.m = 0;
                ++this.h;
                if (this.h == 24) {
                    this.h = 0;
                    this.Today = new Date();
                }
            }
        }
        
        this.callback(this);
    }

    increaseMinute() {
        ++this.m;
        if (this.m == 60) {
            this.m = 0;
            ++this.h;
            if (this.h == 24) {
                this.h = 0;
                this.Today = new Date();
            }
        }

        this.callback(this);
    }

    updateTimeWithIntervalOneSecond(callback) { // for time value; in HH:MM
        let fractionOfASecond = ((new Date()).getMilliseconds()) % this.Constants.ONE_SECOND_IN_MILLISECONDS;
        let duration = this.Constants.ONE_SECOND_IN_MILLISECONDS - fractionOfASecond; // will be elapsed duration in milliseconds
        this.callback = callback;
        
        if (this.idcb) 
            clearInterval(this.idcb);

        setTimeout(() => { 
            this.idcb = setInterval(() => this.increaseSecond(), this.Constants.ONE_SECOND_IN_MILLISECONDS);
            this.increaseSecond();
        }, duration);
    }

    updateTimeWithIntervalOneMinute(callback) {
        // const ONE_MINUTE_IN_MILLISECONDS = 60000;
        // let fractionOfAMinute = ((new Date()).getMilliseconds()) % ONE_MINUTE_IN_MILLISECONDS;
        // let duration = ONE_MINUTE_IN_MILLISECONDS - fractionOfAMinute; // will be elapsed duration in milliseconds
       
        let fractionOfAMinuteInSecond = (new Date()).getSeconds() % this.Constants.ONE_MINUTE_IN_SECONDS;
        let duration = (60 - fractionOfAMinuteInSecond) * this.Constants.ONE_SECOND_IN_MILLISECONDS; // elapsed time in milliseconds
        
        this.callback = callback;
        
        if (this.idcb) 
            clearInterval(this.idcb);

        setTimeout(() => {
            this.s = 0;
            this.increaseMinute(); // doesn't cost much
            this.idcb = setInterval(() => this.increaseMinute(), this.Constants.ONE_MINUTE_IN_MILLISECONDS);
        }, duration);
    }
}
