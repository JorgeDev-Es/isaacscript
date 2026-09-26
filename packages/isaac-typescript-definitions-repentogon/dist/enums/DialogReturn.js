/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var DialogReturn;
(function (DialogReturn) {
    DialogReturn[DialogReturn["PL"] = 1] = "PL";
    DialogReturn[DialogReturn["CANCEL"] = 2] = "CANCEL";
    DialogReturn[DialogReturn["ABORT"] = 3] = "ABORT";
    DialogReturn[DialogReturn["RETRY"] = 4] = "RETRY";
    DialogReturn[DialogReturn["IGNORE"] = 5] = "IGNORE";
    DialogReturn[DialogReturn["YES"] = 6] = "YES";
    DialogReturn[DialogReturn["NO"] = 7] = "NO";
    DialogReturn[DialogReturn["TRY_AGAIN"] = 10] = "TRY_AGAIN";
    DialogReturn[DialogReturn["CONTINUE"] = 11] = "CONTINUE";
})(DialogReturn || (DialogReturn = {}));
