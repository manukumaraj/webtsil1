// Disable right-click and developer tools shortcuts
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable F12 (Developer Tools)
document.addEventListener("keydown", e => {
    if (e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
    }
});


function logout() {
    // Clear the user's session or do any other necessary logout tasks.
    // For simplicity, we'll just redirect to the login page.
    sessionStorage.removeItem('userLoggedIn');
    window.location.href = "index.html";
}

// Prevent going back using browser's back button
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};




//// Disable right-click
//document.addEventListener("contextmenu", (e) => {
//    e.preventDefault();
//    alert("Right-click is disabled.");
//});
//
//// Disable F12 (Developer Tools)
//document.addEventListener("keydown", (e) => {
//    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
//        e.preventDefault();
//        alert("Opening developer tools is disabled.");
//    }
//});