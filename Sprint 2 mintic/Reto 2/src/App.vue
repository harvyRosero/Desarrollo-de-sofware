<template>
  <div id="app">

  <top-banner></top-banner>

  <div id="services" class="container-fluid bg-secondary mt-2">
      <PageServices></PageServices>
  </div>

  <div id="news" class="container-fluid bg-light">
            <SectionApi></SectionApi>
  </div>

  <div id="team" class="container-fluid">
    <div class="row justify-content-center mb-5">
      <div class="col mt-5" v-for='(item, index) of team' :key="index">

        <TeamCard v-bind:member="item"></TeamCard>

      </div>
    </div>
  </div>

    <PageFooter></PageFooter>

  </div>
</template>

<script>

import PageFooter from './components/PageFooter.vue';
import TeamCard from './components/TeamCard.vue';
import SectionApi from './components/SectionApi.vue';
import PageServices from './components/PageServices.vue';
import TopBanner from '@/components/TopBanner'

export default {
  name: 'App',
  components:{
    PageFooter,
    TeamCard,
    SectionApi,
    PageServices,
    TopBanner
  },
  data(){
    return{
      team: [
        {
          codigo : 1,
          nombre: 'Juan Perez',
          descripcion : 'inteligente, eficaz, eficiente',
          rol : 'back-end',
          imagen: 'https://placeimg.com/192/192/any'
          },
        {
          codigo : 2,
          nombre: 'carlos Muñoz',
          descripcion : 'dedicado, colaborador',
          rol : 'Desarrollador Web',
          imagen: "https://placeimg.com/192/192/people"
        },
        {
          codigo : 3,
          nombre: 'Benito Suarez',
          descripcion : 'amigable, aodaz, eficaz',
          rol : 'Diseñador Web',
          imagen: 'https://placeimg.com/192/192/tech'

        },
        {
          codigo : 4,
          nombre: 'Maria Castillo',
          descripcion : 'productiva, amable',
          rol : 'Scrum Master',
          imagen: 'https://placeimg.com/192/192/arch'

        },
        {
          codigo : 5,
          nombre: 'Pedro Sanchez',
          descripcion : 'estudioso, inteligente',
          rol : 'Front-end',
          imagen: 'https://placeimg.com/192/192/nature'

        },
      ]
    }
  }
}
</script>

