// const tareaUno = document.querySelector('#uno')
// const action = () =>{
//     const textUno = document.querySelector('#textUno')
//     textUno.classList.toggle('text-decoration-line-through')
// }
// tareaUno.addEventListener('click', action)




//Boton de crear
const btnTarea = document.querySelector('#btnTarea')
//Input dibde se escribe la tarea
const creaTarea = document.querySelector('#creaTarea')


let value = ''

//Evento 
creaTarea.addEventListener('change', (e) => {
    value = e.target.value
})

//Crea la tarea
let contador = 0
const crearTareita = () => {

    if(value != ''){
        contador = contador+1;
        const div = 
        `<div id="padre-${contador}">
            <div class="form-check  card-body d-flex ">
                <input  id="tarea-${contador}" class="form-check-input text-center" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label aqua" for="defaultCheck1">
                    <p id="parrafo-${contador}">${value}</p>
                </label>

                <div>
                     <button id="btnDelete-${contador}" class="btn btn-danger">
                     Eliminar
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>     
                </div>
                </div>
            </div>  
        </div>
        `
    
        const tareas = document.querySelector('#tareas')
        tareas.insertAdjacentHTML('afterbegin', div)
    
    
        const checkboxCreado = document.querySelector(`#tarea-${contador}`)
        const parrafoCreado = document.querySelector(`#parrafo-${contador}`)

        const btnEliminar = document.querySelector(`#btnDelete-${contador}`)
        const padreCreado  = document.querySelector(`#padre-${contador}`)
        btnEliminar.addEventListener('click', () =>{
            padreCreado.remove()
        })

        checkboxCreado.addEventListener('click', () =>{

            parrafoCreado.classList.toggle('.aqua')
            parrafoCreado.classList.toggle('text-decoration-line-through')
        })
    
        creaTarea.value = ''
        value = ''
    }
    else{
        alert('Vuelve a intentarlo, esta vacio')
    }
    
}

//Evento que escucha el click de crear Tarea
btnTarea.addEventListener('click', crearTareita)









// const crearTarea =() =>{
//     const div = document.createElement('div')
//     div.classList.add('form-check')
//     const input = document.createElement('input')
//     input.type = 'checkbox'
//     input.id = 'dos'
//     input.classList.add('form-check-input')
//     const label = document.createElement('label')
//     label.classList.add('form-check-label')
//     const parrafo = document.createElement('p')
//     parrafo.id = 'textoDos'
//     parrafo.textContent = value
//     div.insertAdjacentElement('afterbegin', label)
//     div.insertAdjacentElement('afterbegin', input)
//     label.insertAdjacentElement('afterbegin', parrafo)
//     const tareas = document.querySelector('#tareas')
//     tareas.insertAdjacentElement('afterbegin', div)
// }

// btnTarea.addEventListener('click', crearTarea)