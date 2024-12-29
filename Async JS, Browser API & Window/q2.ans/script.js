// Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Initialize the request with the API endpoint
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

// Define the callback to process the response
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // Ensure the request is complete
        if (xhr.status === 200) { // Ensure the request is successful
            // Parse the JSON response
            let users = JSON.parse(xhr.responseText);

            // Log a list of user names to the console
            console.log("User Names:");
            users.forEach(user => console.log(user.name));

            // Output user names on the page
            let output = document.getElementById('output');
            users.forEach(user => {
                let p = document.createElement('p');
                p.textContent = user.name;
                output.appendChild(p);
            });
        } else {
            console.error('Error fetching data:', xhr.status);
        }
    }
};

// Send the request
xhr.send();

