function logout() {
    window.localStorage.removeItem("IsLoggedIn")
    window.location = "/login"
}