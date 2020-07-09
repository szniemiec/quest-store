
const form = document.querySelector("#login-form")

// wysyłamy wpisane dane w login i password po kliknieciu klawisza login - flaga "submit"
form.addEventListener('submit', function (e) {
    // zapobiega dwuktronemu wysylaniu formularza
    e.preventDefault();
    const data = `login=${this.login.value}&password=${this.password.value}`;
    console.log(data)
    setLoggedUser(data);
});

function setLoggedUser(data) {
    fetch("http://localhost:8000/login",
        {
            method: "POST",
            body: data
        })
        .then(function (response) {
            let user = response.json();
            return user;
        })
        .then (function (user) {
            console.log(user)
            if(user.accountCredentials.roleEnum === 'MENTOR'){
                sessionStorage.setItem('id', user.id);
                sessionStorage.setItem('role',2);
                window.location.replace("navigation.html");
            }

        })
}