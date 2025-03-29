const userGroups = {
    users1: { redirect: "main.html", users: [{ username: "ho", password: "ho123" }, { username: "hr", password: "hr123" }] },
    users2: { redirect: "gsd_dept.html", users: [{ username: "gsd", password: "gsd123" }] },
    users3: { redirect: "smp_dept.html", users: [{ username: "smp", password: "smp123" }] },
    users4: { redirect: "cft_form.html", users: [{ username: "cft", password: "cft123" }] },
    users5: { redirect: "kpidata.html", target: "_blank", users: [{ username: "kpi", password: "kpi123" }] },
    users6: { redirect: "line_plan.html", users: [{ username: "ppd", password: "ppd123" }] },
    users7: { redirect: "obmc.html", users: [{ username: "ombc", password: "obcm123" }] },
    users8: { redirect: "unit_fipl.html", users: [{ username: "fipl", password: "fipl123" }] }
};

// Login function
function navigate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    for (const group in userGroups) {
        const matchedUser = userGroups[group].users.find(user => user.username === username && user.password === password);

        if (matchedUser) {
            // Store login status and user data in sessionStorage
            sessionStorage.setItem('userLoggedIn', JSON.stringify({ username, redirect: userGroups[group].redirect }));

            // Redirect user
            if (userGroups[group].target === "_blank") {
                window.open(userGroups[group].redirect, "_blank");
            } else {
                window.location.href = userGroups[group].redirect;
            }
            return;
        }
    }
    alert("Invalid username or password.");
}

// Logout function
function logout() {
    sessionStorage.removeItem('userLoggedIn');
    window.location.href = "index.html";
}

// Check if the user is logged in
function checkLogin() {
    const userData = sessionStorage.getItem('userLoggedIn');

    if (!userData) {
        window.location.href = "index.html"; // Redirect if not logged in
        return;
    }

    const user = JSON.parse(userData);
    const currentPage = window.location.pathname.split('/').pop();

    if (user.redirect !== currentPage) {
        window.location.href = user.redirect; // Prevent unauthorized access
    }
}

// Run checkLogin on restricted pages (excluding index.html)
//document.addEventListener('DOMContentLoaded', () => {
//    if (window.location.pathname !== 'index.html') {
//        checkLogin();
//    }
//});
// Run checkLogin only on non-login pages
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage !== 'index.html' && currentPage !== '') {
        checkLogin();
    }
});
