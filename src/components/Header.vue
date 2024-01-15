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

  <header id="nav-height-container" class="custom-shadow  border border-light d-flex aling-item-center p-0 z-3 bg-white">

    <navComponent/>

  </header>


</template>

<style lang="scss" >
@use '../scss/style.scss';

#nav-height-container{

  height: 7.1875rem;

  position:fixed;

  top:0;

  bottom:100%;

  right:0;

  left:0;

}

// .under-layer{

//   height: 7.375rem;

//   width: 100vw;

//   background-color: black;

//   z-index:-1000000





// }


</style>