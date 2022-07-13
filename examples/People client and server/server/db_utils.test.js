let { getNextId } = require('./db_utils');

describe("DB Utils", () => {
  let db = { people: [], };
  beforeEach(() => {
    db.people = [];
    for (let i = 1; i < 10; i++) {
      db.people.push({ id: i, first: "firstName" + i, last: "lastName" + i, email: `email${i}@gmail.com` },)
    }
  });

  // Reading from the real DB. Should be mocked.
  it("can get the next id", () => {
    const nextId = getNextId("people");
    expect(nextId).toBe(151);
  })
})