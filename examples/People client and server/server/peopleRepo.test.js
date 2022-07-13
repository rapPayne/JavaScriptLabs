const { getPeople, getPerson, updatePerson } = require('./peopleRepo');

describe("People Repository", () => {
  it("can get all people", () => {
    const allPeople = getPeople();
    expect(allPeople.length).toBeGreaterThan(0);
  });

  it("can get a person", () => {
    const personId = 110;
    const person1 = getPerson(personId);
    expect(person1).toBeTruthy();
    expect(person1.id).toEqual(personId);
  })

  it("can update a person", () => {
    const oldPerson = getPerson(110);
    const newPerson = { ...oldPerson, firstName: "Gwen", lastName: "Stacy" };
    updatePerson(newPerson);
    const newNewPerson = getPerson(110);
    expect(JSON.stringify(newNewPerson)).toBe(JSON.stringify(newPerson));
  })
});