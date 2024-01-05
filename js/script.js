function togglePassword() {
    var passwordInput = document.getElementById("passwordInput");
    var eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.className = "fas fa-eye-slash";
    } else {
        passwordInput.type = "password";
        eyeIcon.className = "fas fa-eye";
    }
}