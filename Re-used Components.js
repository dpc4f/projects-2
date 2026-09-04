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

function convertToElteMonth(month) {
    return month < 2 ? month + 10 : month - 2;
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
    let elteMonth = !bFromDavid ? getMonth(convertToElteMonth(month)) : getMonth(month);

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

function getDateFullForm(bMonth = false, bDateInMonth = false, bDayInWeek = false, bShiftInADay = false, bWeekNumber = false) {
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
    let dateVal = new DateValues();
    let weekNo = bWeekNumber ? dateVal.wk : '';

    let retStr = `${elteMonth} ${elteSoleDate} ${elteYear} ${weekNo} ${dayInWeek} ${shift}`;

    return retStr;
}

function getDateMidForm(bMonth = false, bDateInMonth = false, bDayInWeek = false, bShiftInADay = false, bWeekNumber = false) {
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
    let dateVal = new DateValues();
    let weekNo = bWeekNumber ? dateVal.wk : '';

    let retStr = `${elteMonth} ${elteSoleDate} ${elteYear} ${weekNo} ${dayInWeek} ${shift}`;

    return retStr;
}

function getDateShortForm(bMonth = false, bDateInMonth = false, bDayInWeek = false, bShiftInADay = false, bWeekNumber = false) {
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
    let dateVal = new DateValues();
    let weekNo = bWeekNumber ? dateVal.wk : '';

    let retStr = `${elteMonth} ${elteSoleDate} ${elteYear} ${weekNo} ${dayInWeek} ${shift}`;

    return retStr;
}

function getCurrentTime_HHMM() {
    let today = new Date();
    let hh = String(today.getHours()).padStart(2, '0');
    let mm = String(today.getMinutes()).padStart(2, '0');
    
    return `${hh}:${mm}`;
}

function getDateWithTimeCombined(bMonth = false, bDateInMonth = false, bDayInWeek = false, bWeekNumber = false) {
    let dateStr = getDateFullForm(bMonth, bDateInMonth, bDayInWeek, bWeekNumber);
    let hourStr = getCurrentTime_HHMM();

    return dateStr + ' ' + hourStr;
}

function convertCurrentYear(year) {
    let subtract = year - CURRENT_YEAR;

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
    // **month **{ date in month } year **{ week number } **{{ day in week } **{ shift in day }}
        [false, false, false, false], // current_year+6
        [true, false, false, false], // Yune current_year+6
        [true, true, false, false], // Yune 22 current_year+6
        [true, true, true, false, false], // Yune 22 current_year+6 Sat
        [true, true, true, true, false], // Yune 22 current_year+6 Sat iTa 

    /** mid forms */
    // **month **{ date in month } year **{ week number } **{{ day in week } **{ shift in day }}
        // cy+6
        // Du cy+6 (Duo current_year+6); DE cy+6 (DEC current_year+6)
        // Yu 22 cy+6
        // Yu 23 cy+6 H
        // Yu 23 cy+6 H Ta

    /** short forms */
    // **month **{ date in month } year **{ week number } **{{ day in week } **{ shift in day }}

    /** [; nr] including week numbers */
        [false, false, false, true], // current_year+6 28
        [true, false, false, true], // SEPT current_year+6 28
        [true, true, false, true], // SEPT 1 current_year+6 28
        [true, true, true, false, true], // SEPT 1 current_year+6 28 Thaw
        [true, true, true, true, true] // SEPT 1 current_year+6 28 Thaw iTa 
        
        /***
         * [an algorithm]
         * get the first date of the year w/ the day
         * continuously add it to 7
         * if the result is greater than number of days in the month
         * subtract it by the number of days in the month
         * repeat the steps until come to the current month
         * there if the result is smaller than OR equal to the current day; return the week number
         * if the result is greater; return week number plus 1
         * 
         * 
         * 
         */

];

const DATE_FORMAT_COUNT = DATE_FORMAT_STRINGS.length;

const TIME_FORMAT_STRINGS = [false, true]; // hh:mm; only

function getDateValuesTimeStamp(formLength = FULL_FORM_DATE, index = 0) {
    let bMonth = DATE_FORMAT_STRINGS[index][0]; 
    let bDateInMonth = DATE_FORMAT_STRINGS[index][1]; 
    let bDayInWeek = DATE_FORMAT_STRINGS[index][2]; 
    let bShiftInADay = bDayInWeek ? DATE_FORMAT_STRINGS[index][3] : false;
    let bWeekNumber = DATE_FORMAT_STRINGS[index][4];
    let valuesStr = '';

    switch (formLength) {
        case FULL_FORM_DATE:
            valuesStr = getDateFullForm(bMonth, bDateInMonth, bDayInWeek, bShiftInADay, bWeekNumber);
            break;

        case MID_FORM_DATE:
            valuesStr = getDateMidForm(bMonth, bDateInMonth, bDayInWeek, bShiftInADay, bWeekNumber);
            break;

        case SHORT_FORM_DATE:
            valuesStr = getDateShortForm(bMonth, bDateInMonth, bDayInWeek, bShiftInADay, bWeekNumber);
            break;

        default:
            break;
    }

    return valuesStr;
}

// [; nr] implement using read-only properties <-- done
class TimeConstants {
    /*** 
     * has been moved to a class belongs to TimeValues class 
     * 
     * */
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

        this.constants = new TimeValues.Constants();
        this.freshTimeLevels = new TimeValues.FreshTimeLevels();
        setInterval(() => this.timeTheCurrent(), TimeValues.Constants.CANH_GIỜ_TÍNH_THEO_MIÊU_LY_GIÂY);
    }

    timeTheCurrent() {
        this.Today = new Date();

        this.h = this.Today.getHours();
        this.m = this.Today.getMinutes()
        this.s = this.Today.getSeconds();
        this.ms = this.Today.getMilliseconds();

        console.log(`${this.h}:${this.m}:${this.s}:${this.ms}`);
    }

    remainingTimeTillEndOfTheDay(level = this.freshTimeLevels.LevelBig) {

        /***
         * level = 0 --> hours
         * level = 1 --> minutes
         * level = 2 --> seconds
         * level = 3 --> milliseconds
         * level = 4 --> milliseconds+1
         * 
         */

        timeTheCurrent();

        let ret = 0;
        let passedTime = 0;
        switch (level) {
            case this.freshTimeLevels.LevelOne:
                ret = DateValues.Constants.ONE_DAY_IN_MINUTES - (this.h * TimeValues.Constants.ONE_HOUR_IN_MINUTES + this.m);
                break;

            case this.freshTimeLevels.LevelTwo:
                passedTime = this.h * TimeValues.Constants.ONE_HOUR_IN_MINUTES + this.m * this.constants.WAN_MINUTE_IN_SECONDS + this.s;
                ret = DateValues.Constants.ONE_DAY_IN_SECONDS - passedTime;
                break;

            case this.freshTimeLevels.LevelThree:
                passedTime = this.h*TimeValues.Constants.ONE_HOUR_IN_MINUTES + this.m*this.constants.WAN_MINUTE_IN_SECONDS + this.s*this.constants.WAN_SECOND_IN_MILLISECONDS;
                ret = DateValues.Constants.ONE_DAY_IN_MILLISECONDS - passedTime;
                break;

            case this.freshTimeLevels.LevelFour:
                passedTime = this.h*TimeValues.Constants.ONE_HOUR_IN_MINUTES + this.m*this.constants.WAN_MINUTE_IN_SECONDS + this.s*this.constants.WAN_SECOND_IN_MILLISECONDS;
                ret = DateValues.Constants.ONE_DAY_IN_MILLISECONDS - (passedTime + 1);
                break;

            default: // this.freshTimeLevels.LevelBig
                ret = this.constants.WAN_DAY_IN_HOURS - this.h;
                break;
        }

        return ret;
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
        let ret = '';
        
        if (tmp >= 0) { 
            let hh = String(tmp % 24).padStart(2, '0');
            let mm = String(this.m).padStart(2, '0');
            let ss = String(this.s).padStart(2, '0');
            
            ret = `${hh}:${mm}` + (bSecond ? `:${ss}` : '');
        }
        
        return ret;
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

    updateTimeWithIntervalOneSecond(callback) { // for time value; in HH:MM:SS
        let fractionOfASecond = ((new Date()).getMilliseconds()) % TimeValues.Constants.ONE_SECOND_IN_MILLISECONDS;
        let duration = TimeValues.Constants.ONE_SECOND_IN_MILLISECONDS - fractionOfASecond; // will be elapsed duration in milliseconds
        this.callback = callback;
        
        if (this.idcb) 
            clearInterval(this.idcb);

        setTimeout(() => { 
            this.idcb = setInterval(() => this.increaseSecond(), TimeValues.Constants.ONE_SECOND_IN_MILLISECONDS);
            this.increaseSecond();
        }, duration);
    }

    updateTimeWithIntervalOneMinute(callback) { // for time value; in HH:MM
        
        /*** [; nr] consider to implement using milliseconds instead  */ 
        /// --> done

        const Today = new Date();
        const PassingSeconds = Today.getSeconds(); // passed seconds of the current minute
        const PassingMilliseconds = Today.getMilliseconds(); // passing milliseconds of the current second

        // elapsed time to be used in setTimeout
        const OneMinute = this.constants.WAN_MINUTE_IN_MILLISECONDS;
        const OneThousand = this.constants.WAN_SECOND_IN_MILLISECONDS;
        const RemainingOfAMinuteInMilliseconds = OneMinute - (PassingSeconds * OneThousand + PassingMilliseconds); 
        
        console.log(RemainingOfAMinuteInMilliseconds);
        
        this.callback = callback;
        if (this.idcb)
            clearInterval(this.idcb);

        setTimeout(() => {
            this.s = 0;
            this.idcb = setInterval(() => this.increaseMinute(), this.constants.WAN_MINUTE_IN_MILLISECONDS);
            this.increaseMinute(); // doesn't cost much
        }, RemainingOfAMinuteInMilliseconds);
    }
}

TimeValues.Constants = class {
    // static WAN_SECOND_IN_MILLISECONDS = 1000;
    // static CANH_GIỜ_TÍNH_THEO_MIÊU_LY_GIÂY = 7200000; // two hours, 1_CANH_GIỜ
    // static WAN_MINUTE_IN_SECONDS = 60;
    // static WAN_MINUTE_IN_MILLISECONDS = 60000;

    #oneSecondInMilliseconds = 1000;
    #oneMinuteInMilliseconds = 60000;
    #oneDayInMilliseconds = 86400000;
    #oneMinuteInSeconds = 60;


    get WAN_SECOND_IN_MILLISECONDS() {
        return this.#oneSecondInMilliseconds;
    }

    static get ONE_SECOND_IN_MILLISECONDS() {
        return 1000;
    }

    static get CANH_GIỜ_TÍNH_THEO_MIÊU_LY_GIÂY() {
        return 7200000;
    }

    get WAN_MINUTE_IN_SECONDS() {
        return this.#oneMinuteInSeconds;
    }

    get WAN_MINUTE_IN_MILLISECONDS() {
        return this.#oneMinuteInMilliseconds;
    }

    static get ONE_MINUTE_IN_MILLISECONDS() {
        return 60000;
    }

    get WAN_DAY_IN_MILLISECONDS() {
        return this.#oneDayInMilliseconds;
    }

    static get ONE_HOUR_IN_MINUTES() {
        return 60;
    }
}

// Object.freeze(TimeValues.Constants);

TimeValues.FreshTimeLevels = class {

    #levelBig = 0;
    #levelOne = 1;
    #levelTwo = 2;
    #levelThree = 3;
    #levelFour = 4;

    get LevelBig() {
        return this.#levelBig;
    }

    get LevelOne() {
        return this.#levelOne;
    }

    get LevelTwo() {
        return this.#levelTwo;
    }

    get LevelThree() {
        return this.#levelThree;
    }

    get LevelFour() {
        return this.#levelFour;

    }
}


/***
 *   [; nr] write code 4 JS class DateValues to use in Elte Calendar
 *
 *
 */
class DateValues {
    static Hose = 11;

    constructor(updateGUIWebCalendar = null) {
        
        timeTheDay();
        this.callback = updateGUIWebCalendar;
        
        this.dayCountInMonths = [
            31, 30, // Athen Duo
            31, 30, 31, 31, // 
            30, 31, 30, 31, 31, 28 // <-- if it's leap year; need to add 1 in case of Hose
        ];

        this.isLeapYear = this.isLeapYear();
        this.wk = this.getCurrentWeekNumber();
        

        /*** 
         * when an instance of this class is created it will know when the current day ends
         * when the current day comes to finish it should update date values to the next day
         * --> use class TimeValues to keep track of time when it's been initialized;
         *          'N' when current day completes
         * 
         */
        this.timeVal = new TimeValues();
        let duration = timeVal.remainingTimeTillEndOfTheDay(this.timeVal.freshTimeLevels.LevelThree);
        this.constants = new DateValues.Constants();

        setTimeout(() => {
            setInterval(() => this.timeTheDay(), this.timeVal.WAN_DAY_IN_MILLISECONDS);
            this.timeTheDay();
        }, duration);

    }

    get DayCountInMonths() {
        if (this.isLeapYear == true) 
            this.dayCountInMonths[DateValues.Hose]++;
        
        return this.dayCountInMonths;
    }

    timeTheDay() {
        this.Today = new Date();

        this.dy = this.Today.getDay();
        this.dt = this.Today.getDate();
        this.mt = this.Today.getMonth();
        this.yr = this.Today.getFullYear();

        if (this.callback)
            this.callback(); // to render the calendar when the day's values change
    }

    
    getCurrentWeekNumber() {

        /***
         * sole-date, soleDate, sodate, 1
         * moth-date, mothDate, modate, SEPT 1
         * { datE, ful-date }, SEPT 1 current_year+6
         * 
         *  
         */
        
        // let datE = '';
        // --> const DatE = '';  

        const Today = this.Today;
        const HereYear = Today.getFullYear();
        const HereMonth = convertToElteMonth(Today.getMonth());
        const FirstDateOfHereYear = new Date(HereYear, 1, 1);
        const FirstDateIndex = toTuesdayFirst(FirstDateOfHereYear.getDay()); // position of first day of the year in the first week; in 0..6
        
        const HereIndex = toTuesdayFirst(Today.getDay()); // index of the day in its week; in 0..6
        const HereSoleDate = Today.getDate(); // only the date's number in its month; starts from 1
        let weekNo = 1; // the first week of the year; at most fifty three weeks in a year
        let monthCount = 0; // Athen
        let dayCount = 1; // the first day of the year
        const Distance = Math.abs(FirstDateIndex - HereIndex);

        do {
            if (monthCount == HereMonth) {
                if (Distance == Math.abs(dayCount - HereSoleDate))
                    return weekNo;
                
                while (dayCount <= this.DayCountInMonths[monthCount]) { /*** [; nr] revise to consider the case of leap year */ // <-- done
                    dayCount += 7; // seven days in a week
                    ++weekNo;
                    
                    if (Distance == Math.abs(dayCount - HereSoleDate))
                        return weekNo;
                }
            }

            while (dayCount <= this.DayCountInMonths[monthCount]) {
                dayCount += 7; // seven days in a week
                ++weekNo;
                
                if (Distance == Math.abs(dayCount - HereSoleDate))
                    return weekNo;
            }
            
            // here; reach the next month
            // 
            dayCount -= this.DayCountInMonths[monthCount];
            ++monthCount;
        } while (monthCount <= HereMonth);

        return 0;
    }

    isLeapYear() {

        /*** 
         * [mnemonic]
         * year 1100 isn't a leap one
         * 
         * */ 

        return ((this.yr % 4 == 0 && this.yr % 100 !== 0) || (this.yr % 400 == 0));
    }
}


DateValues.Constants = class {
    #oneDayInHours = 24;

    get WAN_DAY_IN_HOURS() {
        return this.#oneDayInHours;
    }

    static get ONE_DAY_IN_HOURS() {
        return 24;
    }

    static get ONE_DAY_IN_MINUTES() {
        return 1440;
    }

    static get ONE_DAY_IN_SECONDS() {
        return 86400;
    }

    static get ONE_DAY_IN_MILLISECONDS() {
        return 86400000;
    }
}


function exchange2Animal(birthYear) {
    let tmp = Math.abs(CURRENT_YEAR - birthYear) % 12;
    
    if (birthYear < CURRENT_YEAR) 
        return ANIMAL_NAMES[12 - tmp];
    else
        return ANIMAL_NAMES[tmp];
}





