import calculadoraCadenas from "./CalculadorCade.js";

describe("CalculadoraCadenas", () => {
  it("deberia devolver un numero", () => {
    expect(calculadoraCadenas("3")).toEqual(3);
  });
});
