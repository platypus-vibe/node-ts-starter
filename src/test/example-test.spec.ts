// module.test.js
import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import { fetchDataFromAPI } from "../example-test";

describe("fetchDataFromAPI", { only: true }, () => {
  it("should return mocked data", async () => {
    const expectedResponse = {
      userId: 1,
      id: 1,
      title: "Learn JavaScript",
      completed: true,
    };

    const globalMock = mock.method(global, "fetch", async () => {
      return {
        json: async () => expectedResponse,
      };
    });

    assert.deepStrictEqual(await fetchDataFromAPI(), expectedResponse);
    assert.strictEqual(globalMock.mock.calls.length, 1);

    mock.reset();
  });
});
