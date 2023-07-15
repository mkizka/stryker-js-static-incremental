import {  greet } from "./greet";

it("should greet me", () => {
  expect(greet("me")).toEqual(expect.stringContaining("me"));
});

// it("should greet me with 👋", () => {
//   expect(greet("me")).toEqual(expect.stringContaining("👋"));
// });
