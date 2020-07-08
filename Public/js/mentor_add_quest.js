
const form = document.querySelector("#add_quest")

// wysyłamy wpisane dane w login i password po kliknieciu klawisza login - flaga "submit"
form.addEventListener('submit', function (e) {
    // zapobiega dwuktronemu wysylaniu formularza
    e.preventDefault();

    const data = `name=${this.name.value}&description=${this.description.value}&reward=${this.value.value}`;

    setQuest(data);
});

function setQuest(data) {
    fetch("http://localhost:8000/add-quest",
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