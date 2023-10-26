<script >

import { store } from "../js/store"

import navComponent  from '../components/HeaderComponent/Nav.vue';

export default {

  components:{

    navComponent,

  },

  data(){

    return {

  

    }

  },

  methods:{

    
  }
  
}

</script>

<template>

  <header id="nav-height-container" class="custom-shadow  d-flex aling-item-center p-0 z-3 bg-white">

    <navComponent/>

  </header>

</template>

<style lang="scss" >
@use '../scss/style.scss';

#nav-height-container{

  height: 7.1875rem;

  position: fixed;

  top:0;

  right:0;

  left:0;

}

</style>