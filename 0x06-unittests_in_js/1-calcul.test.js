const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  describe('type == "SUM"', () => {
    it("Showing equal negative numbers (alternate)", () => {
      assert.strictEqual(calculateNumber("SUM", -2.3, -1.8), -4);
    });

    it("Showing negative and positive numbers", () => {
      assert.strictEqual(calculateNumber("SUM", -2.0, 2.0), 0);
    });

    it("Showing equal positive numbers", () => {
      assert.strictEqual(calculateNumber("SUM", 2.0, 2.0), 4);
    });

    it("Showing equal positive numbers (alternate)", () => {
      assert.strictEqual(calculateNumber("SUM", 2.3, 1.8), 4);
    });

    it("Showing equal negative numbers", () => {
      assert.strictEqual(calculateNumber("SUM", -2.0, -2.0), -4);
    });

    it("0 and 0", () => {
      assert.strictEqual(calculateNumber("SUM", 0.0, 0.0), 0);
    });
    it("Showing positive and negative numbers", () => {
      assert.strictEqual(calculateNumber("SUM", 2.0, -2.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it("Showing equal negative numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", -2.0, -2.0), 0);
    });

    it("Showing equal negative numbers (alternate)", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", -2.3, -1.8), 0);
    });

    it("Showing negative and positive numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", -2.0, 2.0), -4.0);
    });
    it("Showing equal positive numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2.0, 2.0), 0);
    });

    it("Showing equal positive numbers (alternate)", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2.3, 1.8), 0);
    });

    it("Showing positive and negative numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2.0, -2.0), 4.0);
    });

    it("0 and 0", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it("Showing numbers with different signs (alternate)", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 7.0, -2.0), -3.5);
    });
    it("Showing positive numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 8.0, 2.0), 4.0);
    });

    it("Showing numbers with different signs", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -7.0, 2.0), -3.5);
    });

    it("Showing negative numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -7.0, -2.0), 3.5);
    });

    it("Showing equal positive numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2.0, 2.0), 1);
    });

    it("Showing equal negative numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -2.0, -2.0), 1);
    });

    it("Showing equal rounded up numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2.6, 3.0), 1);
    });

    it("Showing equal rounded down numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2.4, 2.0), 1);
    });

    it("Showing negative number and number rounded up to zero", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -5.0, -0.2), "Error");
    });

    it("0 and 0", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 0.0, 0.0), "Error");
    });

    it("Showing positive number and 0", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 5.0, 0), "Error");
    });

    it("Showing positive number and number rounded down to 0", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 5.0, 0.2), "Error");
    });

    it("Showing positive number and number rounded up to 0", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 5.0, -0.2), "Error");
    });

    it("Showing negative number and 0", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -5.0, 0), "Error");
    });
  });
});
