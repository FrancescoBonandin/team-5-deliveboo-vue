<script >

import { store } from "../js/store"

import navComponent  from '../components/HeaderComponent/Nav.vue';

import cartComponent  from '../components/HeaderComponent/Cart.vue';

export default {

  components:{

    navComponent,

    cartComponent,

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

  <navComponent/>

  <cartComponent/>

</template>

<style lang="scss">



</style>