import { listThings } from '../listThings.js';

describe('listThings', () => {

  it("will return a numbered string", () => {
    const listOfPeople = listThings("div", ["Tahani", "Chidi", "Jianyu"]);
    const expected = "<div>1. Tahani</div><div>2. Chidi</div><div>3. Jianyu</div>";
    expect(listOfPeople).toBe(expected)
  })

  it("can print roman numerals when needed", () => {
    const listOfPeople = listThings("div", ["Tahani", "Chidi", "Jianyu"], true);
    const expected = "<div>i. Tahani</div><div>ii. Chidi</div><div>iii. Jianyu</div>";
    expect(listOfPeople).toBe(expected)
  })
})