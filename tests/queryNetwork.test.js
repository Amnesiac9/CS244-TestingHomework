const fetch = require("../dependencies/fetch");
const queryNetwork = require("../src/queryNetwork");

// Mock fetch.js
jest.mock("../dependencies/fetch");

describe("queryNetwork", () => {
    // Return a promise that resolves into an object with a json method that returns { test: "" } object =)
    const mockFetch = jest.fn(() => Promise.resolve({ json: () => ({ json: { test: "" } }) }));
    // Replace the real fetch with the mock version
    fetch.mockImplementation(mockFetch);

    // Test that fetch is invoked
    test("should call fetch", async () => {
        await queryNetwork("https://test.com");
        expect(fetch).toBeCalled();
    });

    // Test that the returned promise resolves into the object
    // your mock is using for the json() method
    test("should return the object from json", async () => {
        const result = await queryNetwork("https://test.com");
        expect(result).toEqual({ json: { test: "" } });
    });
});
