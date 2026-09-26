/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var CharacterMenuStatus;
(function (CharacterMenuStatus) {
    CharacterMenuStatus[CharacterMenuStatus["DEFAULT"] = 0] = "DEFAULT";
    CharacterMenuStatus[CharacterMenuStatus["SEED"] = 1] = "SEED";
    CharacterMenuStatus[CharacterMenuStatus["RANDOM_CHARACTER_SELECTION"] = 2] = "RANDOM_CHARACTER_SELECTION";
    CharacterMenuStatus[CharacterMenuStatus["FADEOUT"] = 3] = "FADEOUT";
    CharacterMenuStatus[CharacterMenuStatus["CHARACTER_PAPER_SWAP"] = 4] = "CHARACTER_PAPER_SWAP";
})(CharacterMenuStatus || (CharacterMenuStatus = {}));
