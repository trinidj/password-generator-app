import { Chance } from "chance";

export function passwordGenerator(length, hasAlpha, casing, hasSymbols) {
  const chance = new Chance();

  let password = '';
  password += chance.string({
    length: length,
    alpha: hasAlpha,
    casing: casing,
    symbols: hasSymbols,
  });

  return password;
}