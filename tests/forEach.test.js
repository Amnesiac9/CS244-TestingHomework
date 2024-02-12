const forEach = require("../src/forEach");

describe("forEach", () => {
    // Test that your callback is invoked for each array entry
    test("should callback for each array entry", () => {
        const mockCallback = jest.fn();
        forEach([1, 2, 3], mockCallback);
        expect(mockCallback.mock.calls.length).toBe(3);
    });
    // Test that your callback arguments are provided accurately
    test("should callback with arguments", () => {
        const mockCallback = jest.fn();
        forEach([1, 2, 3], mockCallback);

        // Check the args passed to each call of the callback
        expect(mockCallback.mock.calls[0][0]).toBe(1);
        expect(mockCallback.mock.calls[1][0]).toBe(2);
        expect(mockCallback.mock.calls[2][0]).toBe(3);
    });
});
