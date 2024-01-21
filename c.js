// You can add interactivity here if needed
// For instance, form validation or handling form submission
// Example: 
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  // You can perform actions with the form data here
  // For example, sending it to a server via fetch()
  // For now, let's just log it to the console
  console.log(`Name: ${name}, Email: ${email}`);
});

const audio = new Audio();
audio.src = "ring.mp3";