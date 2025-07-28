import { Chance } from "chance";

export function passwordGenerator() {
  const chance = new Chance();

  let password = '';
  for (let i = 0; i <= 12; i++) {
    password += chance.character();
  }

  return password;
}