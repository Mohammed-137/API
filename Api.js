// Step 1: Create an empty list to store contacts
let contacts = [];
// Step 2: Get contacts from a JSON file using Fetch (asynchronous)
async function fetchContacts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Contact data file
    contacts = await response.json(); // Convert JSON to JS object

    // Add your own contacts manually
    contacts.push(
      { id: Date.now() + 1, name: "A. Mohammed Yasar", phone:"+9876543210" },
      { id: Date.now() + 2, name: "ShruthiRanjani(sis)", phone:"+9123456789" },
      { id: Date.now() + 3, name: "Sridar(bro)", phone:"+9123456789" },
      { id: Date.now() + 4, name: "DhanushKrishnan(bro)", phone:"+9123456789" },
      { id: Date.now() + 5, name: "Karthick(bro) ", phone:"+9123456789" },
      { id: Date.now() + 6, name: "Aravind(bro)", phone:"+9123456789" },
      { id: Date.now() + 20, name: "Gokulnath(bro)", phone:"+9123456789" },
      { id: Date.now() + 7, name: "JenifaThomas(bro)", phone:"+9123456789" },
      { id: Date.now() + 8, name: "Jaya Kumar(bro)", phone:"+9123456789" },
      { id: Date.now() + 20, name: "KurshidhaBegam(sis)", phone:"+9123456789" },
      { id: Date.now() + 20, name: "JeyaLakshmi(sis)", phone:"+9123456789" },
      { id: Date.now() + 20, name: "MurhuLakshmi(sis)", phone:"+9123456789" },
      { id: Date.now() + 20, name: "Sherly(sis)", phone:"+9123456789" },
      { id: Date.now() + 20, name: "MymoonAfrin(sis)", phone:"+9123456789" },
      { id: Date.now() + 20, name: "GunaSundhari(sis)", phone:"+9123456789" },
      { id: Date.now() + 20, name: "Jenitha(sis)", phone:"+9123456789" },
      { id: Date.now() + 9, name: "Arun(bro)", phone:"+9123456789" },
      { id: Date.now() + 10, name: "Vasanth(bro)", phone:"+9123456789" },
      { id: Date.now() + 11, name: "JayaMurthi(bro)", phone:"+9123456789" },
      { id: Date.now() + 12, name: "Jenifer(bro)", phone:"+9123456789" },
      { id: Date.now() + 13, name: "Pothiraj(bro)", phone:"+9123456789" },
      { id: Date.now() + 14, name: "SelvaKumar(bro) ", phone:"+9123456789" },
      { id: Date.now() + 15, name: "Yogesh(bro)", phone:"+9123456789" },
      { id: Date.now() + 16, name: "Sujin(bro)", phone:"+9123456789" },
      { id: Date.now() + 17, name: "Sugesh(bro)", phone:"9123456789" },
      { id: Date.now() + 18, name: "RajKumar(bro)", phone:"9123456789" },
      { id: Date.now() + 19, name: "Sudha(bro)", phone:"+9123456789" },
      { id: Date.now() + 20, name: "RajKumar(bro)", phone:"+9123456789" }
    );
    renderContacts(contacts); // Show contacts on screen
  } catch (error) {
    alert("Error loading contacts"); // Error message if file fails to load
    console.error(error);
  }
}

// Step 3: Show all contacts on the webpage
function renderContacts(list) {
  const ul = document.getElementById('contactList');
  ul.innerHTML = ""; // Clear previous list

  // Loop through all contacts and display
  list.forEach(function(contact, index) {
    ul.innerHTML +=`
      <li>
        <span>${contact.name} - ${contact.phone}</span>
        <button onclick="editContact(${index})">Edit</button>
        <button onclick="deleteContact(${index})">Delete</button>
      </li>
    `;
  });
}
// Step 4: Add a new contact to the list
function addContact() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !phone) {
    alert("Please enter name and phone");
    return;
  }

  const newContact = {
    id: Date.now(), // Unique ID
    name: name,
    phone: phone
  };

  contacts.push(newContact); // Add to the contact list
  renderContacts(contacts); // Show updated list

  // Clear input boxes
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
}

// Step 5: Delete contact using index
function deleteContact(index) {
  const confirmDelete = confirm("Delete this contact?");
  if (confirmDelete) {
    contacts.splice(index, 1); // Remove from list
    renderContacts(contacts); // Update list on screen
  }
}

// Step 6: Edit contact details
function editContact(index) {
  const contact = contacts[index];
  const newName = prompt("Edit Name", contact.name);
  const newPhone = prompt("Edit Phone", contact.phone);

  if (newName && newPhone) {
    contacts[index] = {
      ...contact,
      name: newName,
      phone: newPhone
    };
    renderContacts(contacts);
  }
}

// Step 7: Search contact by name or phone
function searchContact() {
  const query = document.getElementById('search').value.toLowerCase();

  const filteredContacts = contacts.filter(function(c) {
    return (
      c.name.toLowerCase().includes(query) ||
      c.phone.includes(query)
    );
  });

  renderContacts(filteredContacts); // Show only matching contacts
}


// Load contact list automatically when page opens
window.onload = fetchContacts;

