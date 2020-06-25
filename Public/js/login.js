
const form = document.querySelector("#login-form")

// wysyłamy wpisane dane w login i password po kliknieciu klawisza login - flaga "submit"
form.addEventListener('submit', function (e) {
    // zapobiega dwuktronemu wysylaniu formularza
    e.preventDefault();
    const data = 'login=$(this.login.value)&password=$(this.password.value)';
    setLoggedUser(data);
});

function setLoggedUser(data) {
    fetch("http://localhost:8000/login",
        {
            mode: "no-cors",
            method: "POST",
            body: data
        })

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}