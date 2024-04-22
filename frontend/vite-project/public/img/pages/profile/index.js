let baseURL = "http://127.0.0.1:5500/frontend/vite-project/about/ui.json";

fetch(baseURL)
  .then(response => response.json())
  .then(data => {
    let 
})
.catch(error => console.error('Ошибка загрузки данных из базы данных:', error));