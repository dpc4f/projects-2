
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
            ret = bLongForm ? 'SEPT' : 's';
            break;

        case '7':
            ret = bLongForm ? 'OCT' : 'o';
            break;

        case '8':
            ret = bLongForm ? 'NOV' : 'n';
            break;

        case '9':
            ret = bLongForm ? 'DEC' : 'd';
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
