
const form = document.querySelector("#register")

// wysyłamy wpisane dane w login i password po kliknieciu klawisza login - flaga "submit"
form.addEventListener('submit', function (e) {
    // zapobiega dwuktronemu wysylaniu formularza
    e.preventDefault();

    const data = `login=${this.login.value}&password=${this.password.value}&email=${this.email.value}&firstName=${this.firstName.value}&lastName=${this.lastName.value}`;
    console.log(data);
    setStudent(data);
});

function setStudent(data) {
    fetch("http://localhost:8000/register",
        {
            mode: 'no-cors',
            method: "POST",
            body: data
        })
        // .then(function (response) {
        //     return response.json();
        // })
        .then(function (response) {
            console.log(response);
        })
}
function showMessage() {
    document.querySelector(".message").classList.toggle("hide");
    return false;
}