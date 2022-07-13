const { db, saveDb, getNextId } = require("./db_utils");

const getPeople = () => db.people;
const getPerson = id => db.people.find(p => p.id === id);

const updatePerson = newPerson => {
  let oldPerson = db.people.find(p => p.id === newPerson.id);
  oldPerson = { ...oldPerson, ...newPerson }
  saveDb();
  return oldPerson;
}

const addPerson = newPerson => {
  newPerson = { ...newPerson, id: getNextPeopleId() }
  db.people.push(newPerson);
  saveDb();
  return newPerson;
}

const deletePerson = personId => {
  db.people.filter(p => p.id !== personId);
  saveDb();
}

const getNextPeopleId = () => getNextId("people");

module.exports = {
  getPeople, getPerson, addPerson, updatePerson, deletePerson
};