/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var SlotState;
(function (SlotState) {
    SlotState[SlotState["IDLE"] = 1] = "IDLE";
    /** Only used by Shell Game and Hell Game. */
    SlotState[SlotState["IDLE_REWARD"] = 2] = "IDLE_REWARD";
    SlotState[SlotState["BOMBED"] = 3] = "BOMBED";
    SlotState[SlotState["PAYOUT"] = 4] = "PAYOUT";
    /** Only used by Shell Game and Hell Game. */
    SlotState[SlotState["REWARD"] = 5] = "REWARD";
})(SlotState || (SlotState = {}));
