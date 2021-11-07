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