let baseURL = "http://localhost:3001/";

let modal = document.getElementById("myModal");

  function openModal(element) {
    modal.style.display = "flex"; // Используем flex для центрирования
    setTimeout(closeModal, 15000);
    element.classList.add("borderChanged");
  }

  function closeModal() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }