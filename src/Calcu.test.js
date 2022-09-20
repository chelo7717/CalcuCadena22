import calculadoraCadenas from "./CalculadorCade.js";

describe("CalculadoraCadenas", () => {
  it("deberia devolver un numero", () => {
    expect(calculadoraCadenas("3")).toEqual(3);
  });
  it("deberia devolver la suma de una cadena de dos numero ", () => {
    expect(calculadoraCadenas("3,5")).toEqual(8);
  });
  it("deberia devolver la suma de una cadena de tres numero ", () => {
    expect(calculadoraCadenas("3,5,4")).toEqual(12);
  });
  it("deberia devolver la suma de una cadena de tres numero con - ", () => {
    expect(calculadoraCadenas("3-5,4")).toEqual(12);
  });
  it("deberia devolver la suma de una cadena de cuatro numero con - y ( )", () => {
    expect(calculadoraCadenas("3-5,4 3")).toEqual(15);
  });
  it("deberia devolver la suma si no pasa 1000", () => {
    expect(calculadoraCadenas("2,1001")).toEqual(2);
  });
  
});
