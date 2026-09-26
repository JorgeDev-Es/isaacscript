/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var FollowerPriority;
(function (FollowerPriority) {
    FollowerPriority[FollowerPriority["DEFAULT"] = 0] = "DEFAULT";
    FollowerPriority[FollowerPriority["SHOOTER"] = 1] = "SHOOTER";
    /** Used by Dry Bab, Mongo Baby, Censer, and Lil Abaddon. */
    FollowerPriority[FollowerPriority["DEFENSIVE"] = 2] = "DEFENSIVE";
    /** Used by Lil Brim and Lil Monstro. */
    FollowerPriority[FollowerPriority["SHOOTER_SPECIAL"] = 3] = "SHOOTER_SPECIAL";
    FollowerPriority[FollowerPriority["INCUBUS"] = 10] = "INCUBUS";
    FollowerPriority[FollowerPriority["KING_BABY"] = 9999] = "KING_BABY";
})(FollowerPriority || (FollowerPriority = {}));
