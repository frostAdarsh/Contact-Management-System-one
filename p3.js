const prompt = require("prompt-sync")();

function printInfo() {
  console.log("Contact Management System");
  console.log("-----------------------------------");
  console.log("1. Add a Contact");
  console.log("2. Delete a Contact");
  console.log("3. View Contact");
  console.log("4. Search Contact");
  console.log("5. Exit");
}

function addContact() {
  const name = prompt("Name: ");
  const email = prompt("Email: ");
  if (!name || !email) {
    console.log("Name or email cannot be empty");
    return;
  }
  const contact = {
    name: name,
    email: email,
  };
  contacts.push(contact);
  console.log("Contact added successfully!");
}
function deleteContact() {
  const name = prompt("Enter contact name to delete: ");
  const index = contacts.findIndex((contact) => contact.name === name);
  if (index !== -1) {
    contacts.splice(index, 1);
    console.log("Contact deleted successfully!");
  } else {
    console.log("Contact not found!");
  }
}
function searchContact() {
  const searchstring = prompt("Search ").toLowerCase();
  const result = [];
  for (let contact of contacts) {
    if (contact.name.toLowerCase().includes(searchstring)) result.push(contact);
  }
  listContacts(result)
}
function listContacts(contacts) {
  for (let contact of contacts) {
    console.log("--------------------------");
    console.log("Name:", contact.name);
    console.log("Email:", contact.email);
  }
}
printInfo();
const contacts = [];
let keepGoing = true;

while (keepGoing) {
  const number = prompt("Enter an operation (1-5) ");
  console.log();
  switch (number) {
    case "1":
      addContact();
      break;
    case "2":
      deleteContact();
      break;
    case "3":
      listContacts(contacts);
      break;
    case "4":
      searchContact();
      break;
    case "5":
      keepGoing = false;
      break;
    default:
      console.log("Invalid");
      break;
  }
}
