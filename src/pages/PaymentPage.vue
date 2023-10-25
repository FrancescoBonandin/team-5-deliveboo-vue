<script >

import axios from 'axios';
import {router} from '../js/router'

export default {


  components:{

    
    

  },

  data(){

    return {

    restaurants : [],

    selectedCategories : [],

    categories : [],

    filteredRestaurants : [],

    showData : false,

    }

  },

  computed:{

    

  },

  methods:{

    

    

  
  },

  mounted(){

    let button = document.querySelector('#submit-button');

      braintree.dropin.create({
        authorization: 'sandbox_8hfxqwnd_96dqcdztsrmx69jf',
        container: '#dropin-container'

      },
       function (createErr, instance ) {
        button.addEventListener('click', function () {
          instance.requestPaymentMethod(function (requestPaymentMethodErr, payload ) {
            if (payload) {
              return router.push({name : 'OrderSubmit'})
              // console.log(payload)
              
            }
            else{
              
              // console.log('Hai sbagliato')
              
            }

          });
        });
      }
      );

  }

}
  
</script>

<template>

<div class="container">
  <div class="row justify-content-center align-items-center">
    <div class="col-6">
      <div id="dropin-container"></div>
        <button id="submit-button">Request payment method</button>
    </div>
  </div>
</div>

</template>

<style lang="scss">



</style>