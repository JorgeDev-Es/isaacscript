/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var WeaponSlot;
(function (WeaponSlot) {
    /** Used by weapons such as Notched Axe and Urn of Souls. */
    WeaponSlot[WeaponSlot["BACKUP"] = 0] = "BACKUP";
    WeaponSlot[WeaponSlot["PRIMARY"] = 1] = "PRIMARY";
    WeaponSlot[WeaponSlot["ADDITIONAL_1"] = 2] = "ADDITIONAL_1";
    WeaponSlot[WeaponSlot["ADDITIONAL_2"] = 3] = "ADDITIONAL_2";
    WeaponSlot[WeaponSlot["ADDITIONAL_3"] = 4] = "ADDITIONAL_3";
})(WeaponSlot || (WeaponSlot = {}));
