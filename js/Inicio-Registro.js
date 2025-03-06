const firebaseConfig = {
    apiKey: "AIzaSyDtDX0Upgn6eUWP6PWqACduw0UJSpQ7cYc",
    authDomain: "evalucacion-fb656.firebaseapp.com",
    databaseURL: "https://evalucacion-fb656-default-rtdb.firebaseio.com",
    projectId: "evalucacion-fb656",
    storageBucket: "evalucacion-fb656.appspot.com",
    messagingSenderId: "446865801864",
    appId: "1:446865801864:web:b51d561c84c62cb4a7553d"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Mapeo de errores de Firebase a mensajes en español
const errorMessages = {
    'auth/invalid-email': 'El correo electrónico no es válido.',
    'auth/user-disabled': 'El usuario ha sido deshabilitado.',
    'auth/user-not-found': 'No se encontró un usuario con ese correo electrónico.',
    'auth/wrong-password': 'La contraseña es incorrecta.',
    'auth/email-already-in-use': 'Este correo electrónico ya está registrado.',
    'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
    // Puedes agregar más errores aquí según sea necesario
};

function showMessage(elementId, message, isSuccess) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.className = `message ${isSuccess ? 'success' : 'error'}`;
    element.style.display = 'block';
    setTimeout(() => element.style.display = 'none', 5000);
}

function googleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(() => window.location.href = "indexusuario.html")
        .catch(error => showMessage('loginMessage', translateError(error.code), false));
}

document.addEventListener('DOMContentLoaded', () => {
    // Botones de Google
    document.querySelectorAll('.fa-google').forEach(icon => {
        icon.parentElement.addEventListener('click', (e) => {
            e.preventDefault();
            googleAuth();
        });
    });

    // Registro
    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                showMessage('signupMessage', '¡Registro exitoso! Redirigiendo...', true);
                setTimeout(() => {
                    document.querySelector(".container").classList.remove("sign-up-mode");
                    document.getElementById('signupForm').reset();
                }, 2000);
            })
            .catch(error => showMessage('signupMessage', translateError(error.code), false));
    });

    // Login
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => window.location.href = "indexusuario.html")
            .catch(error => showMessage('loginMessage', translateError(error.code), false));
    });
});

// Función para traducir el código de error
function translateError(code) {
    return errorMessages[code] || 'Ocurrió un error desconocido.';
}

// Animación del formulario
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

