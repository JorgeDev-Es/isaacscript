/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var AltRockType;
(function (AltRockType) {
    AltRockType[AltRockType["URN"] = 1] = "URN";
    AltRockType[AltRockType["MUSHROOM"] = 2] = "MUSHROOM";
    AltRockType[AltRockType["SKULL"] = 3] = "SKULL";
    AltRockType[AltRockType["POLYP"] = 4] = "POLYP";
    /**
     * Destroying buckets in Downpour give different outcomes than in Dross.
     *
     * See: https://bindingofisaacrebirth.fandom.com/wiki/Rocks#Buckets
     */
    AltRockType[AltRockType["BUCKET_DOWNPOUR"] = 5] = "BUCKET_DOWNPOUR";
    /**
     * Destroying buckets in Dross give different outcomes than in Downpour.
     *
     * See: https://bindingofisaacrebirth.fandom.com/wiki/Rocks#Buckets
     */
    AltRockType[AltRockType["BUCKET_DROSS"] = 6] = "BUCKET_DROSS";
})(AltRockType || (AltRockType = {}));
