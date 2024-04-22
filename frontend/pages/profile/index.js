let baseURL = "http://127.0.0.1:5500/fake-api/db.json"
// const express = require('express');
// const fs = require('fs').promises;

// const app = express();
// const PORT = 3000;

// app.use(express.static('fake-api'));

// app.get('/users', async (req, res) => {
//   try {
//     const data = await fs.readFile('fake-api/db.json', 'utf8');
//     res.json(JSON.parse(data));
//   } catch (err) {
//     console.error('Error reading db.json:', err);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


let nameuser = document.querySelector('.name-user')
let namesur = document.querySelector('.name')
let coupost = document.querySelector('.count-post')
let followers = document.querySelector('.count-fol1')
let following = document.querySelector('.count-ing')
let img = document.querySelectorAll('.post22')

fetch('/users')
  .then(response => response.json())
  .then(data => {
    const user = data.users[0];
    nameuser.textContent = user.username;
    namesur.textContent = user.name;
    coupost.textContent = user.profile.post;
    followers.textContent = user.profile.followers;
    following.textContent = user.profile.following;
    img.forEach((imgElement, index) => {
      imgElement.setAttribute('src', user.profile.photos[index]);
    });
  })
  .catch(error => console.error('Ошибка загрузки данных из базы данных:', error));



document.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem("theme");
  let slider = document.querySelector('.slider');
  let header = document.querySelector('.header')
  let l2  = document.querySelector('.linktoMain2')
  let w2 = document.querySelector('.w2')
  let body = document.querySelector('.body')
 if (!theme || theme == "light") {
   header.style.backgroundColor = 'black'
  header.style.color = 'white'
  l2.style.color = "white"
  w2.style.backgroundColor = "black"
  body.style.background = 'black'
 } else {
   header.style.backgroundColor = 'white'
  header.style.color = 'black'
  l2.style.color = "black"
  w2.style.backgroundColor = "white"
  body.style.background = 'white'



 }
 slider.onclick = () => {
  if (theme === "dark") {
    header.style.backgroundColor = 'black'
    header.style.color = 'white'
    l2.style.color = "white"
    w2.style.backgroundColor = "black"
  body.style.background = 'black'
    localStorage.setItem("theme", "light");
    theme = "light";
  } else {
    header.style.backgroundColor = 'white'
    header.style.color = 'black'
    l2.style.color = "black"
    w2.style.backgroundColor = "white"
  body.style.background = 'white'
    localStorage.setItem("theme", "dark");
    theme = "dark";
  }
 }
});