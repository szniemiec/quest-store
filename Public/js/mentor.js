const container = document.querySelector(".mentors")

function getMentors() {
    fetch('http://localhost:8000/mentor')
        .then(function (response) {
            // const mentors = response.clone().json()
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (mentors) {
            innerMentors(mentors);
        })
}
function innerMentors(mentors) {
    const table = document.querySelector(".tbody");
    mentors.forEach(mentor => {
        let row = document.createElement("tr");

        row.innerHTML =
            `<td>${mentor.id}</td>` +
            `<td>${mentor.firstName}</td>` +
            `<td>${mentor.lastName}</td>` +
            `<td>${mentor.accountCredentials.login}</td>` +
            `<td>${mentor.accountCredentials.email}</td>`;

        table.appendChild(row);
    });
}

getMentors();