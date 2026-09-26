/**
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @see https://repentogon.com/
 */
export var BlendFactor;
(function (BlendFactor) {
    BlendFactor[BlendFactor["ZERO"] = 0] = "ZERO";
    BlendFactor[BlendFactor["ONE"] = 1] = "ONE";
    BlendFactor[BlendFactor["SRC_COLOR"] = 2] = "SRC_COLOR";
    BlendFactor[BlendFactor["ONE_MINUS_SRC_COLOR"] = 3] = "ONE_MINUS_SRC_COLOR";
    BlendFactor[BlendFactor["DST_COLOR"] = 4] = "DST_COLOR";
    BlendFactor[BlendFactor["ONE_MINUS_DST_COLOR"] = 5] = "ONE_MINUS_DST_COLOR";
    BlendFactor[BlendFactor["SRC_ALPHA"] = 6] = "SRC_ALPHA";
    BlendFactor[BlendFactor["ONE_MINUS_SRC_ALPHA"] = 7] = "ONE_MINUS_SRC_ALPHA";
    BlendFactor[BlendFactor["DST_ALPHA"] = 8] = "DST_ALPHA";
    BlendFactor[BlendFactor["ONE_MINUS_DST_ALPHA"] = 9] = "ONE_MINUS_DST_ALPHA";
    /** Currently nonfunctional. */
    BlendFactor[BlendFactor["CONSTANT_COLOR"] = 10] = "CONSTANT_COLOR";
    /** Currently nonfunctional. */
    BlendFactor[BlendFactor["ONE_MINUS_CONSTANT_COLOR"] = 11] = "ONE_MINUS_CONSTANT_COLOR";
    /** Currently nonfunctional. */
    BlendFactor[BlendFactor["CONSTANT_ALPHA"] = 12] = "CONSTANT_ALPHA";
    /** Currently nonfunctional. */
    BlendFactor[BlendFactor["ONE_MINUS_CONSTANT_ALPHA"] = 13] = "ONE_MINUS_CONSTANT_ALPHA";
    BlendFactor[BlendFactor["SRC_ALPHA_SATURATE"] = 14] = "SRC_ALPHA_SATURATE";
})(BlendFactor || (BlendFactor = {}));
