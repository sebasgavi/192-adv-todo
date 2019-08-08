function renderBox(){
    var box = document.querySelector('.content__caja');
    box.innerHTML = `
        <div class="content__superior">
            <button class=" btn btn-outline-secondary dropdown-toggle content__selTodas"></button>
            <input class="form-control content__input" placeholder="What needs to be done?" type="text">
        </div>
        <div class="content__tareas"></div>
    `;
    return box;
}