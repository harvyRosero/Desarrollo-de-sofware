Vue.component('ComponenteTareas',{
    template:
    `
    <div class="container mt-1">

        <h3> {{ subtitulo }} </h3>
        
        <input type="text" class="form-control" v-model="nuevaTarea" @keyup.enter="agregarTarea">
        <button class="btn btn-info w-100 mt-2" v-on:click="agregarTarea">Agregar</button>

        <input type="checkbox" v-model="checked" id="checkbox">
        <label for="chechbox">Realizada?</label>

    <div class="container mt-3" v-for="(item, index) of tareas" :key="item.id">
        <div class="alert" :class="item.estado ? 'alert-primary' : 'alert-danger'">
            <div class="d-flex justify-content-between align-items-center">
                <div> {{ item.nombre }} </div>
                <div> {{ item.estado }} </div>

                    <div>
                        <button class="btn btn-success" v-on:click="editarTarea(index)">OK</button>
                        <button class="btn btn-danger" v-on:click="eliminarTarea(index)">X</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`,
data(){
    return{
        nuevaTarea: '',
        tareas: [],
        checked: false,
    }
},
props:{
    subtitulo: String,
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