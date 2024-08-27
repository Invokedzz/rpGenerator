async function doFetch() {
    try {
        const response = await fetch("/toRPG/items.json");
        
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        if (!Array.isArray(data.items)) throw new Error('Expected an array under "items" key');
        doingtherpg(data.items); // O PROBLEMA TAVA AQUI

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    };
}

function doingtherpg(items) {
    const table = document.createElement('table');

    for (let item of items) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.classList.add('elements-name');
        td1.innerHTML = item.name;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.classList.add('elements-description');
        td2.innerHTML = item.description;
        tr.appendChild(td2);

        table.appendChild(tr);
        table.classList.add('elements-table');
    }
    const masterDiv = document.querySelector('.chatblock');
    masterDiv.appendChild(table);
}


doFetch();