<script>

import { store } from "../js/store";
import axios from 'axios'
  
export default {

  components:{


  },

  data(){

    return {

      store,

    }

  },

  computed:{


  },


  methods:{

    retriveCart(){

      this.store.content.paid = false

    }

   
 }

}


</script>

<template>
<div class="container-fluid success-container position-relative">
  <div class="row">
      <div class="col-8 text-center light-bg-card position-absolute top-50 start-50 translate-middle">
  
        <h2 class="text-success">
          Grazie, la tua transazione è andata a buon fine
        </h2>
  
        <p>
          a breve ti verrà  inviata una mail di conferma dell'ordine .
        </p>
  
        <p>
          Vuoi ancora ordinare? Clicca il bottone qui sotto e fatti un'altro giro tra i nostri ristoranti
        </p>
  
        <router-link :to="{name:'home' }">
          <button @click="retriveCart()" class="btn btn-primary mb-2">
            Torna alla Home
          </button>
        </router-link>
           
      </div>
  </div>
  
</div>

</template>

<style lang="scss" scoped>

.success-container {
  background-image: url('../../public/img/deliveboo client simple 2.jpg');

  background-size: cover;

  background-position: bottom;

  min-height: calc(100vh - 7.1875rem);

  
  
}


</style>