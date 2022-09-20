import calculadoraCadenas from "./CalculadorCade.js";

describe("CalculadoraCadenas", () => {
  it("deberia devolver un numero", () => {
    expect(calculadoraCadenas("3")).toEqual(3);
  });
  it("deberia devolver la suma de una cadena de dos numero ", () => {
    expect(calculadoraCadenas("3,5")).toEqual(8);
  });
});
