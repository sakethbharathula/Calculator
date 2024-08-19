// Declare a variable to store the person object
let person = null;

// Function to create a Person object
function createPerson() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);

    // Create the Person object
    person = {
        firstName: firstName,
        lastName: lastName,
        age: age,

        // Method to get the full name
        getFullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        // Method to increment age
        incrementAge: function() {
            this.age++;
        }
    };

    // Display the person's full name and age
    displayPersonInfo();
}

// Function to increment the person's age
function incrementPersonAge() {
    if (person) {
        person.incrementAge();
        displayPersonInfo();
    } else {
        document.getElementById('result').innerText = 'Please create a person first!';
    }
}

// Function to clear inputs and reset the display
function clearInputs() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('result').innerText = '';
    person = null; // Reset the person object
}

// Function to display the person's full name and age
function displayPersonInfo() {
    const result = document.getElementById('result');
    result.innerText = `Full Name: ${person.getFullName()}, Age: ${person.age}`;
}
