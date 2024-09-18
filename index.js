const submitButton = document.getElementById("submitButton");
// tracks member#
let memberNumberTrack = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let username = document.getElementById('username').value;
        
        console.log(firstName, lastName, username);
        
        // create new row
        let createRow = document.createElement('tr');

        // add member#
        let memberNumber = document.createElement('td');
        memberNumber.innerHTML = memberNumberTrack;
        createRow.append(memberNumber);
                
        memberNumberTrack++;    
        // add first name
        let firstNameEntry = document.createElement('td');
        firstNameEntry.innerHTML = firstName;
        createRow.append(firstNameEntry);
        
        // add last name
        let lastNameEntry = document.createElement('td');
        lastNameEntry.innerHTML = lastName;
        createRow.append(lastNameEntry);

        // add username
        let usernameEntry = document.createElement('td');
        usernameEntry.innerHTML = username;
        createRow.append(usernameEntry);
        
        console.log(createRow);

        // append the new row to the table 
        let table = document.getElementById('bootstrapTable');
        table.append(createRow);
    });
});