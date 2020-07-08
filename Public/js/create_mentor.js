
const form = document.querySelector("#register")

// wysyłamy wpisane dane w login i password po kliknieciu klawisza login - flaga "submit"
form.addEventListener('submit', function (e) {
    // zapobiega dwuktronemu wysylaniu formularza
    e.preventDefault();

    const data = `login=${this.login.value}&password=${this.password.value}&email=${this.email.value}&firstName=${this.firstName.value}&lastName=${this.lastName.value}`;

    setStudent(data);
});

function setStudent(data) {
    fetch("http://localhost:8000/create-mentor",
        {
            mode: 'no-cors',
            method: "POST",
            body: data
        })
        .then(function (response) {

        })
}
function showMessage() {
    document.querySelector(".message").classList.toggle("hide");
    return false;
}