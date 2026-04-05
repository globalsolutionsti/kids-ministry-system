const API_URL = "https://script.google.com/macros/s/AKfycbwfTm07nOxZbUuK_Eq-kUKhym_RwP2FK05p_G1C7Zyu6kUuUQYvr-PE5uMSeE3FT_co/exec";

// LOGIN
function login() {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      document.getElementById("login").classList.add("hidden");
      document.getElementById("app").classList.remove("hidden");
    } else {
      alert("Credenciales incorrectas");
    }
  });
}

// AGREGAR NIÑO
function addKid() {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "addKid",
      name: document.getElementById("kidName").value,
      photo: document.getElementById("kidPhoto").value
    })
  })
  .then(res => res.json())
  .then(() => alert("Niño guardado"));
}

// AGREGAR ADULTO
function addAdult() {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "addAdult",
      name: document.getElementById("adultName").value,
      phone: document.getElementById("adultPhone").value
    })
  })
  .then(res => res.json())
  .then(() => alert("Adulto guardado"));
}
