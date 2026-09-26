/**
 * The type of autocomplete the command has for the debug console.
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var AutocompleteType;
(function (AutocompleteType) {
    AutocompleteType[AutocompleteType["NONE"] = 0] = "NONE";
    AutocompleteType[AutocompleteType["ENTITY"] = 1] = "ENTITY";
    AutocompleteType[AutocompleteType["GOTO"] = 2] = "GOTO";
    AutocompleteType[AutocompleteType["STAGE"] = 3] = "STAGE";
    AutocompleteType[AutocompleteType["GRID"] = 4] = "GRID";
    AutocompleteType[AutocompleteType["DEBUG_FLAG"] = 5] = "DEBUG_FLAG";
    AutocompleteType[AutocompleteType["ITEM"] = 6] = "ITEM";
    AutocompleteType[AutocompleteType["CHALLENGE"] = 7] = "CHALLENGE";
    AutocompleteType[AutocompleteType["COMBO"] = 8] = "COMBO";
    AutocompleteType[AutocompleteType["CUTSCENE"] = 9] = "CUTSCENE";
    AutocompleteType[AutocompleteType["MACRO"] = 10] = "MACRO";
    AutocompleteType[AutocompleteType["SFX"] = 11] = "SFX";
    AutocompleteType[AutocompleteType["CURSE"] = 12] = "CURSE";
    AutocompleteType[AutocompleteType["METRO"] = 13] = "METRO";
    AutocompleteType[AutocompleteType["DELIRIOUS"] = 14] = "DELIRIOUS";
    AutocompleteType[AutocompleteType["PLAYER"] = 15] = "PLAYER";
    AutocompleteType[AutocompleteType["ACHIEVEMENT"] = 16] = "ACHIEVEMENT";
    AutocompleteType[AutocompleteType["MOD_FOLDER"] = 17] = "MOD_FOLDER";
    AutocompleteType[AutocompleteType["CUSTOM"] = 18] = "CUSTOM";
})(AutocompleteType || (AutocompleteType = {}));
