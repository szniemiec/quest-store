const container = document.querySelector(".students")

function getStudents() {
    fetch('http://localhost:8000/mentor/students')
        .then(function (response) {
            // const mentors = response.clone().json()
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (students) {
            innerStudents(students);
        })
}
function innerStudents(students) {
    const table = document.querySelector(".tbody");

    students.forEach(student => {
        let row = document.createElement("tr");

        row.innerHTML =
            `<td>${student.id}</td>` +
            `<td>${student.firstName}</td>` +
            `<td>${student.lastName}</td>` +
            `<td>${student.accountCredentials.login}</td>` +
            `<td>${student.accountCredentials.email}</td>` +
            `<td>${student.accountCredentials.module}</td>`+
            `<td></td><a href="edit_student.html"> <input type="submit" name="button" value="Edit"></a></td>`;
        table.appendChild(row);
    });
}

getStudents();