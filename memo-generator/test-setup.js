import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";

import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

// Prepare data
const memes = {
  data: {
    memes: [
      { url: "https://i.imgflip.com/1c1uej.jpg" },
      { url: "https://i.imgflip.com/1bij.jpg" },
    ],
  },
};

export const handlers = [
  http.get("https://api.imgflip.com/get_memes", () => {
    return HttpResponse.json(memes);
  }),
];

const server = setupServer(...handlers);

// Establish requests interception layer before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// Clean up after all tests are done, preventing this
// interception layer from affecting irrelevant tests.
afterAll(() => server.close());

// Clean up handlers
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
