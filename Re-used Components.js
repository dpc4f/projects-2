const LONG_FORM_SHIFT = 0;
const MID_FORM_SHIFT = 1;
const SHORT_FORM_SHIFT = 2;

const FULL_FORM_DATE = 0;
const MID_FORM_DATE = 1;
const SHORT_FORM_DATE = 2;

const DATE_FULL_FORM = 0;
const DATE_MID_FORM = 1;
const DATE_SHORT_FORM = 2;

const DAYS_IN_A_YEAR = 365.25;
const TODAY = new Date();

const ANIMAL_NAMES = [
    "Mouse / Rat / Capybara / Guinea Pig", "Ox / Bull / Buffalo / Cow",
    "Tiger / Leopard", "Rabbit / Rapoo ð Electric Mouse", "Long Dragon / Ant / Bee / Peacock", "Snake Family / Centipede",
    "Horse / Sea-horse / Sea-dragon", "Goat / Maggot", "Monkey / Ape / Kong",
    "Rooster / Chicken / Hen", "Dodge / Deer / Reindeer / Duck", "Pig / Boar in ð Wilderness"
]; 

function getElteMonth(month, form = FULL_FORM_DATE) {
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
    let elteMonth = getElteMonth(month < 2 ? month + 10 : month - 2, false);
    let elteYear;
    let elteDOB;

    if (month < 2) // month is Jan OR Feb
        year--;
    if (year > DateValues.Constants.CURRENT_YEAR)
        elteYear = '+' + (year - DateValues.Constants.CURRENT_YEAR).toString();
    else if (year < DateValues.Constants.CURRENT_YEAR)
        elteYear = '-' + (DateValues.Constants.CURRENT_YEAR - year).toString();
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
    let elteMonth = !bFromDavid ? getElteMonth(convertToElteMonth(month)) : getElteMonth(month);

    if (bFromDavid == true) 
        year -= 2;
    else if (month < 2) // month is Jan OR Feb
        year--;
    
    if (year > DateValues.Constants.CURRENT_YEAR)
        elteYear = 'current_year+' + (year - DateValues.Constants.CURRENT_YEAR).toString();
    else if (year < DateValues.Constants.CURRENT_YEAR)
        elteYear = 'current_year-' + (DateValues.Constants.CURRENT_YEAR - year).toString();
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


function getWeekNoInTheYear(theDate) {
    let month = theDate.getMonth();
    let soleDate = theDate.getDate();
    let year = theDate.getFullYear();
    let day = theDate.getDay(); 

    return DateValues.getWeekNumber(year, month, soleDate, day);
}

function getDateFullForm(Today, bMonth = false, bDateInMonth = false, bDayInWeek = false, bShiftInADay = false, bWeekNumber = false) {
    let month = Today.getMonth();
    let soleDate = Today.getDate();
    let year = Today.getFullYear();
    let day = Today.getDay();

    let elteMonth = bMonth ? getElteMonth(month < 2 ? month+10 : month-2) : '';
    let elteSoleDate = bDateInMonth ? soleDate : '';
    let elteYear = 'current_year+' + (year - DateValues.Constants.CURRENT_YEAR).toString();
    let dayInWeek = bDayInWeek ? whichDayIsToday((day + 5) % 7) : '';
    let shift = bShiftInADay ? getShiftOfToday() : '';
    let weekNo = getWeekNoInTheYear(Today); //

    let retStr = `${elteMonth} ${elteSoleDate} ${elteYear} ${weekNo} ${dayInWeek} ${shift}`;

    return retStr;
}

function getDateMidForm(Today, bMonth = false, bDateInMonth = false, bDayInWeek = false, bShiftInADay = false, bWeekNumber = false) {
    let month = Today.getMonth();
    let soleDate = Today.getDate();
    let year = Today.getFullYear();
    let day = Today.getDay();

    let elteMonth = bMonth ? getElteMonth(month < 2 ? month+10 : month-2, MID_FORM_DATE) : '';
    let elteSoleDate = bDateInMonth ? soleDate : '';
    let elteYear = 'cur_yea+' + (year - DateValues.Constants.CURRENT_YEAR).toString();
    let dayInWeek = bDayInWeek ? whichDayIsToday((day + 5) % 7, MID_FORM_DATE) : '';
    let shift = bShiftInADay ? getShiftOfToday(MID_FORM_SHIFT) : '';
    let weekNo = getWeekNoInTheYear(Today); //

    let retStr = `${elteMonth} ${elteSoleDate} ${elteYear} ${weekNo} ${dayInWeek} ${shift}`;

    return retStr;
}

function getDateShortForm(Today, bMonth = false, bDateInMonth = false, bDayInWeek = false, bShiftInADay = false, bWeekNumber = false) {
    let month = Today.getMonth();
    let soleDate = Today.getDate();
    let year = Today.getFullYear();
    let day = Today.getDay();

    let elteMonth = bMonth ? getElteMonth(month < 2 ? month+10 : month-2, SHORT_FORM_DATE) : '';
    let elteSoleDate = bDateInMonth ? soleDate : '';
    let elteYear = year == DateValues.Constants.CURRENT_YEAR ? 'O' 
                                : ((bMonth == false ? 'i+' : '+') + (year - DateValues.Constants.CURRENT_YEAR).toString());
    let dayInWeek = bDayInWeek ? whichDayIsToday((day + 5) % 7, SHORT_FORM_DATE) : '';
    let shift = bShiftInADay ? getShiftOfToday(SHORT_FORM_SHIFT) : '';
    let weekNo = getWeekNoInTheYear(Today); //

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

function convertToElteYear(year, month = 12) {
    let d = year - DateValues.Constants.CURRENT_YEAR - (month < 2 ? 1 : 0);
    let c_y_str = DateValues.Constants.CURRENT_YEAR_STRING;
    let str = d>0 ? '+'+d.toString() : d.toString();

    return (d==0 ? c_y_str : c_y_str+str);
}

function revertElteYear(yearStr, addOneYear = false) {
    const match = yearStr.match(/^current_year([+-]\d+)$/);
    
    return DateValues.Constants.CURRENT_YEAR + Number(match?.[1] ?? 0) + (addOneYear ? 1 : 0);
}

function revertElteMonth(monthStr) {
    const idx = getIndexFromElteMonth(monthStr);

    return (idx + 2) % 12;
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

function getDateValuesTimeStamp(formLength = FULL_FORM_DATE, index = 0, today = new Date()) {
    let bMonth = DATE_FORMAT_STRINGS[index][0]; 
    let bDateInMonth = DATE_FORMAT_STRINGS[index][1]; 
    let bDayInWeek = DATE_FORMAT_STRINGS[index][2]; 
    let bShiftInADay = bDayInWeek ? DATE_FORMAT_STRINGS[index][3] : false;
    let bWeekNumber = DATE_FORMAT_STRINGS[index].length > 4 ? DATE_FORMAT_STRINGS[index][4] : false;
    let valuesStr = '';

    switch (formLength) {
        case FULL_FORM_DATE:
            valuesStr = getDateFullForm(today, bMonth, bDateInMonth, bDayInWeek, bShiftInADay, bWeekNumber);
            break;

        case MID_FORM_DATE:
            valuesStr = getDateMidForm(today, bMonth, bDateInMonth, bDayInWeek, bShiftInADay, bWeekNumber);
            break;

        case SHORT_FORM_DATE:
            valuesStr = getDateShortForm(today, bMonth, bDateInMonth, bDayInWeek, bShiftInADay, bWeekNumber);
            break;

        default:
            break;
    }

    return valuesStr.trim();
}

// [; nr] implement using read-only properties <-- done
class TimeConstants {
    /*** 
     * has been moved to a class belongs to TimeValues class 
     * 
     * */
}

class TimeValues {

    /***
     * [; nr] check how many ways to construct a JavaScript class; is there things like ctor overloading .?
     * 
     * 
     */

    #callback = null;

    constructor(updatePlatonTime = null) {

        /***
         * [; nr] re-write this ctor using APIs to query time sever(s) to have precise values
         * 
         * 
         */

        this.Today = new Date();
        
        this.h = this.Today.getHours();
        this.m = this.Today.getMinutes();
        this.s = this.Today.getSeconds();
        this.ms = this.Today.getMilliseconds();
        
        this.#callback = updatePlatonTime;
        this.idcb = null;

        this.constants = new TimeValues.Constants();
        this.freshTimeLevels = new TimeValues.FreshTimeLevels();
        setInterval(() => this.timeTheCurrent(), TimeValues.Constants.CANH_GIỜ_TÍNH_THEO_MIÊU_LY_GIÂY);
    }

    set CallBack(f) {
        this.#callback = f;
    }

    timeTheCurrent() {
        console.log("timeTheCurrent gets called");

        fetch('http://localhost:8080/api/TimeRequester')
            .then(response => response.json())
            .then(dateString => {
                const [datepart, timePart] = dateString.split(" ");
                const [hours, minutes, seconds] = timePart.split(":");

                this.h = parseInt(hours);
                this.m = parseInt(minutes);
                this.s = parseInt(seconds);

                console.log("Response from DLL: " + dateString 
                    + ` ---- ${this.h}:${this.m}:${this.s}:${this.ms}`);

                if (this.#callback)
                    this.#callback(this);
            })
            .catch(error => console.error('Error:', error));       
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

        this.timeTheCurrent();

        let ret = 0;
        let passedTime = 0;
        switch (level) {
            case this.freshTimeLevels.LevelOne:
                ret = DateValues.Constants.ONE_DAY_IN_MINUTES - (this.h * TimeValues.Constants.ONE_HOUR_IN_MINUTES + this.m);
                break;

            case this.freshTimeLevels.LevelTwo:
                passedTime = this.h * TimeValues.Constants.ONE_HOUR_IN_MINUTES 
                                + this.m * this.constants.WAN_MINUTE_IN_SECONDS 
                                + this.s;
                ret = DateValues.Constants.ONE_DAY_IN_SECONDS - passedTime;
                break;

            case this.freshTimeLevels.LevelThree:
                passedTime = this.h * this.constants.WAN_HOUR_IN_MILLISECONDS
                                + this.m * this.constants.WAN_MINUTE_IN_MILLISECONDS 
                                + this.s * TimeValues.Constants.WAN_SECOND_IN_MILLISECONDS
                ret = DateValues.Constants.ONE_DAY_IN_MILLISECONDS - passedTime;

                // console.log('passed hours: ' + this.h);
                // console.log('pass minutes: ' + this.m);
                // console.log('pass seconds: ' + this.s);              
                // console.log('remaining time till end of the day: ' + ret);
                break;

            case this.freshTimeLevels.LevelFour:
                passedTime = this.h*TimeValues.Constants.ONE_HOUR_IN_MINUTES 
                                + this.m*this.constants.WAN_MINUTE_IN_SECONDS 
                                + this.s*TimeValues.Constants.WAN_SECOND_IN_MILLISECONDS;
                ret = DateValues.Constants.ONE_DAY_IN_MILLISECONDS - (passedTime + 10);
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
        
        if (this.#callback) 
            this.#callback(this);
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

        if (this.#callback)
            this.#callback(this);
    }

    updateTimeWithIntervalOneSecond() { // for time value; in HH:MM:SS
        let fractionOfASecond = ((new Date()).getMilliseconds()) % TimeValues.Constants.ONE_SECOND_IN_MILLISECONDS;
        let duration = TimeValues.Constants.ONE_SECOND_IN_MILLISECONDS - fractionOfASecond; // will be elapsed duration in milliseconds
        
        if (this.idcb) 
            clearInterval(this.idcb);

        setTimeout(() => { 
            this.idcb = setInterval(() => this.increaseSecond(), TimeValues.Constants.ONE_SECOND_IN_MILLISECONDS);
            this.increaseSecond();
        }, duration);
    }

    updateTimeWithIntervalOneMinute() { // for time value; in HH:MM
        
        /*** [; nr] consider to implement using milliseconds instead  */ 
        /// --> done

        const Today = new Date();
        const PassingSeconds = Today.getSeconds(); // passed seconds of the current minute
        const PassingMilliseconds = Today.getMilliseconds(); // passing milliseconds of the current second

        // elapsed time to be used in setTimeout
        const OneMinute = this.constants.WAN_MINUTE_IN_MILLISECONDS;
        const OneThousand = TimeValues.Constants.WAN_SECOND_IN_MILLISECONDS;
        const RemainingOfAMinuteInMilliseconds = OneMinute - (PassingSeconds * OneThousand + PassingMilliseconds); 
        
        console.log(RemainingOfAMinuteInMilliseconds);
        
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

    static #oneSecondInMilliseconds = 1000;
    #oneMinuteInMilliseconds = 60000;
    #oneMinuteInSeconds = 60;
    #oneHourInMilliseconds = 3600000; 

    static get WAN_SECOND_IN_MILLISECONDS() {
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

    static get ONE_HOUR_IN_MINUTES() {
        return 60;
    }

    get WAN_HOUR_IN_MILLISECONDS() {
        return this.#oneHourInMilliseconds;
    }
}

// make class' properties constants
Object.freeze(TimeValues.Constants.WAN_SECOND_IN_MILLISECONDS);

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
    
    /** Here Date Values */
    
    /** Set Date Values */

    static Hose = 11;

    static CURRENT_YEAR = 2020;
    static CURRENT_MONTH = 'Cô Độc Mình Ên';
    static CURRENT_DAY = 'Đang Ngồi Thư Viện';

    static #DayCountInMonths = [
        31, 30, // Athen Duo
        31, 30, 31, 31, // 
        30, 31, 30, 31, 31, 
        28 // <-- 29 if it's leap year 4 Hose the Month
    ];

    constructor(callbackUpdateGUI = null, yr = -1, mt = -1, dt = -1, weekOfTheYear = -1) {

        if (yr < -1 || yr == 0) return; // invalid parameters
        
        this.Heredate = null;
        this.callbackUpdateGUI = callbackUpdateGUI;

        if (yr == -1)
            this.timeTheDay(callbackUpdateGUI ? true : false); // use Here Date Values
        else {
            /* use Set Date Values */

            /***
             * [; nr] code a function check validity of parameters'
             * 
             */

            this.syr = yr; // yr > -1

            if (mt > -1) 
                this.smt = mt;
            else
                this.smt = 0;
            
            if (dt > -1) 
                this.sdt = dt;
            else
                this.sdt = 1; 

            this.useSetValues();
                   
            this.leapYear = this.isLeapYear();
            if (weekOfTheYear > -1) {
                this.swk = weekOfTheYear;

                /**
                 * [; nr] from this.swk calculate current month of the year
                 * 
                 * 
                 */
            }
            else {
                this.swk = DateValues.getWeekNumber(this.syr, this.smt, this.sdt, this.sdy); // <-- modify OR code a new function // <-- new function implemented
            }

            if (this.callbackUpdateGUI) {
                this.callbackUpdateGUI(this); // to render the calendar when the day's values change
                console.log('function callback is called; to render the calendar');
            }
        }
        

        /*** 
         * when an instance of this class is created it will know when the current day ends
         * when the current day comes to finish it should update date values to the next day
         * --> use class TimeValues to keep track of time when it's been initialized;
         *          'N' when current day completes
         * 
         */

        this.timeVal = new TimeValues();
        let duration = this.timeVal.remainingTimeTillEndOfTheDay(this.timeVal.freshTimeLevels.LevelThree);
        this.constants = new DateValues.Constants();

        setTimeout(() => {
            
            setInterval(() => {
                this.timeTheDay(callbackUpdateGUI ? true : false);
            }, this.constants.WAN_DAY_IN_MILLISECONDS); // will be run every day after the first day
            
            this.timeTheDay(callbackUpdateGUI ? true : false); // will be run @the end of the day
        }, duration);

    }

    /***
     * [; nr] code a function to convert back && forth from Gregorian to Elte Calendar date
     * 
     * 
     */ // <-- done in converting Elte values to Gregorian values

    fromElteDate(dateStr) {
        let arr = dateStr.trim().split(/\s+/); 
        let d = parseInt(arr[1]);
        let m = revertElteMonth(arr[0]);

        if (m === -1 || arr.length < 3) {
            console.log('Please use the format "M1 27 current_year+6"');
            return;
        }

        let bAddOneYear = m < 2 ? true : false;
        let y = revertElteYear(arr[2], bAddOneYear);

        this.syr = y;
        this.smt = m;
        this.sdt = d;
        this.useSetValues();
            
        this.leapYear = this.isLeapYear();
        this.swk = DateValues.getWeekNumber(this.syr, this.smt, this.sdt, this.sdy); 

        if (this.callbackUpdateGUI) {
            this.callbackUpdateGUI(this); // to render the calendar when the day's values change
            console.log('function callback is called; to render the calendar');
        }
    }

    static get DayCountInMonths() {
        if (this.leapYear == true) 
            DateValues.#DayCountInMonths[DateValues.Hose] = 29;
        else
            DateValues.#DayCountInMonths[DateValues.Hose] = 28;
        
        return DateValues.#DayCountInMonths;
    }

    set CallBackUpdateGUI(f) {
        this.callbackUpdateGUI = f;
    }

    timeTheDay(bUpdateGUI = false) {
        console.log("timeTheDay gets called");
        let bSuccess = false;

        fetch('http://localhost:8080/api/TimeRequester')
            .then(response => response.json())
            .then(thoiGianString => {
                const [ngayThang, thoiGio] = thoiGianString.split(" ");
                // Fixing a "DD/MM/YYYY" format
                const [day, month, year] = ngayThang.split("/");

                // Rearrange into standard "YYYY-MM-DD"
                this.Heredate = new Date(`${year}-${month}-${day}`);
                bSuccess = true;
                
                this.hdy = this.Heredate.getDay();
                this.hdt = this.Heredate.getDate();
                this.hmt = this.Heredate.getMonth();
                this.hyr = this.getYearNumberOnly(this.Heredate);
                this.useHereValues();

                console.log("Response from DLL: " + thoiGianString);

                this.leapYear = this.isLeapYear();
                this.wk = DateValues.getWeekNumber(this.hyr, this.hmt, this.hdt, this.hdy);

                if (bUpdateGUI == true && this.callbackUpdateGUI) {
                    this.callbackUpdateGUI(this); // to render the calendar when the day's values change
                    console.log('function callback is called; to render the calendar');
                }
            })
            .catch(error => console.log('Error:', error));

        if (bSuccess == true) 
            return;

        this.Heredate = new Date();
        
        this.hdy = this.Heredate.getDay();
        this.hdt = this.Heredate.getDate();
        this.hmt = this.Heredate.getMonth();
        this.hyr = this.getYearNumberOnly(this.Heredate);
        this.useHereValues();
        this.leapYear = this.isLeapYear();
        this.wk = DateValues.getWeekNumber(this.hyr, this.hmt, this.hdt, this.hdy);
    }
    
    getDuration4SwitchingDateForms() {
        // divide to have time slots equally
        return Math.floor(this.constants.WAN_DAY_IN_HOURS 
            * this.timeVal.constants.WAN_HOUR_IN_MILLISECONDS 
            / DATE_FORMAT_STRINGS.length);
    } // <-- a red leopard function <3

    getMonth() {
        return this.mt;
    }

    getElteMonth() {
        
        /*** 
         * [; nr] return the Elte Month
         * 
         * 
         * */

    }

    getDay() {
        return this.dy;
    }

    getDateOfTheMonth() {
        return this.dt; // day of the month
    }

    getWeekFall() {
        return whichDayIsToday(this.dy);
    }

    getYear() {
        return this.yr;
    }

    // to correct the name of the get year function
    getYearNumberOnly(date = null) {
        if (date && date instanceof Date) 
            return date.getFullYear(); // <-- return year number only

        return -1;
    }

    static getWeekNumberWithProvidedParameters(Distance, Month, SoleDate) {
        let weekNo = 1; // the first week of the year; at most fifty three weeks in a year
        let monthCount = 0; // Athen
        let dayCount = 1; // the first day of the year

        while (monthCount < Month) {
            while (dayCount <= DateValues.DayCountInMonths[monthCount]) {
                dayCount += 7; // seven days in a week
                ++weekNo;
            }
            
            // here; reach the next month
            // 
            dayCount -= DateValues.DayCountInMonths[monthCount];
            ++monthCount;
        }

        /*** monthCount == Month */ 
        if (Distance == Math.abs(dayCount - SoleDate))
            return weekNo;
        else {
            while (dayCount <= DateValues.DayCountInMonths[monthCount]) { 
                /*** [; nr] revise to consider the case of leap year */ // <-- done
                dayCount += 7; // seven days in a week
                ++weekNo;
                
                if (Distance == Math.abs(dayCount - SoleDate))
                    break;
            }
        }

        return weekNo;
    }
    
    static getWeekNumber(year, month, soleDate, day) {

        /***
         * [; nr] convert this method into the static method of class
         * 
         * 
         */ // --> done

        const TheYear = year; 
        const FirstDateOfTheYear = new Date(TheYear, 1, 1);
        const FirstDateIndex = toTuesdayFirst(FirstDateOfTheYear.getDay()); // the year's first day's index in the first week; 0..6
        
        const TheMonth = convertToElteMonth(month);
        const TheDayIndex = toTuesdayFirst(day); // index of the day in its week; in 0..6
        const TheSoleDate = soleDate; // only the date's number in its month; starts from 1
        const Distance = Math.abs(FirstDateIndex - TheDayIndex);

        return DateValues.getWeekNumberWithProvidedParameters(Distance, TheMonth, TheSoleDate);
    }

    useSetValues() {
        this.yr = this.syr;
        this.mt = this.smt;
        this.dt = this.sdt;
        this.dy = (new Date(this.syr, this.smt, this.sdt)).getDay(); // index of the day in its week; 0..6
    }

    useHereValues() {
        this.yr = this.hyr;
        this.mt = this.hmt;
        this.dt = this.hdt;
        this.dy = this.hdy;
    }

    isLeapYear() {

        /*** 
         * [mnemonic]
         * year 1100 isn't a leap one
         * 
         * */ 

        return ((this.yr % 4 == 0 && this.yr % 100 !== 0) || (this.yr % 400 == 0));
    }

    isHereDay(date, month, year) {
        return (date === this.hdt && month === this.hmt && year === this.hyr);
    }

    isSetDay(date, month, year) {
        return (date === this.sdt && month === this.smt && year === this.syr);
    }
}

// make class' properties constants
Object.freeze(DateValues.Hose);
Object.freeze(DateValues.CURRENT_YEAR);
Object.freeze(DateValues.CURRENT_MONTH);
Object.freeze(DateValues.CURRENT_DAY);


DateValues.Constants = class {
    #oneDayInHours = 24;
    #oneDayInMilliseconds = 86400000;
    static #Thời_Khắc_Hiện_Tại_Là_Năm_2020 = 2020; /** CURRENT_YEAR */

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

    get WAN_DAY_IN_MILLISECONDS() {
        return this.#oneDayInMilliseconds;
    }

    // static get CURRENT_YEAR() {
    //     return 2020;
    // }

    static get CURRENT_YEAR() {
        return DateValues.Constants.#Thời_Khắc_Hiện_Tại_Là_Năm_2020;
    }

    static get CURRENT_YEAR_STRING() {
        return 'current_year';
    }
}

function exchange2AnimalByLunar(birthYear) {
    let tmp = Math.abs(DateValues.Constants.CURRENT_YEAR - birthYear) % 12;
    
    if (birthYear < DateValues.Constants.CURRENT_YEAR)
        return ANIMAL_NAMES[12 - tmp];
    else
        return ANIMAL_NAMES[tmp];
}





