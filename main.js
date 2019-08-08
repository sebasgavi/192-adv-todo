window.addEventListener('load', () => {

    var tempTasks = localStorage.getItem('tasks');
    var tasks = tempTasks ? JSON.parse(tempTasks) : [];

    var undoList = [];

    function render(){
        var box = renderBox();

        var list = box.querySelector('.content__tareas');

        var input = box.querySelector('.content__input');
        input.addEventListener('keydown', newTask);
        function newTask(event){
            if(event.keyCode === 13){
                tasks.push({
                    text: input.value,
                    checked: false,
                });
                render();
            }
        }


        // crear tasks desde arreglo de objetos
        tasks.forEach((task, index) => {
            function onChecked(event){
                task.checked = event.target.checked;
                render();
            }
            function onRemove(){
                tasks.splice(index, 1);
                render();
            }
            list.append( createTask(task.text, task.checked, onChecked, onRemove) );
        });
    
        // crear toolbar
        var itemsLeft = tasks.reduce((total, task) => {
            if(!task.checked) {
                total++;
            }
            return total;
        }, 0);
        if(tasks.length > 0){
            var toolbar = createToolbar(itemsLeft);
            var box = document.querySelector('.content__caja');
            box.append(toolbar);
        }

        // .slice() crea una copia superficial
        // var temp = tasks.slice();
        var temp = JSON.parse(JSON.stringify(tasks));
        // guardamos la copia
        undoList.push(temp);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // render inicial
    render();

    window.addEventListener('keydown', (event) => {
        if(event.ctrlKey && event.keyCode === 90){
            var deleted = undoList.splice(undoList.length - 2, 2);
            tasks = deleted[0];
            render();
        }
    });

});