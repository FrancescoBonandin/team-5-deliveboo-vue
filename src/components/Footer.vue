<script >

import { store } from "../js/store";

import infoComponent from '../components/FooterComponent/Info.vue'
  
export default {

  components:{

    infoComponent

  },

  data(){

    return {

      store,

    }

  },

  computed:{


  },


  methods:{


  }
  
}

</script>

<template>

  <footer class="container-fluid footer-height bg-footer-color">

    <infoComponent/>

  </footer>

</template>

<style lang="scss" scoped>

@use '../scss/style.scss';

footer{

  // background-image:url( '../../public/img/footer bg.jpg');

  // background-size:cover;

  // background-position: bottom;

}


</style>