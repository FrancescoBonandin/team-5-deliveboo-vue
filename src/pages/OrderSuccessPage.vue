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

   
 }

}


</script>

<template>

<div class="row">
    <div class="col">

      <h2>
        Grazie, la tua transazione è andata a buon Fine
      </h2>

      <h4>
        a breve verrà inviata una mail di conferma a te e al ristoratore da cui hai acquistato.
      </h4>

      <p>
        Sei ancora affamato? Fatti un'altro giro tra i nostri ristoranti e riempi quello spaziettino
      </p>

      <router-link :to="{name:'home' }">
        Ho fame!
      </router-link>
         
    </div>
</div>

</template>

<style lang="scss" scoped>



</style>