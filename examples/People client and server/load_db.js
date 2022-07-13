const fs = require('fs');
const faker = require('faker');

const numberOfPeople = 50;
const people = [];

for (i = 0; i <= numberOfPeople; i++) {
  people.push(makePerson());
}

const db = {
  people: people,
}

const dbAsJSON = JSON.stringify(db);
fs.writeFileSync('database.json', dbAsJSON);

function makePerson() {
  const first = faker.name.firstName();
  const last = faker.name.lastName();
  const prefix = faker.name.prefix();
  const email = faker.internet.email();
  const phone = faker.phone.phoneNumber();
  const city = faker.address.city();
  const country = faker.address.country();
  const avatar = faker.image.avatar();
  const photo = faker.image.people();

  return {
    id: i + 100,
    first: first,
    last: last,
    prefix: prefix,
    email: email,
    phone: phone,
    city: city,
    country: country,
    photo: avatar,
  };
}