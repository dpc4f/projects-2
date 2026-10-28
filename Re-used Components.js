const LONG_FORM_SHIFT = 0;
const MID_FORM_SHIFT = 1;
const SHORT_FORM_SHIFT = 2;

const DATE_FULL_FORM = 0;
const DATE_MID_FORM = 1;
const DATE_SHORT_FORM = 2;

const DAYS_IN_A_YEAR = 365.25;

const TIME_FORMAT_STRINGS = [false, true]; // hh:mm; only
const ZERO = 0;


/***
 * [; nr] replace Today by Hereday 'N' etc.
 * 
 * 
 */ // --> done
 

// [; nr] implement using read-only properties 
// --> done

// leave it here 4 historical purpose
// class TimeConstants {
    /*** 
     * has been moved to a class belongs to TimeValues class 
     * 
     * */
// }

class TimeValues {

    /***
     * [; nr] check how many ways to construct a JavaScript class; are there things like ctor overloading .?
     * 
     * 
     */ // --> done

    #callback = null;
    #h;
    #m;
    #s;
    #ms;
    #freshTimeLevels;

    constructor(updatePlatonTime = null) {

        /***
         * [; nr] re-write this ctor using APIs to query time sever(s) to have up-to-date values
         * 
         * 
         */ // --> done

        this.timeTheCurrent();
        
        this.#callback = updatePlatonTime;
        this.idcb = null;

        this.#freshTimeLevels = new TimeValues.Constants.FreshTimeLevels();
        setInterval(() => this.timeTheCurrent(), TimeValues.Constants.CANH_GIỜ_TÍNH_THEO_MIÊU_LY_GIÂY);
    }

    set CallBack(f) {
        this.#callback = f;
    }


