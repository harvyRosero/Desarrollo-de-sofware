
<template>
        <div>
        <div class="row mt-md-5 mt-sm-5 mt-xs-5">
            <div class="col-lg-6 col-xs-12" v-for='(movie, index) of movies' :key="index">
                <div class="d-flex justify-content-center align-items-center"  >
    
                    <div class="p-3">
                        <img :src= 'movie.Poster' alt="img-poster">
                    </div>
    
                    <div class="p-2">
                        <h3> {{movie.Title}} </h3>
                    </div>
    
                </div>

                <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                    <a :href='"https://www.imdb.com/title/" + movie.imdbID' class="btn btn-primary" target="_blank">IMDB</a>
                </div>
            </div>
            </div>
        </div>
        
</template>

<script>

import axios from 'axios'

export default {
    name: 'SectionApi',
    data(){
        return{
            movies: null,
        }
    },
        mounted (){
        axios.get('https://omdbapi.com/?s=harry+potter&type=movie&apikey=23daade9')
        .then(response => {
            (this.movies = response.data.Search.slice(0,4))
            console.log(this.movies)    
        })
    }
}

</script>

<style scoped>
</style>