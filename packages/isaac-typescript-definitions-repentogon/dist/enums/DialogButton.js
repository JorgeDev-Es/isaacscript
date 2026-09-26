/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var DialogButton;
(function (DialogButton) {
    DialogButton[DialogButton["OK"] = 0] = "OK";
    DialogButton[DialogButton["OK_CANCEL"] = 1] = "OK_CANCEL";
    DialogButton[DialogButton["ABORT_RETRY_IGNORE"] = 2] = "ABORT_RETRY_IGNORE";
    DialogButton[DialogButton["YES_NO_CANCEL"] = 3] = "YES_NO_CANCEL";
    DialogButton[DialogButton["YES_NO"] = 4] = "YES_NO";
    DialogButton[DialogButton["RETRY_CANCEL"] = 5] = "RETRY_CANCEL";
    DialogButton[DialogButton["CANCEL_TRY_CONTINUE"] = 6] = "CANCEL_TRY_CONTINUE";
    DialogButton[DialogButton["HELP"] = 16384] = "HELP";
})(DialogButton || (DialogButton = {}));
