import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const button = document.querySelector("button");

button.addEventListener("click", () => {

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {

      alert("✅ Muvaffaqiyatli kirdingiz!");

      window.location.href = "dashboard.html";

    })

    .catch((error) => {

      alert(error.message);

    });

});
