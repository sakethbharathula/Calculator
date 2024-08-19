function calculateEvenSum() {
   
    let input = document.getElementById('numberArray').value;
    let numbers = input.split(' ').map(Number); // Convert strings to numbers

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }

    document.getElementById('result').innerText = 'Sum of even numbers: ' + sum;
}
