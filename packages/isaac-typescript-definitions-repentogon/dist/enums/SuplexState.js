/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var SuplexState;
(function (SuplexState) {
    SuplexState[SuplexState["INACTIVE"] = 0] = "INACTIVE";
    SuplexState[SuplexState["DASH"] = 1] = "DASH";
    SuplexState[SuplexState["HOLD"] = 2] = "HOLD";
    SuplexState[SuplexState["JUMP"] = 3] = "JUMP";
    SuplexState[SuplexState["FALL"] = 4] = "FALL";
})(SuplexState || (SuplexState = {}));
