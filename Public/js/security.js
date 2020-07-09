
/// tymczasowe rozwiazanie. Strosuje sie autoryzacje JWTToken
if( !sessionStorage.getItem('id')) {
    window.location.href="login.html";
}
//clear sessionStorage
const  logoutBtn = document.querySelector('.logout');
logoutBtn.addEventListener('click', logout);
function logout() {
    sessionStorage.clear();
    window.location.href="login.html";
}