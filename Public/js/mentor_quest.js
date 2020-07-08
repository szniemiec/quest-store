const container = document.querySelector(".cards")

function getQuests() {
    fetch('http://localhost:8000/quests')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (quests) {
            innerQuests(quests);
        })
}

function innerQuests(quests) {
    let cards = document.querySelector(".cards")
    quests.forEach(quest => {

        let card = document.createElement("div");
        card.setAttribute('class', 'card');
        card.innerHTML =
            `<div class="card-title">${quest.name}</div>` +
            `<div class="card-description">${quest.description}</div>` +
            `<div class="card-pillPrice">Price : ${quest.reward}</div>`;

        cards.appendChild(card);
    });
}

getQuests();