<template>
    <div>
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>
        <form class="d-flex">
        <button @click.prevent="logOutUser" class="btn btn-outline-success" type="submit">Salir</button>
        </form>
        </div>
    </nav>

    <ul class="list-group">
        <li class="list-group-item"><span>Nombre: </span> {{ user.nombre }} </li>
        <li class="list-group-item"><span>Nombre: </span> {{ user.email }} </li>
        <li class="list-group-item"><span>Nombre: </span> {{ user.rol }} </li>
    </ul>
    </div>
</template>

<script>
export default{
    name:'TheHome',
    methods:{
        logOutUser(){
            localStorage.removeItem('jwt')
            localStorage.removeItem('user')
            this.$router.push('/')
    },
    getUserData(){
        let token = localStorage.getItem('jwt')
        let user = localStorage.getItem('user')
        this.user = JSON.parse(user)
        console.log(user)
    }
    },
    created(){
        this.getUserData()
    }
    
}
</script>