const clamp = require("../src/clamp");

describe("clamp", () => {
    // TODO: Put your tests here

    // Test that lower clamps are applied
    // Test that upper clamps are applied

    // Test that defaults are applied
    test("should apply defaults", () => {
        let result = clamp(10);
        expect(result).toBe(1);
        result = clamp(-10);
        expect(result).toBe(0);
    });

    test("should apply lower clamps", () => {
        let result = clamp(-10, -5);
        expect(result).toBe(-5);
    });

    test("should apply upper clamps", () => {
        const result = clamp(10, undefined, 5);
        expect(result).toBe(5);
    });
});
