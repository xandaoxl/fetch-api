// Fetch API

const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
    fetch('https://63e7c552ac3920ad5be36b95.mockapi.io/produtos')
        .then(response => response.json())
        .then(data => {
            output.innerHTML = data.value;
        });
});
