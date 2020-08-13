// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const emails = ['gandha@gmail.com', '@gmail.com', 'gandha@gmail', 'gandha@com', 'a@gmail.com']

const emailValidator1 = (email) => {
  const reg = /\S+@\S+\.\S+/;
  if (/\S+@\S+\.\S+/.test(email)) {
    console.log(`${email} is an email!!! :)`);
  } else {
    console.log(`${email} it's not email :(`);
  }
}

emails.forEach(email => emailValidator1(email));