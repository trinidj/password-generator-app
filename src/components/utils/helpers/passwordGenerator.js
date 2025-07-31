import { Chance } from "chance";

export function passwordGenerator(length) {
  const chance = new Chance();

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chance.character();
  }

  return password;
}