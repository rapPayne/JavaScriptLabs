export function toRoman(decimal) {
  switch (decimal) {
    case 1:
      return 'i';
    case 2:
      return 'ii';
    case 3:
      return 'iii';
    case 4:
      return 'iv';
    default:
      throw `Haven't implemented ${decimal} yet.`
  }
}

export function convert(romanNumeral) {
  switch (romanNumeral) {
    case "i":
      return 1;
    case "ii":
      return 2;
    case "iii":
      return 3;
    case "x":
      return 10;
    default:
      throw `${romanNumeral} not implemented yet`;
  }
}

export function showHoisting() {
  const x = 1;
  const y = undefined;
  const z = { foo: true, bar: true, baz: true };
  z.foo = false;
  z.qux = true;

  if (x === 2) {
    //y = true;
  }
  return y;
}