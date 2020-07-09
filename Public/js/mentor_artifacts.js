const container = document.querySelector(".cards")

function getArtifacts() {
    fetch('http://localhost:8000/artifact')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (artifacts) {
            innerArtifacts(artifacts);
        })
}

function innerArtifacts(artifacts) {
    let cards = document.querySelector(".cards")
    artifacts.forEach(artifact => {

        let card = document.createElement("div");
        card.setAttribute('class', 'card');
        card.innerHTML =
            `<div class="card-title">${artifact.title}</div>` +
            `<div class="card-description">${artifact.description}</div>` +
            `<div class="card-pillPrice">Price : ${artifact.cost}</div>`;

        cards.appendChild(card);
    });
}

getArtifacts();