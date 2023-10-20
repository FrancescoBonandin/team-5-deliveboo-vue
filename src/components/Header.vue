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

      store,

    }

  },

  methods:{

    
  }
  
}

</script>

<template>

  <navComponent/>

  <cartComponent

  :productsPrices = store.content.productsPrices

  :cart = store.content.cart

  :displayables = store.content.displayables

  />

</template>

<style lang="scss">



</style>