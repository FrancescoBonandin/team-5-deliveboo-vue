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

          }, function (createErr, instance ) {
            button.addEventListener('click', function () {
              instance.requestPaymentMethod(function (requestPaymentMethodErr, payload ) {
                if (payload) {
                  // return router.push({name :  'home'})
                  
                  
                }
                else{
                  // requestPaymentMethodErr
                  console.log('Hai sbagliato')
                 

                }

              });
            });
          });

  }

}
  
</script>

<template>

<div class="container">
  <div class="row justify-content-center align-items-center">
    <div class="col-6">
      <div id="dropin-container"></div>
        <button id="submit-button">Request payment method</button>
        <!-- <script>
          let button = document.querySelector('#submit-button');

          braintree.dropin.create({
            authorization: 'sandbox_8hfxqwnd_96dqcdztsrmx69jf',
            container: '#dropin-container'
          }, function (createErr, instance) {
            button.addEventListener('click', function () {
              instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
                // Submit payload.nonce to your server
              });
            });
          });
        </script> -->
    </div>
  </div>
  
  <div class="row" v-if="showData">
    <div class="col-6">
      <form action="">
        <div class="form-floating">

          <label class="form-label" for="name">Name</label>

          <input class="form-control" id="name" type="text" name="name" placeholder="client name" required>

        </div>

        <div class="form-floating">

          <label class="form-label" for="last-name">Last Name</label>

          <input class="form-control" id="last-name" type="text" name="last_name" placeholder="client last name" required>

        </div>

        <div class="form-floating">

          <label class="form-label" for="address">Address</label>

          <input class="form-control" id="address" type="text" name="address" placeholder="client address" required>

        </div>

        <div class="form-floating">

          <label class="form-label" for="phone-number">Phone</label>

          <input class="form-control" id="phone-number" type="tel" name="phone_number" placeholder="clientphonenumber" required>

        </div>

        <div class="form-floating">

          <label class="form-label" for="email">Email</label>

          <input class="form-control" id="email" type="email" name="email" placeholder="client email" required>

        </div>

        <input type="submit" />

      </form>
      
    </div>
  </div>




</div>





  




</template>

<style lang="scss">



</style>