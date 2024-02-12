const fetch = require("../dependencies/fetch");
const queryNetwork = require("../src/queryNetwork");

// Not sure if I did this right.
jest.mock("../dependencies/fetch");

describe("queryNetwork", () => {
    // Mock fetch.js
    // const mockJson = jest.fn(() => ({}));
    const mockFetch = jest.fn(() => Promise.resolve({ json: () => ({ json: { test: "" } }) }));
    // Test that fetch is invoked
    test("should call fetch", async () => {
        fetch.mockImplementation(mockFetch);
        await queryNetwork("https://test.com");
        expect(fetch).toBeCalled();
    });

    // Test that the returned promise resolves into the object
    // your mock is using for the json() method
    test("should return the object from json", async () => {
        fetch.mockImplementation(mockFetch);
        const result = await queryNetwork("https://test.com");
        expect(result).toEqual({ json: { test: "" } });
    });
});
