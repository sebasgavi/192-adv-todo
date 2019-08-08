function createToolbar(itemsLeft){
    var toolbar = document.createElement('div');
    toolbar.setAttribute('class', 'content__herramientas');
    toolbar.innerHTML = `
        <p class="content__cantidad">${itemsLeft} items left</p>
        <button class=" btn btn-outline-secondary content__boton" id="botton__todos">All</button>
        <button class=" btn btn-outline-secondary content__boton" id="botton__activos">Active</button>
        <button class=" btn btn-outline-secondary content__boton" id="botton__completados">Completed</button>
        <p class="content__completadas">Clear Completed</p>
    `;
    return toolbar;
}