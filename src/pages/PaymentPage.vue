<script >

import axios from 'axios';

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

    findRestaurant(){

      axios.get('http://127.0.0.1:8000/api/filteredRestaurants', {

      params: {

          'selectedCategories': this.selectedCategories

      }

      })

    .then(response => {

        // Handle the response data
        console.log(response.data);

        this.filteredRestaurants = response.data.restaurants

        console.log(response.data);

    })
    .catch(error => {

        // Handle any errors
        console.error(error);

    });

    }

  
  },

  mounted(){

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
</div>


  




</template>

<style lang="scss">



</style>