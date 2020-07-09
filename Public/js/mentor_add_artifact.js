const formArtifact = document.querySelector("#add_artifact")

// wysyłamy wpisane dane w login i password po kliknieciu klawisza login - flaga "submit"
formArtifact.addEventListener('submit', function (e) {
    // zapobiega dwuktronemu wysylaniu formularza
    e.preventDefault();

    const data = `name=${this.title.value}&description=${this.description.value}&reward=${this.cost.value}`;

    setArtifact(data);
});

function setArtifact(data) {
    fetch("http://localhost:8000/artifact",
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