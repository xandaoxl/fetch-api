// Fetch API

const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
    fetch('https://63e7c552ac3920ad5be36b95.mockapi.io/produtos')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                output.innerHTML += `
                    <img width="300" src="${item.img}" alt="${item.titulo}" />
                    <p>${item.titulo}</p>
                    <div style="display: flex; align-items: center; justify-content: flex-start; gap: 4px;">
                        <s>${item.valor}</s>
                        <p>${item.desconto}</p>
                    </div>
                `;
            });
        });
});