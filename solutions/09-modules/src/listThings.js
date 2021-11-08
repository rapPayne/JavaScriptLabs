import { toRoman } from "./romanNumeralConverter";

export const listThings = (elementType, inputArray, useRomanNumerals) => {
  const getNumber = num => useRomanNumerals ? toRoman(num) : num;
  const htmlString = inputArray.map((val, i) => `<${elementType}>${getNumber(i + 1)}. ${val}</${elementType}>`).join('')
  return htmlString
}