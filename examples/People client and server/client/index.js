const url = "http://localhost:8080/api/people";
document.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then(res => res.json())
    .then(people => drawPeople(people))
    .catch(err => console.error("Problem fetching", err));

  console.log("index.js is finished being read.");
  //Make the button say something
  //1. Find the button
  const btn = document.querySelector("button");
  //2. Make the click do something
  btn.addEventListener("click", () => {
    console.log("go fetch the people");
    fetch(url)
      .then(res => res.json())
      .then(people => drawPeople(people))
      .catch(err => console.error("Problem fetching", err));
    const dataURI = QRCode.generatePNG("This is a test");
    console.log("DATAURI IS", dataURI);
    const newImg = document.createElement("img");
    newImg.src = dataURI;
    document.querySelector("header").appendChild(newImg);
  });
});

function drawPeople(people = []) {
  let html = `
  <div style="display: flex; flex-wrap: wrap">
  `;
  // Loop, grab each person, put them in the html iin table cells
  for (i = 0; i < people.length; i++) {
    const personCard = makePersonCard(people[i]);
    html += personCard;
  }
  html += `</div>`
  //1. point to the node
  //2. Do something (insert the html above)
  document
    .getElementById("tblPeople")
    .innerHTML = html;
}

const makePersonCard = ({ photo, prefix, first, last, email, phone, city, country }) => `
  <section class="personCard">
  <div class="cardHeader">
    <div class="headerWrapper">
    <img src="${photo}" alt="${first}" />
    <h3>${prefix} ${first} ${last}</h3>
    </div>
  </div>
  <div class="cardBody">
  <p>Email: ${email}</p>
  <p>Phone: ${phone}</p>
  <p>Location: ${city}, ${country}</p>
    
  </div>

  </section>
`;

// function drawPeople(people = []) {
//   console.log("drawing ", people)
//   let html = `
//   <table>
//     <thead>
//     <tr>
//     <th>Id</th>
//     <th>First</th>
//     <th>Last</th>
//     <th>Email</th>
//     </tr>
//     </thead>
//     <tbody>`;
//   // Loop, grab each person, put them in the html iin table cells
//   for (i = 0; i < people.length; i++) {
//     const personRow = makePersonRow(people[i]);
//     html += personRow;
//   }
//   html += `
//     </tbody>
//   </table>`
//   //1. point to the node
//   //2. Do something (insert the html above)
//   document
//     .getElementById("tblPeople")
//     .innerHTML = html;
// }

// function makePersonRow(person = {}) {
//   const { id, first, last } = person;
//   return `<tr><td>${id}</td><td>${first}</td><td>${last}</td></tr>`;
// }
const makePersonRow = ({ id, first, last, email } = {}) =>
  `<tr><td>${id}</td><td>${first}</td><td>${last}</td><td>${email}</td></tr>`;