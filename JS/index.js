document.getElementById('tareaFormulario').addEventListener('submit', guardarTarea);

function guardarTarea (e){

    let titulo = document.getElementById('nombreTarea').value;
    let detalle = document.getElementById('detalleTarea').value;

    const tarea = {
        titulo,
        detalle
    };

    if(localStorage.getItem('tareas') === null) {
        let tareas = [];
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    } else {
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }


    enviarTarea();
    document.getElementById('tareaFormulario').reset();
    e.preventDefault();
}

function enviarTarea() {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    let tasksView = document.getElementById('tareas');

    tasksView.innerHTML = '';

    for(let i = 0; i < tareas.length; i++) {
        let titulo = tareas[i]. titulo;
        let detalle = tareas[i].detalle;

        tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
        <p>${titulo} - ${detalle}</p>
        <a class="btn btn-danger" onclick="eliminarTarea('${titulo}')">
        Eliminar
        </a>
        </div>
        </div>`
    }
}

function eliminarTarea(titulo) {
    let tareas =JSON.parse(localStorage.getItem('tareas'));
    for(let i = 0; i < tareas.length; i++) {
        if (tareas[i].titulo == titulo){
            tareas.splice(i, 1);
        }
    }
    localStorage.setItem('tareas', JSON.stringify(tareas));
    enviarTarea();
}

enviarTarea()