    async timeTheCurrent() {

        /***
        * [; nr] change this method to use async / await
        * 
        */ // --> done
        console.log("timeTheCurrent gets called");
        let bSuccess = false;

        try {
            const response = await fetch('http://localhost:8080/api/TimeRequester');
            const strJsonThoiGian = await response.json(); // ngay_thang + gio_phut

            const [, gioPhut] = strJsonThoiGian.split(" ");
            const [hours, minutes, seconds] = gioPhut.split(":");

            this.#h = parseInt(hours);
            this.#m = parseInt(minutes);
            this.#s = parseInt(seconds);
            bSuccess = true;

            console.log("[timeTheCurrent] Response from DLL: " + gioPhut);

        } catch (error) {

            // This catches the "Failed to fetch" error gracefully
            console.error('Network error or CORS issue occurred:', error);
            console.log('Use the time queried from Windows OS as a replacement ...');

        } finally {

            /***
             * [; nr] complete this method so that in case of error(s) contacting time server; use time from the OS
             * 
             * 
             */ // --> done

            if (bSuccess == false) this.useDefaultValues();    
            if (this.#callback) this.#callback(this);

        }
    }

    remainingTimeTillEndOfTheDay(level = TimeValues.Constants.FreshTimeLevels.LevelBig) {

        /***
         * 
         * level = 0 --> hours
         * level = 1 --> minutes
         * level = 2 --> seconds
         * level = 3 --> milliseconds
         * level = 4 --> milliseconds + 1
         * 
         * 
         */

        this.timeTheCurrent();

        let ret = 0;
        let passedTime = 0;
        switch (level) {
            case TimeValues.Constants.FreshTimeLevels.LevelOne:
                ret = DateValues.Constants.ONE_DAY_IN_MINUTES - (this.#h * TimeValues.Constants.ONE_HOUR_IN_MINUTES + this.#m);
                break;

            case TimeValues.Constants.FreshTimeLevels.LevelTwo:
                passedTime = this.#h * TimeValues.Constants.ONE_HOUR_IN_MINUTES 
                                + this.#m * TimeValues.Constants.WAN_MINUTE_IN_SECONDS 
                                + this.#s;
                ret = DateValues.Constants.ONE_DAY_IN_SECONDS - passedTime;
                break;

            case TimeValues.Constants.FreshTimeLevels.LevelThree:
                passedTime = this.#h * TimeValues.Constants.WAN_HOUR_IN_MILLISECONDS
                                + this.#m * TimeValues.Constants.WAN_MINUTE_IN_MILLISECONDS 
                                + this.#s * TimeValues.Constants.WAN_SECOND_IN_MILLISECONDS;
                ret = DateValues.Constants.ONE_DAY_IN_MILLISECONDS - passedTime;

                // console.log('passed hours: ' + this.h);
                // console.log('pass minutes: ' + this.m);
                // console.log('pass seconds: ' + this.s);              
                // console.log('remaining time till end of the day: ' + ret);
                break;

            case TimeValues.Constants.FreshTimeLevels.LevelFour:
                passedTime = this.#h * TimeValues.Constants.ONE_HOUR_IN_MINUTES 
                                + this.#m * TimeValues.Constants.WAN_MINUTE_IN_SECONDS 
                                + this.#s * TimeValues.Constants.WAN_SECOND_IN_MILLISECONDS;
                ret = DateValues.Constants.ONE_DAY_IN_MILLISECONDS - (passedTime + 10);
                break;

            default: // LevelBig
                ret = TimeValues.Constants.WAN_DAY_IN_HOURS - this.#h;
                break;
        }

        return ret;
    }

    addHours(hours) {
        if (hours <= 0) return;

        this.#h = (this.#h + hours) % 24;
    }

    subtractInRangeHours(hours) {
        if (hours <= 0 || hours > this.#h) return;

        this.h -= hours;
    }

    formatTime(additionalHours = 0, bSecond = false) {
        let tmp = this.#h + additionalHours;
        let ret = '';
        
        if (tmp >= 0) { 
            let hh = String(tmp % 24).padStart(2, '0');
            let mm = String(this.#m).padStart(2, '0');
            let ss = String(this.#s).padStart(2, '0');
            
            ret = `${hh}:${mm}` + (bSecond ? `:${ss}` : '');
        }
        
        return ret;
    }

    increaseSecond() {
        ++this.#s;
        if (this.#s == 60) {
            this.#s = 0;
            ++this.#m;
            if (this.#m == 60) {
                this.#m = 0;
                ++this.#h;
                if (this.#h == 24) {
                    this.#h = 0;
                    this.Hereday = new Date();
                }
            }
        }
        
        if (this.#callback) this.#callback(this);
    }

    increaseMinute() {
        ++this.#m;
        if (this.#m == 60) {
            this.#m = 0;
            ++this.#h;
            if (this.#h == 24) {
                this.#h = 0;
                this.Hereday = new Date();
            }
        }

        if (this.#callback) this.#callback(this);
    }

    updateTimeWithIntervalOneSecond() { // for time value; in HH:MM:SS
        let fractionOfASecond = ((new Date()).getMilliseconds()) % TimeValues.Constants.ONE_SECOND_IN_MILLISECONDS;
        let duration = TimeValues.Constants.ONE_SECOND_IN_MILLISECONDS - fractionOfASecond; // will be elapsed duration in milliseconds
        
        if (this.idcb) clearInterval(this.idcb);

        setTimeout(() => { 
            this.idcb = setInterval(() => this.increaseSecond(), TimeValues.Constants.ONE_SECOND_IN_MILLISECONDS);
            this.increaseSecond();
        }, duration);
    }

    updateTimeWithIntervalOneMinute() { // for time value; in HH:MM
        
        /*** [; nr] consider to implement using milliseconds instead  */ 
        /// --> done

        /***
         * [; nr] fix a bug which can be in Hereday.getSeconds()
         * 
         * 
         */ // --> done [the bug's not here; it is handled by, focus event handler of the calling page's]

        const Hereday = new Date();
        const PassingSeconds = Hereday.getSeconds(); // passed seconds of the current minute
        const PassingMilliseconds = Hereday.getMilliseconds(); // passing milliseconds of the current second

        // elapsed time to be used in setTimeout
        const OneMinute = TimeValues.Constants.WAN_MINUTE_IN_MILLISECONDS;
        const OneThousand = TimeValues.Constants.WAN_SECOND_IN_MILLISECONDS;
        const RemainingOfHereMinuteInMilliseconds = OneMinute - (PassingSeconds * OneThousand + PassingMilliseconds); 
        
        console.log(RemainingOfHereMinuteInMilliseconds);
        
        if (this.idcb) clearInterval(this.idcb);

        setTimeout(() => {
            this.#s = 0;
            this.idcb = setInterval(() => this.increaseMinute(), TimeValues.Constants.WAN_MINUTE_IN_MILLISECONDS);
            this.increaseMinute(); // doesn't cost much
        }, RemainingOfHereMinuteInMilliseconds + 12); // 12 milli-seconds added
    }

    clearTimerId() {
        this.idcb ? clearInterval(this.idcb) : ZERO;
    }

    useDefaultValues() {
        this.Hereday = new Date();
        
        this.#h = this.Hereday.getHours();
        this.#m = this.Hereday.getMinutes();
        this.#s = this.Hereday.getSeconds();
        this.#ms = this.Hereday.getMilliseconds();
    }

}

TimeValues.Constants = class {

    // static WAN_SECOND_IN_MILLISECONDS = 1000;
    // static CANH_GIỜ_TÍNH_THEO_MIÊU_LY_GIÂY = 7200000; // two hours, 1_CANH_GIỜ
    // static WAN_MINUTE_IN_SECONDS = 60;
    // static WAN_MINUTE_IN_MILLISECONDS = 60000;

    static #oneSecondInMilliseconds = 1000;
    static #oneMinuteInMilliseconds = 60000;
    static #oneMinuteInSeconds = 60;
    static #oneHourInMilliseconds = 3600000; 

    static get WAN_SECOND_IN_MILLISECONDS() {
        return TimeValues.Constants.#oneSecondInMilliseconds;
    }

    static get ONE_SECOND_IN_MILLISECONDS() {
        return 1000;
    }

    static get CANH_GIỜ_TÍNH_THEO_MIÊU_LY_GIÂY() {
        return 7200000;
    }

    static get WAN_MINUTE_IN_SECONDS() {
        return TimeValues.Constants.#oneMinuteInSeconds;
    }

    static get WAN_MINUTE_IN_MILLISECONDS() {
        return TimeValues.Constants.#oneMinuteInMilliseconds;
    }

    static get ONE_MINUTE_IN_MILLISECONDS() {
        return 60000;
    }

    static get ONE_HOUR_IN_MINUTES() {
        return 60;
    }

    static get WAN_HOUR_IN_MILLISECONDS() {
        return TimeValues.Constants.#oneHourInMilliseconds;
    }

}

TimeValues.Constants.FreshTimeLevels = class {

    static #levelBig = 0;
    static #levelOne = 1;
    static #levelTwo = 2;
    static #levelThree = 3;
    static #levelFour = 4;

    static get LevelBig() {
        return TimeValues.Constants.FreshTimeLevels.#levelBig;
    }

    static get LevelOne() {
        return TimeValues.Constants.FreshTimeLevels.#levelOne;
    }

    static get LevelTwo() {
        return TimeValues.Constants.FreshTimeLevels.#levelTwo;
    }

    static get LevelThree() {
        return TimeValues.Constants.FreshTimeLevels.#levelThree;
    }

    static get LevelFour() {
        return TimeValues.Constants.FreshTimeLevels.#levelFour;
    }

}



/***
 *   [; nr] write code 4 JS class DateValues to use in Elte Calendar
 *
 * this class will hold values of Gregorian timestamp 'N' they are converted to Elte equivalances when needed
 * 
 * 
 *
 */ // --> done

class DateValues {
    
    /** Here Date Values */
    
    /** Set Date Values */

    static HOSE = 11;

    #digitalYear; // elte year is a string; while Gregorian year is a number && in Computers it's represented by digit(s)
    #mtIdx; // represent month index in gregorian calendar
    #dtIdx; // sole-date index of the gregorian month
    #dyIdx; // day index in the week
    #wkNo; // week number in the elte year

    #hereDigiYear; // here digital gregorian year
    #hmtIdx; // here month index
    #hdtIdx; // here sole-date index
    #hdyIdx; // here day index
    #hwkNo; // here week number

    #setDigiYear; //
    #smtIdx; //
    #sdtIdx;
    #sdyIdx;
    #swkNo;

    static CURRENT_YEAR = 2020;
    static CURRENT_MONTH = 'Cô Độc Mình Ên';
    static CURRENT_DAY = 'Đang Ngồi Thư Viện';

    static USE_HERE_DAY = 0;
    static #LeapYear = false;

    static #DayCountInElteMonths = [
        31, 30, // Athen Duo
        31, 30, 31, 31, // 
        30, 31, 30, 31, 31, 
        28 // <-- 29 if it's leap year 4 Hose the Month
    ];

    constructor(callbackUpdateGUI = null, yr = DateValues.USE_HERE_DAY, mt = -1, dt = -1) {

        if (yr < 0) return; // invalid parameters
        
        this.Heredate = null;
        this.callbackUpdateGUI = callbackUpdateGUI;

        if (yr == DateValues.USE_HERE_DAY) // == 0
            this.timeTheDay(callbackUpdateGUI ? true : false); // use Here Date Values
        else {
            /* use Set Date Values */

            /***
             * [; nr] code a function to check validity of parameters'
             * 
             */ // --> done

            if (this.isValidGregorian(yr, mt, dt) == false) return;

            this.#setDigiYear = yr; // yr > -1

            if (mt > -1) 
                this.#smtIdx = mt;
            else
                this.#smtIdx = 0;
            
            if (dt > -1) 
                this.#sdtIdx = dt;
            else
                this.#sdtIdx = 1; 
                   
            DateValues.#LeapYear = DateValues.isLeapYear(this.#setDigiYear);
            this.#swkNo = DateValues.getWeekNumber(this.#setDigiYear, 
                            this.#smtIdx, this.#sdtIdx, this.#sdyIdx); // <-- modify OR code a new function 
            // --> new function implemented

            this.useSetValues();
    
            if (this.callbackUpdateGUI) {
                this.callbackUpdateGUI(this); // to render the calendar when the day's values change
                console.log('function callback is called; to render the calendar');
            }
        }

        // when an instance of this class is created it will know when the current day ends
        // when the current day comes to finish it should update date values to the next day
        // --> use class TimeValues to keep track of time when it's been initialized;
        //          'N' when current day completes
        //

        this.timeVal = new TimeValues();
        let duration = this.timeVal.remainingTimeTillEndOfTheDay(TimeValues.Constants.FreshTimeLevels.LevelThree);
        // let duration = 10000; // 10 seconds 4 testing purpose

        setTimeout(() => {

            setInterval(() => {
                this.timeTheDay(callbackUpdateGUI ? true : false);
            }, DateValues.Constants.ONE_DAY_IN_MILLISECONDS); // will be run every day 4b the first day
            
            // this.#firstTimeCalledBySetTimeOut = true;

            /***
             * [; nr] check this again; seems that it's ahead of the time 2 minutes therefore callback won't change the GUI
             * 
             */ // --> done
            this.timeTheDay(callbackUpdateGUI ? true : false); // will be run @the end of the day

        }, duration + 2 * TimeValues.Constants.WAN_MINUTE_IN_SECONDS * TimeValues.Constants.WAN_SECOND_IN_MILLISECONDS); // 2 minutes added

    }

    isValidGregorian(digiYear, monthIdx, soleDateIdx) {
        let ret = true;
        
        if (digiYear < 1) ret = false;
        if (monthIdx < 0 || monthIdx >= DateValues.Constants.NUMBER_OF_MONTHS_IN_A_YEAR) ret = false;
        
        let elteMonthIdx = DateValues.convertToElteMonthIdx(monthIdx);
        
        /***
         * [; nr] refine this code segment
         * 
         * 
         */ // --> done
        
        let dayCount = DateValues.DayCountInElteMonths[elteMonthIdx];
        if (soleDateIdx < 1 || soleDateIdx > dayCount) ret = false;

        return ret;
    }

    /***
     * [; nr] code a function to convert back && forth from Gregorian to Elte Calendar date
     * 
     * input param will use the format, "Magha 14 current_year+6"
     */ // --> done in converting Elte values to Gregorian values

    fromElteDate(elteDate) {
        let arr = elteDate.trim().split(/\s+/); 
        let d = parseInt(arr[1]);
        let m = UnytValues.revertElteMonthIdx(arr[0]);
        let bValidElteDate = !(m === -1 || arr.length < 3);

        if (bValidElteDate == false) return;

        let bAddOneYear = m < 2 ? true : false;
        let y = UnytValues.revertElteYear(arr[2], bAddOneYear);

        // if (isValidGregorian(y, m, d) == false) return;

        this.#setDigiYear = y;
        this.#smtIdx = m;
        this.#sdtIdx = d;
        DateValues.#LeapYear = DateValues.isLeapYear(this.#setDigiYear);
        this.#swkNo = DateValues.getWeekNumber(this.#setDigiYear, this.#smtIdx, this.#sdtIdx, this.#sdyIdx);

        this.useSetValues();

        if (this.callbackUpdateGUI) {
            this.callbackUpdateGUI(this, false); // to render the calendar when the day's values change
            console.log('callbackUpdateGUI() is called; to render the calendar');
        }
    }

    static convertToElteMonthIdx(monthIdx) { // monthIdx = 0..11 <-- valid
        let bInvalid = monthIdx < 0 || monthIdx >= DateValues.Constants.NUMBER_OF_MONTHS_IN_A_YEAR;
        
        if (bInvalid == true) return;
        
        return monthIdx < 2 ? monthIdx + 10 : monthIdx - 2;
    }

    static getElteFromElteMonth(elteMonth) {
        let ret = -1;

        switch (elteMonth) {
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

    
    /***
     * [; nr] consider to revise shifts in a day; decide whether time shitfs will follow VNMese OR working style
     * 
     * 
     */ // --> done [no-op]

    static getShiftOfTheday(longShort = LONG_FORM_SHIFT) {
        const date = new Date();
        const hr = date.getHours();
        const mi = date.getMinutes();
        
        let sf = '';
        if (4 <= hr && hr < 12) {
            switch(longShort) {
                case LONG_FORM_SHIFT:
                    sf = 'iTm'; // in ð morning
                    break;

                case MID_FORM_SHIFT:
                    sf = 'Tm'; // the morning
                    break;

                case SHORT_FORM_SHIFT:
                    sf = 'm'; // morning
                    break;

                default: 
                    break;
            }
        } else if (12 <= hr && hr < 17) {
            switch(longShort) {
                case LONG_FORM_SHIFT:
                    sf = 'iTa'; // afternoon
                    break;

                case MID_FORM_SHIFT:
                    sf = 'Ta';
                    break;

                case SHORT_FORM_SHIFT:
                    sf = 'a';
                    break;

                default: 
                    break;
            }
        } else if ((17 <= hr && hr < 20) || (hr == 20 && mi < 30)) {
            switch(longShort) {
                case LONG_FORM_SHIFT:
                    sf = 'iTe'; // evening
                    break;

                case MID_FORM_SHIFT:
                    sf = 'Te';
                    break;

                case SHORT_FORM_SHIFT:
                    sf = 'e';
                    break;

                default: 
                    break;
            }
        } else if (20 <= hr && hr < 24) {
            switch(longShort) {
                case LONG_FORM_SHIFT:
                    sf = 'iTn'; // night
                    break;

                case MID_FORM_SHIFT:
                    sf = 'Tn';
                    break;

                case SHORT_FORM_SHIFT:
                    sf = 'n';
                    break;

                default: 
                    break;
            } 
        } else {
            switch(longShort) {
                case LONG_FORM_SHIFT:
                    sf = 'aMn'; // 4b mid-night
                    break;

                case MID_FORM_SHIFT:
                    sf = 'Mn';
                    break;

                case SHORT_FORM_SHIFT:
                    sf = '4';
                    break;

                default: 
                    break;
            }
        }
        
        return sf;
    }

    static #getElteMonthThroughElte(elteMonthIndex, form = UnytValues.FULL_FORM_DATE) {
        let ret = '';

        switch (elteMonthIndex) {
            case 0:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Athen' : (form == UnytValues.MID_FORM_DATE ? 'At' : 'a');
                break;

            case 1:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Duo' : (form == UnytValues.MID_FORM_DATE ? 'Du' : 'd');
                break;

            case 2:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Magha' : (form == UnytValues.MID_FORM_DATE ? 'Ma' : 'm');
                break;

            case 3:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Qaru' : (form == UnytValues.MID_FORM_DATE ? 'Qa' : 'q');
                break;

            case 4:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Felle' : (form == UnytValues.MID_FORM_DATE ? 'Fe' : 'f');
                break;

            case 5:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Yune' : (form == UnytValues.MID_FORM_DATE ? 'Yu' : 'y');
                break;

            case 6:
                ret = form == UnytValues.FULL_FORM_DATE ? 'SEPT' : (form == UnytValues.MID_FORM_DATE ? 'SE' : 'S');
                break;

            case 7:
                ret = form == UnytValues.FULL_FORM_DATE ? 'OCT' : (form == UnytValues.MID_FORM_DATE ? 'OC' : 'O');
                break;

            case 8:
                ret = form == UnytValues.FULL_FORM_DATE ? 'NOV' : (form == UnytValues.MID_FORM_DATE ? 'NO' : 'N');
                break;

            case 9:
                ret = form == UnytValues.FULL_FORM_DATE ? 'DEC' : (form == UnytValues.MID_FORM_DATE ? 'DE' : 'D');
                break;

            case 10:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Palm' : (form == UnytValues.MID_FORM_DATE ? 'Pa' : 'p');
                break;

            case 11:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Hose' : (form == UnytValues.MID_FORM_DATE ? 'Ho' : 'h');
                break;

            default:
                break;
        }

        return ret;
    }

    static convertToStandardElteDate(dateStr, bFromDavid = false) { 
        
        /***
         * convert to Elte date w/ Gregorian date provided
         * standard format which is the form, { FULL_FORM_DATE; UnytValues.STANDARD_FORM_OF_DATE_FORMAT_STRINGS }
         * 
         */ 

        let date = null;

        if (dateStr !== '' && dateStr !== undefined && dateStr !== null)
            date = new Date(dateStr);
        else
            date = new Date();

        if (isNaN(date.getTime())) {
            alert("Invalid date format. Please use a format like 'Dec 13 2011'.");
            return;
        }

        let month = date.getMonth();
        let day = date.getDate();
        let year = DateValues.getYearNumberOnly(date);
        
        let elteYear;
        let elteDOB;
        let elteMonth = bFromDavid == false
            ? DateValues.#getElteMonthThroughElte(DateValues.convertToElteMonthIdx(month)) : DateValues.#getElteMonthThroughElte(month);

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


    static getElteMonth(monthIdx, form = UnytValues.FULL_FORM_DATE) { // get Elte month from Gregorian month index
        /***  
         * 
         * { Idx, Index }
         * { idx, index }
         *   
         */
        
        let elteMonthIndex = DateValues.convertToElteMonthIdx(monthIdx);
        
        return DateValues.#getElteMonthThroughElte(elteMonthIndex, form);
    }

    getElteDateWithElteMonthProvided(elteMonth) {
        let elteYear = UnytValues.convertToElteYear(this.#digitalYear, this.#mtIdx);
        
        return elteMonth + ' ' + this.#dtIdx.toString() + ' ' + elteYear;
    }

    static get DayCountInElteMonths() {
        if (DateValues.#LeapYear == true) 
            DateValues.#DayCountInElteMonths[DateValues.HOSE] = 29;
        else
            DateValues.#DayCountInElteMonths[DateValues.HOSE] = 28;
        
        return DateValues.#DayCountInElteMonths;
    }

    set CallBackUpdateGUI(f) {
        this.callbackUpdateGUI = f;
    }

    async timeTheDay(bUpdateGUI = false) {
        console.log("timeTheDay gets called");

        /***
         * [; nr] fix a bug on this fetch() funtion
         * 
         */ // --> done
 
        let bSuccess = false;

        try {

            const response = await fetch('http://localhost:8080/api/TimeRequester')
            const strJsonThoiGian = await response.json();
            const [ngayThang, ,] = strJsonThoiGian.split(" ");
            const [day, month, year] = ngayThang.split("/"); // Fixing a "DD/MM/YYYY" format

            // Rearrange into standard "YYYY-MM-DD"
            this.Heredate = new Date(`${year}-${month}-${day}`);
            this.#hdyIdx = this.Heredate.getDay();
            this.#hdtIdx = this.Heredate.getDate();
            this.#hmtIdx = this.Heredate.getMonth();
            this.#hereDigiYear = DateValues.getYearNumberOnly(this.Heredate);
            bSuccess = true;

            console.log("[timeTheDay] Response from DLL: " + strJsonThoiGian);

            DateValues.#LeapYear = DateValues.isLeapYear(this.#hereDigiYear);
            this.#hwkNo = DateValues.getWeekNumber(this.#hereDigiYear, this.#hmtIdx, this.#hdtIdx, this.#hdyIdx);

            this.useHereValues();
                
        } catch (error) {

            // This catches the "Failed to fetch" error gracefully
            console.error('Network error or CORS issue occurred:', error);
            console.log('Use the day of current_year as a replacement ...');

        } finally {

            if (!this.#hereDigiYear || bSuccess == false)
                this.useDefaultValues();

            if (bUpdateGUI == true && this.callbackUpdateGUI) {
                this.callbackUpdateGUI(this); // to render the calendar when the day's values change
                console.log('function callback is called; to render the calendar');
            }

        }
    }

    getDuration4SwitchingDateForms() {
        // divide to have time slots equally
        return Math.floor(DateValues.Constants.ONE_DAY_IN_HOURS 
            * TimeValues.Constants.WAN_HOUR_IN_MILLISECONDS 
            / DATE_FORMAT_STRINGS.length);
    } // <-- a red leopard function

    get DigitalYear() {
        return this.#digitalYear;
    }

    // set year 
    // --> done
    set DigitalYear(year) {
        this.#digitalYear = year;
    }

    get MonthIndex() {
        return this.#mtIdx;
    }

    set MonthIndex(monthIdx) {
        /*** 
         * do parameter's validation 
         * 
         * */ // --> done

        if (monthIdx < 0 || monthIdx >= DateValues.Constants.NUMBER_OF_MONTHS_IN_A_YEAR) {
            console.log('Invalid month index provided');
            return;
        }
        
        this.#mtIdx = monthIdx;
        this.#dtIdx = 1; // update date to the beginning of the month <-- will revise later <-- done
    }

    get ElteMonthIdx() { // getter to return elte month index
        
        /*** 
         * [; nr] return the Elte Month
         * 
         * 
         * */ // --> done
        
        return DateValues.convertToElteMonthIdx(this.#mtIdx);
    }

    get DayIndex() {
        return this.#dyIdx;
    }

    get WeekFall() {
        return this.whichDayIsTheDay(this.#dyIdx);
    }

    get SoleDateIndex() {
        return this.#dtIdx; // sole-date index in the month
    }

    get WeekNo() {
        return this.#wkNo; // week index in the year
    }

    /*** 
     * to correct the name of the get year function
     * don't accept string as input parameter
     * 
     * */ 
    static getYearNumberOnly(instanceOfDate = null) { // 
        if (instanceOfDate && instanceOfDate instanceof Date) 
            return instanceOfDate.getFullYear(); // <-- return year number only; not the year in full form 

        return -1;
    }

    static getWeekNoWithProvidedParameters(distance, monthIndex, soleDateIndex) {
        let weekNo = 1; // the first week of the year; at most fifty three weeks in a year
        let monthCount = 0; // Athen
        let dayCount = 1; // the first day of the year

        while (monthCount < monthIndex) {
            while (dayCount <= DateValues.DayCountInElteMonths[monthCount]) {
                dayCount += 7; // seven days in a week
                ++weekNo;
            }
            
            // here; reach the next month
            // 
            dayCount -= DateValues.DayCountInElteMonths[monthCount];
            ++monthCount;
        }

        /*** monthCount == Month */ 
        if (distance == Math.abs(dayCount - soleDateIndex))
            return weekNo;
        else {
            while (dayCount <= DateValues.DayCountInElteMonths[monthCount]) { 
                /*** [; nr] revise to consider the case of leap year */ 
                // --> done
                dayCount += 7; // seven days in a week
                ++weekNo;
                
                if (distance == Math.abs(dayCount - soleDateIndex))
                    break;
            }
        }

        return weekNo;
    }

    static toTuesdayFirst(dayIndex) {
        return (dayIndex + 5) % 7;
    }
    
    static getWeekNumber(digitalYear, monthIndex, soleDateIndex, dayIndex) {

        /***
         * [; nr] convert this method into a static method of class'
         * 
         * 
         */ // --> done


         /***
          * [; nr] revise this method
          * 
          */ // --> done

        const TheYear = digitalYear; 
        const FirstDateOfTheYear = new Date(TheYear, 1, 1);
        const FirstDateIndex = DateValues.toTuesdayFirst(FirstDateOfTheYear.getDay()); // the year's first day's index in the first week; 0..6
        
        const TheMonth = DateValues.convertToElteMonthIdx(monthIndex);
        const TheDayIndex = DateValues.toTuesdayFirst(dayIndex); // index of the day in its week; in 0..6
        const TheSoleDate = soleDateIndex; // only the date's number in its month; starts from 1
        const Distance = Math.abs(FirstDateIndex - TheDayIndex);

        return DateValues.getWeekNoWithProvidedParameters(Distance, TheMonth, TheSoleDate);
    }

    whichDayIsTheDay(form = UnytValues.FULL_FORM_DATE) {
        return DateValues.whichDayIsHereday(this.#dyIdx, form);
    }

    static whichDayIsHereday(heredayIndex, form = UnytValues.FULL_FORM_DATE) {
        let ret = '';

        switch (heredayIndex) {
            case 0:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Thaw' : (form == UnytValues.MID_FORM_DATE ? 'th' : 'T');
                break;
            
            case 1:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Wan' : (form == UnytValues.MID_FORM_DATE ? 'wa' : 'W');
                break;

            case 2:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Uth' : (form == UnytValues.MID_FORM_DATE ? 'ut' : 'U');
                break;

            case 3:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Fri' : (form == UnytValues.MID_FORM_DATE ? 'fr' : 'F');
                break;

            case 4:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Sat' : (form == UnytValues.MID_FORM_DATE ? 'sa' : 'S');
                break;

            case 5:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Hie' : (form == UnytValues.MID_FORM_DATE ? 'hi' : 'H');
                break;

            case 6:
                ret = form == UnytValues.FULL_FORM_DATE ? 'Dak' : (form == UnytValues.MID_FORM_DATE ? 'da' : 'D');
                break;

            default:
                break;
        }

        return ret;
    }

    useSetValues() {
        this.#digitalYear = this.#setDigiYear;
        this.#mtIdx = this.#smtIdx;
        this.#dtIdx = this.#sdtIdx;
        this.#dyIdx = (new Date(this.#setDigiYear, this.#smtIdx, this.#sdtIdx)).getDay(); // index of the day in its week; 0..6
        this.#wkNo = this.#swkNo;
    }

    useHereValues() {
        this.#digitalYear = this.#hereDigiYear;
        this.#mtIdx = this.#hmtIdx;
        this.#dtIdx = this.#hdtIdx;
        this.#dyIdx = this.#hdyIdx;
        this.#wkNo = this.#hwkNo;
    }

    useDefaultValues() {
        this.#hdyIdx = 0; // Thaw
        this.#hdtIdx = 1; // first day of the month
        this.#hmtIdx = 2; // March of Gregorian Calendar
        this.#hereDigiYear = DateValues.CURRENT_YEAR;
        DateValues.#LeapYear = true; // luckily 2020 is a leap year :-)
        this.#wkNo = 1;

        this.useHereValues();
    }

    static isLeapYear(year) {

        /*** 
         * [a mnemonic]
         * year 1100 isn't a leap one
         * 
         * */ 

        return ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0));
    }

    isHereDay(dateIndex, monthIndex, digiYear) {
        return (dateIndex === this.#hdtIdx && monthIndex === this.#hmtIdx && digiYear === this.#hereDigiYear);
    }

    isSetDay(date, month, year) {
        return (date === this.#sdtIdx && month === this.#smtIdx && year === this.#setDigiYear);
    }
}

// make class' properties constants
Object.freeze(DateValues.HOSE);
Object.freeze(DateValues.CURRENT_YEAR);
Object.freeze(DateValues.CURRENT_MONTH);
Object.freeze(DateValues.CURRENT_DAY);
Object.freeze(DateValues.USE_HERE_DAY);


DateValues.Constants = class {
    #oneDayInHours = 24;
    #oneDayInMilliseconds = 86400000;
    static #MÃI_MÃI_LÀ_ĐANG_Ở_THỜI_KHẮC_CỦA_NĂM_2020 = 2020; /** CURRENT_YEAR */
    
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

    /*** 
     * being in the year 2020; 4-ever
     * 
     * */
    static get CURRENT_YEAR() { 
        return DateValues.Constants.#MÃI_MÃI_LÀ_ĐANG_Ở_THỜI_KHẮC_CỦA_NĂM_2020;
    }

    static get CURRENT_YEAR_STRING() {
        return 'current_year';
    }

    static NUMBER_OF_MONTHS_IN_A_YEAR = 12;
}

Object.freeze(DateValues.Constants.NUMBER_OF_MONTHS_IN_A_YEAR);



DateValues.Helpers = class {
    
    static getDateFullForm(bMonth = false, bSoleDate = false, bDayIndex = false, bShiftInADay = false, bWeekNo = false, date = new Date()) {
        let month = date.getMonth();
        let soleDate = date.getDate();
        let year = DateValues.getYearNumberOnly(date);
        let day = date.getDay();

        let elteMonth = bMonth ? DateValues.getElteMonth(month) : '';
        let elteSoleDate = bSoleDate ? soleDate : '';
        let elteYear = year == DateValues.Constants.CURRENT_YEAR
                        ? 'current_year' : 'current_year+' + (year - DateValues.Constants.CURRENT_YEAR).toString();
        let dayIndex = bDayIndex ? DateValues.whichDayIsHereday((day + 5) % 7) : '';
        let shift = bShiftInADay ? DateValues.getShiftOfTheday() : '';
        let weekNo = bWeekNo ? DateValues.getWeekNumber(year, month, soleDate, day) : ''; //

        return `${elteMonth} ${elteSoleDate} ${elteYear} ${weekNo} ${dayIndex} ${shift}`;;
    }

    static getDateMidForm(bMonth = false, bSoleDate = false, bDayIndex = false, bShiftInADay = false, bWeekNo = false, date = new Date()) {
        let month = date.getMonth();
        let soleDate = date.getDate();
        let year = DateValues.getYearNumberOnly(date);
        let day = date.getDay();

        let elteMonth = bMonth ? DateValues.getElteMonth(month, UnytValues.MID_FORM_DATE) : '';
        let elteSoleDate = bSoleDate ? soleDate : '';
        let elteYear = year == DateValues.Constants.CURRENT_YEAR
                        ? 'cur_yea' : 'cur_yea+' + (year - DateValues.Constants.CURRENT_YEAR).toString();
        let dayIndex = bDayIndex ? DateValues.whichDayIsHereday((day + 5) % 7, UnytValues.MID_FORM_DATE) : '';
        let shift = bShiftInADay ? DateValues.getShiftOfTheday(MID_FORM_SHIFT) : '';
        let weekNo = bWeekNo ? DateValues.getWeekNumber(year, month, soleDate, day) : ''; //

        return `${elteMonth} ${elteSoleDate} ${elteYear} ${weekNo} ${dayIndex} ${shift}`;
    }

    static getDateShortForm(bMonth = false, bSoleDate = false, bDayIndex = false, bShiftInADay = false, bWeekNo = false, date = new Date()) {
        let month = date.getMonth();
        let soleDate = date.getDate();
        let year = DateValues.getYearNumberOnly(date);
        let day = date.getDay();

        let elteMonth = bMonth ? DateValues.getElteMonth(month, UnytValues.SHORT_FORM_DATE) : '';
        let elteSoleDate = bSoleDate ? soleDate : '';
        let elteYear = year == DateValues.Constants.CURRENT_YEAR 
                        ? 'O' : ((bMonth == false ? 'i+' : '+') + (year - DateValues.Constants.CURRENT_YEAR).toString());
        let dayIndex = bDayIndex ? DateValues.whichDayIsHereday((day + 5) % 7, UnytValues.SHORT_FORM_DATE) : '';
        let shift = bShiftInADay ? DateValues.getShiftOfTheday(SHORT_FORM_SHIFT) : '';
        let weekNo = bWeekNo? DateValues.getWeekNumber(year, month, soleDate, day) : ''; //

        return `${elteMonth} ${elteSoleDate} ${elteYear} ${weekNo} ${dayIndex} ${shift}`;
    }

}

function fullscreenZoom(isZoomFull = true) {
    if (isZoomFull == true) {
        document.documentElement.requestFullscreen()
            .catch((err) => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
    } else {
        document.exitFullscreen();
    }
}

class UnytValues {

    static MONTH_NAMES = [ // original months' name
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    static MONTH_NAMES_TLA = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    
    /***
     * 1 Unyt == 1 leap yr + 3 normal yrs
     * [ 2020, 2021, 2022, 2023 ]; // <-- for example
     * this is a Cula-unit also a Cycle
     * 
     * 
     */


    #years; // == 2024 4, the HereUnyt; the rest will be gotten by addding 1..3 
    #yearCanChi = 'Giáp Thìn';
    static SLOGAN = 'Năm Giáp Thìn Tui Đi Ăn Phở Thìn';


    static DATE_FORMAT_STRINGS = [
        // **month **{ date in month } year **{ week number } **{{ day in week } **{ shift in day }}
        [false, false, false, false], // current_year+6
        [true, false, false, false], // Yune current_year+6
        [true, true, false, false], // Yune 22 current_year+6
        [true, true, true, false, false], // Yune 22 current_year+6 Sat
        [true, true, true, true, false], // Yune 22 current_year+6 Sat iTa 

        [false, false, false, true], // current_year+6 28
        [true, false, false, true], // SEPT current_year+6 28
        [true, true, false, true], // SEPT 1 current_year+6 28
        [true, true, true, false, true], // SEPT 1 current_year+6 28 Thaw
        [true, true, true, true, true] // SEPT 1 current_year+6 28 Thaw iTa 
    ];

    static DATE_FORMAT_COUNT = UnytValues.DATE_FORMAT_STRINGS.length;

    static FULL_FORM_DATE = 0;
    static MID_FORM_DATE = 1;
    static SHORT_FORM_DATE = 2;

    static STANDARD_FORM_OF_DATE_FORMAT_STRINGS = 2;

    
    static getDateValuesTimeStamp(formLength = UnytValues.FULL_FORM_DATE, index = UnytValues.STANDARD_FORM_OF_DATE_FORMAT_STRINGS, date = null) {
        let bMonth = UnytValues.DATE_FORMAT_STRINGS[index][0]; 
        let bDateInMonth = UnytValues.DATE_FORMAT_STRINGS[index][1]; 
        let bDayIndex = UnytValues.DATE_FORMAT_STRINGS[index][2]; 
        let bShiftInADay = bDayIndex ? UnytValues.DATE_FORMAT_STRINGS[index][3] : false;
        let bWeekNumber = UnytValues.DATE_FORMAT_STRINGS[index].length > 4 ? UnytValues.DATE_FORMAT_STRINGS[index][4] : false;
        let valuesStr = '';

        let dateTemp = date == null ? new Date() : date;

        switch (formLength) {
            case UnytValues.FULL_FORM_DATE:
                valuesStr = DateValues.Helpers.getDateFullForm(bMonth, bDateInMonth, bDayIndex, bShiftInADay, bWeekNumber, dateTemp);
                break;

            case UnytValues.MID_FORM_DATE:
                valuesStr = DateValues.Helpers.getDateMidForm(bMonth, bDateInMonth, bDayIndex, bShiftInADay, bWeekNumber, dateTemp);
                break;

            case UnytValues.SHORT_FORM_DATE:
                valuesStr = DateValues.Helpers.getDateShortForm(bMonth, bDateInMonth, bDayIndex, bShiftInADay, bWeekNumber, dateTemp);
                break;

            default:
                break;
        }
    
        return valuesStr.trim();
    }

    static convertToElteYear(year, month = 12) {
        let d = year - DateValues.Constants.CURRENT_YEAR - (month < 2 ? 1 : 0);
        let c_y_str = DateValues.Constants.CURRENT_YEAR_STRING;
        let str = d > 0 ? '+' + d.toString() : d.toString();

        return d == 0 ? c_y_str : c_y_str + str;
    }

    static revertElteYear(yearStr, addOneYear = false) {
        const match = yearStr.match(/^current_year([+-]\d+)$/);
        
        return DateValues.Constants.CURRENT_YEAR + Number(match?.[1] ?? 0) + (addOneYear ? 1 : 0);
    }


    /***
     * [; nr] relocate this method
     * 
     * 
     */ // --> done

    static revertElteMonthYear(elteStr) { // to become Gregorian month 'N' year
        let arr = elteStr.trim().split(/\s+/);
        
        let m = DateValues.getElteFromElteMonth(arr[0]);
        if (m === -1 || arr.length < 3) {
            console.log('Please use the format "M1 27 current_year+6"');
            return;
        }

        let y = UnytValues.revertElteYear(arr[2], m < 2);
        
        return [m, y];
    }

    static convertToElteMonthYear(year, month = DateValues.Constants.NUMBER_OF_MONTHS_IN_A_YEAR) {
        let d = year - DateValues.Constants.CURRENT_YEAR - (month < 2 ? 1 : 0);
        let c_y_str = DateValues.Constants.CURRENT_YEAR_STRING;
        let str = d > 0 ? '+'+d.toString() : d.toString();

        return [DateValues.getElteMonth(month), (d == 0 ? c_y_str : c_y_str+str)];
    }

    get Year() {
        return this.#years;
    }

    Year(incr = 0) {
        let ret = incr >= 0 ? incr < 4 ? this.#years + incr : -1 : -1;
        return ret;
    }

    DaysOfYear(pos = 0) {
        if (pos == 0) return 366; // the first year 
        
        let ret = pos > 0 ? pos < 4 ? 365 : ZERO : ZERO;
        return ret;
    }

    static revertElteMonthIdx(monthStr) {
        const idx = DateValues.getElteFromElteMonth(monthStr);

        return (idx + 2) % 12;
    }
}

Object.freeze(UnytValues.DATE_FORMAT_STRINGS);
Object.freeze(UnytValues.DATE_FORMAT_COUNT);
Object.freeze(UnytValues.FULL_FORM_DATE);
Object.freeze(UnytValues.MID_FORM_DATE);
Object.freeze(UnytValues.SHORT_FORM_DATE);
Object.freeze(UnytValues.MONTH_NAMES);
Object.freeze(UnytValues.MONTH_NAMES_TLA);
Object.freeze(UnytValues.STANDARD_FORM_OF_DATE_FORMAT_STRINGS);
Object.freeze(UnytValues.SLOGAN);



class GroupUnytValues {

    /***
     * 15 Unyts == 1 group of Unyts
     * this is a unit
     * 
     * 1 group of unyts == a round of, 'Can Chi'
     * 
     * 
     * 
     * 2084 <-- Giáp Thìn
     * 
     * 
     * 
     * 
     * 
     */

  


}


class GrandUnytValues {

    /***
     * 1 group of Unyts + 15 yrs == 1 grand Unyt
     * this is a Maha-unit
     * 
     * a grand unyt equivalent to GroupUnyt+
     * 
     * beheaded the first grand-unyt
     * 
     * then the will be considered first animal is, Tuất / Dodge
     * 
     * 2084 + 15 + 75 ==  2174 (Giáp Tuất)
     * 
     * 
     * great vs. grand vs. supreme
     * 
     * 
     * [a formula]
     * great king == grand emperor
     * >>>>
     * King happens first. Emperor appears afterwards.
     * 
     * 
     * supreme is about height of a { person / thing OR vision }'s
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     */

    static YEAR_COUNT = 75; // 15 * 4 + 15



}

Object.freeze(GrandUnytValues.YEAR_COUNT);




class Life {

    /***
     * 1 GrandUnyt+ == 1 grand unyt + 5 years == 1 life
     * Life == GroupUnyt++
     * 
     * người ta theo lẽ thường tính dư chứ chẳng ai tính thiếu
     * may guá có trừ hao <-- tính dư
     * cmnr chỉ thiếu có chút xíu <-- tính thiếu
     * --> do đó sử dụng dấu + chứ ko dùng dấu -
     * hahah ...
     * 
     * 
     *  em ơi có bao nhiêu
     *  60 năm cuộc đời
     *  --> [6 --> 8] 60, 80
     * 
     * 7 : 8 = .875
     * 
     * [4 ~ 6]
     * Alan Turing [West] <-- { 4 }567
     * Justin Kim [East] <-- 5{ 6 }78
     * 
     * 
     * 
     * 
     * 
     * 
     */

    static #NUMBER_OF_YEARS = 80;

    static LifeSpan() {
        // each 100 years LifeSpan reduces by 1
        let digiYear = DateValues.getYearNumberOnly(new Date());

        return Life.#NUMBER_OF_YEARS - Math.floor((digiYear - DateValues.CURRENT_YEAR) / 100);
    }

}



const GroupUnytPlusPlus = Life; // <-- need-less going back to C / C++


class World {
    
    /***
     * here; using character x to do multiplication due to comments using character *
     * 
     * 300 lives == 1 world
     * 
     * 
     * 1000 thế giới rung động --> 300000 the number
     * --> a BUDDHA has 3000 lives ~ 3 a tăng kỳ (3 tháng)
     * --> { 1 a tăng kỳ, 1000 lives } ~ 1 tháng
     * --> 300 lives ~ .33 tháng ~ .33 x 30 == 9.9 ngày
     * 
     * 
     * --> a Buddha has, { 300 lives ~ a world }
     * 
     * 1 Buddha life == 500 { arahant, buddha }
     * 
     * 1 Big BUDDHA, 1250 x 300 == 375000 
     * --> 1 Shang-ha headed by a Big BUDDHA will have 1250 Buddha (A-la-hán Ứng Cúng tất cả là Bậc Lậu tận)
     * 
     * [7 x 1.30 == 9.1]
     * 9.9 / 1.25 > 7
     * 
     * 
     * 
     * Women can't accomplish best possible places of a human; i.e { Chanh Dang Giac Phat; Chuyen Luan Thanh Vuong; Ma Vuong }
     * 
     * 
     * 
     * BIG BUDDHA who is BUDDHA Gotama > Big BUDDHA that there are only 8 people of all time
     * 
     * 
     * 
     * 
     * 
     * 
     * the World has been established .! :-)
     * >>>>
     * the World is world of a Big BUDDHA's
     * therefore no-need to read the sutta, 'Thế Giới Thành Tựu'
     * 
     * 
     * 
     * 
     * 
     * a friend is a known person 4, seven days (a week)
     * closed friend is a helpful one 4, twelve days
     * half a month OR one month we call him a relative
     * going further on long roads that's TA ð Tamer of Animals'
     * now TA can drop Kàlakkani if TA want to
     * -- [buddha sutta]
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     */
}


class DoubleIteration {
    /***
     * 2 x Iteration 
     * 
     * Iteration == 1 Cula-unit (UnytValues)
     * 
     * 
     * 
     * 
     * 
     * 
     */



}

/***
 * 
 * [; nr] draw an image 4, fantastic VoCuc 'N' other time-frame iterations; in HTML / JavaScript of course
 * --> can be represented 4b clicking a button on the application, 'Elte Calendar w/ Platon Time'
 * --> the time length will be >10k years
 * 
 * 
 */ // --> done [no-op]


class VoCuc { // Vô Cực

    /***
     * 3 x DoubleIteration
     * 
     * [sia] 23 && !32
     * 
     * 
     * 
     * 
     * 
     * 
     */

    static NĂM_ĐẦU_TIÊN_CỦA_VÔ_CỰC_ĐẦU_TIÊN = DateValues.CURRENT_YEAR + 6; // 2026
    static THE_FIRST_CANCHI_YEAR_OF_FIRST_VOCUC = 'Bính Ngọ';

    #year; // first year of the VoCuc

    constructor(nCount = 0) { // nCount == 0, VoCuc dau tien

        this.#year = nCount * 24 + VoCuc.NĂM_ĐẦU_TIÊN_CỦA_VÔ_CỰC_ĐẦU_TIÊN;

    }

    static ANIMAL_NAMES = [
        "Mouse / Rat / Ca-pybara", "Ox / Bull / Buffalo / Cow / Bison",
        "Tiger / Leopard", "Rabbit / Rapoo ð Electric Mouse", "Dragon / { Ant, Bee } / Peacock", "Snake Clan / Centi-pede",
        "Horse / Sea-{ horse, dragon } / Western-dragon", "Goat --> Maggot", "¬{ Monkey / Ape / Kong }",
        "Rooster / Chicken / Hen", "Dodge / Deer / Reindeer / Duck / Ki-ki", "Pig / Boar in ð Wilderness"
    ];
    
    static exchange2AnimalByLunar(birthYear) {
        let tmp = Math.abs(DateValues.Constants.CURRENT_YEAR - birthYear) % 12;
        
        if (birthYear < DateValues.Constants.CURRENT_YEAR)
            return VoCuc.ANIMAL_NAMES[12 - tmp];
        else
            return VoCuc.ANIMAL_NAMES[tmp];
    }

    getLastElteYearOfVoCuc() {
        return DateValues.Constants.CURRENT_YEAR_STRING + '+' + (this.#year + 23 - DateValues.CURRENT_YEAR);
    }

}

Object.freeze(VoCuc.ANIMAL_NAMES);
Object.freeze(VoCuc.NĂM_ĐẦU_TIÊN_CỦA_VÔ_CỰC_ĐẦU_TIÊN);
Object.freeze(VoCuc.THE_FIRST_CANCHI_YEAR_OF_FIRST_VOCUC);


let bFullScreen = true;
function toggleFullscreen() {
    fullscreenZoom(bFullScreen);
    bFullScreen = !bFullScreen;
}

