/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var DailyChallengeMenuState;
(function (DailyChallengeMenuState) {
    DailyChallengeMenuState[DailyChallengeMenuState["NOT_LOADED"] = 0] = "NOT_LOADED";
    DailyChallengeMenuState[DailyChallengeMenuState["LOADING"] = 1] = "LOADING";
    DailyChallengeMenuState[DailyChallengeMenuState["LOADED"] = 2] = "LOADED";
    DailyChallengeMenuState[DailyChallengeMenuState["SUBMITTED_SCORE"] = 3] = "SUBMITTED_SCORE";
})(DailyChallengeMenuState || (DailyChallengeMenuState = {}));
