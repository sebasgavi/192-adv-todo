function paginaCargada() {

    var input = document.querySelector(".content__input");
    var tareas = document.querySelector(".content__tareas");
    var numeroT = document.querySelector(".content__cantidad");
    var elimComp = document.querySelector(".content__completadas");
    var marcarTodas = document.querySelector(".content__selTodas");  
    var filtroTodos = document.getElementById("botton__todos");
    var filtroCompletados = document.getElementById("botton__completados");
    var filtroActivos = document.getElementById("botton__activos");

    var contadorTareas = 0;

        function agregarTarea(event){

            if(event.keyCode === 13){

                var texto = input.value;
                tareas.style.display= "flex";
                function tareaNueva(texto){

                    var tarea = document.createElement('div');
                    tarea.className = ('content__tarea');

                    var tareaCb = document.createElement('input');
                    tareaCb.className = ('content__cb');
                    tareaCb.type='checkbox';

                    var tareaLabel = document.createElement('input');
                    tareaLabel.className = ('content__label');
                    tareaLabel.type='text';
                    tareaLabel.disabled= true;
                    tareaLabel.value=texto;

                    var tareaBt = document.createElement('button');
                    tareaBt.innerHTML=`X`;
                    tareaBt.className = ('content__cerrar');

                    tarea.innerHTML= ``;
                    tarea.appendChild(tareaCb);
                    tarea.appendChild(tareaLabel);
                    tarea.appendChild(tareaBt);

                    tareas.appendChild(tarea);

                    input.value='';
                    contadorTareas += 1;
                    numeroT.innerHTML = ``+contadorTareas+` items left`;

                    function modificarEstado(){

                        if(tareaCb.checked === true){
                            tareaLabel.style.textDecoration= "line-through";
                            tareaLabel.style.color= "lightgray";
                            contadorTareas -=1;
                            numeroT.innerHTML = ``+contadorTareas+` items left`;
                        } else {
                            tareaLabel.style.textDecoration= "none";
                            tareaLabel.style.color= "black";
                            contadorTareas +=1;
                            numeroT.innerHTML = ``+contadorTareas+` items left`;
                        }

                    }
                    tareaCb.addEventListener('click', modificarEstado );
                    
                    function modificarTodos(){
                        if(tareaCb.checked === false){
                            tareaCb.checked = true;
                            modificarEstado();
                            marcarTodas.style.backgroundColor= 'rgb(108, 117, 125)';
                            marcarTodas.style.color= 'white';

                        } else{
                            tareaCb.checked = false;
                            modificarEstado();
                            marcarTodas.style.backgroundColor= 'white';
                            marcarTodas.style.color=  'rgb(108, 117, 125)';

                        }
                    }
                    marcarTodas.addEventListener('click', modificarTodos );

                    function editarTarea(){
                        tareaLabel.disabled= false;
                        tareaLabel.focus();
                    }
                    tarea.addEventListener('dblclick', editarTarea );

                    function desactivarTarea(){
                        tareaLabel.disabled= true;
                    }
                    window.addEventListener('click', desactivarTarea );

                    function eliminarTarea(){
                        tarea.remove();
                        numeroT.innerHTML = ``+contadorTareas+` items left`;
                    }
                    tareaBt.addEventListener('click', eliminarTarea );

                    function filtrarTodos(){
                        tarea.style.display = "flex"
                    }
                    filtroTodos.addEventListener('click', filtrarTodos );

                    function filtrarActivos(){
                        if(tareaCb.checked === true){
                            tarea.style.display = "none"
                        } else {
                            tarea.style.display = "flex"
                        } 
                    }
                    filtroActivos.addEventListener('click', filtrarActivos );

                    function filtrarCompletados(){
                        if(tareaCb.checked === true){
                            tarea.style.display = "flex"
                        } else {
                            tarea.style.display = "none"
                        } 
                    }
                    filtroCompletados.addEventListener('click', filtrarCompletados );

                    function eliminarCompletadas(){
                        if(tareaCb.checked === true){
                            tarea.remove();
                        }
                    }
                    elimComp.addEventListener('click', eliminarCompletadas );
                }

                tareaNueva(texto);

            }

        }
        input.addEventListener('keydown', agregarTarea); 

}

window.addEventListener('load', paginaCargada);