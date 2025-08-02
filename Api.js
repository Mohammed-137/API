// Step 1: Create an empty list to store contacts
let contacts = [];

// Step 2: Get contacts from a JSON file using Fetch (asynchronous)
async function fetchContacts() {
  try {
    const response = await fetch('contacts.json'); // Contact data file
    contacts = await response.json(); // Convert JSON to JS object
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

