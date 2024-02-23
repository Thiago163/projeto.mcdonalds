// script.js

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    var draggedElement = document.getElementById(data);

    if (event.target.classList.contains('uhc')) {
        var uhcSlots = document.querySelectorAll('.uhc .drawerT');
        for (var i = 0; i < uhcSlots.length; i++) {
            if (!uhcSlots[i].hasChildNodes()) {
                var clonedElement = draggedElement.cloneNode(true);
                uhcSlots[i].appendChild(clonedElement);
                
                // Adiciona a imagem à nova coluna
                var imageSrc = draggedElement.parentElement.getAttribute('data-image');
                var imageElement = document.createElement('img');
                imageElement.src = imageSrc;
                imageElement.alt = clonedElement.textContent + ' Image';
                clonedElement.innerHTML = ''; // Limpa o conteúdo existente
                clonedElement.appendChild(imageElement);
                
                // Adiciona o nome do item abaixo da imagem
                var itemName = document.createElement('span');
                itemName.textContent = draggedElement.textContent;
                itemName.className = 'item-name';
                clonedElement.appendChild(itemName);

                // Oculta o nome do item original
                draggedElement.querySelector('.item-name').style.display = 'none';
                
                break;
            }
        }
    }
}

function allowDrop(event) {
    event.preventDefault();
}