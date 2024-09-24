import { describe, it, expect } from "vitest";
import { letPlay } from "./chifoumi";

describe("Levenshtein Distance", () => {
  it("Should return 0 when both words are the same", () => {
    //Given
    //When
    const result = letPlay();
    //Then
    expect(result).toBeDefined();
  });
});
