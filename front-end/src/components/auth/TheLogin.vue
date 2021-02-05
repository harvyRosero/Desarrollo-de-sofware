<template>
    <div class="container login mt-5">
        <h3 class="text-center mt-3">Login</h3>
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input placeholder="prueba@gmail.com" v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input placeholder="micontraseña" v-model="login.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button @click.prevent="loginUser" type="submit" class="btn btn-primary mb-2">Ingresar</button>
        </form>
    </div>
</template>

<script>
import swal from 'sweetalert'

export default{
    name: 'TheLogin',
    data(){
        return{
            login:{
                email: '',
                password: ''
            }
        }
    },
    methods:{
        async loginUser(){
            // console.log(this.login)
            try {
                let response = await this.$http.post('/api/usuario/login', this.login)
                // console.log(response.data)

                let token =  response.data.tokenReturn
                let user = response.data.user
                // console.log(user)

                localStorage.setItem('jwt', token)
                localStorage.setItem('user', JSON.stringify(user))

                if(token){
                swal('OK', 'Datos cargados correctamente', 'success')
                this.$router.push('/home')
                }
            }catch (error) {
                swal('Opps!', 'algo salio mal!', 'error')
                console.log(error)
            }
            

        }
    }
}
</script>

<style>
    .login{
        background-color: #dff2f1;
        width: 500px;
        border-radius: 10px;
        border: 3px solid #52faf4;
    }
    h3{
        margin: 20px, 20px, 20px, 20px;
        font-family: sans-serif;
    }
</style>