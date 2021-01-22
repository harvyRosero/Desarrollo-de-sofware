const app = new Vue({
    el: '#app',
    data:{
        titulo: 'CRUD con Vue',
        nuevaTarea: '',
        tareas: [],
        checked: false,
        // dataTareas
    },
    methods:{
        agregarTarea(){
            if(this.nuevaTarea){
                this.tareas.push({
                    nombre: this.nuevaTarea,
                    estado: this.checked,
                })
                this.nuevaTarea = ''
                this.checked = false
                localStorage.setItem('dataTareas', JSON.stringify(this.tareas))

            }
        },
        editarTarea(index){
            if(!this.tareas[index].estado){
                this.tareas[index].estado = true
                localStorage.setItem('dataTareas', JSON.stringify(this.tareas))
            }else{
                this.tareas[index].estado = false
                localStorage.setItem('dataTareas', JSON.stringify(this.tareas))

            }
        },
        eliminarTarea(index){
            if(!this.tareas[index].estado){
                this.tareas.splice(index, 1)
                localStorage.setItem('dataTareas', JSON.stringify(this.tareas))
            }
        }
    },
    created(){
        let datosDB = JSON.parse(localStorage.getItem('dataTareas'))
        if(datosDB === null){
            this.tareas = []
        }else{
            this.tareas = datosDB
        }
    }
})