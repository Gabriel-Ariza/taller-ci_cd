
const { sumar, restar, multiplicar, dividir } = require('./calculadora');


test('suma de 2 + 3 debe ser 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('resta de 5 - 3 debe ser 2', () => {
  expect(restar(5, 3)).toBe(2);
});

test('multiplicación de 2 * 3 debe ser 6', () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test('división de 6 / 3 debe ser 2', () => {
  expect(dividir(6, 3)).toBe(2);
});

test('división entre cero debe lanzar error', () => {
  expect(() => dividir(6, 0)).toThrow("No se puede dividir entre cero");
});