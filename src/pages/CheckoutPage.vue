<script >

import axios from 'axios';
import {router} from '../js/router'
import { store }from '../js/store'

export default {


  components:{

    
    

  },

  data(){

    return {

    store,

    dbErrors : '',

    }

  },

  computed:{

    

  },

  methods:{
    checkOrder(){

     let data={ 
          cart_total_price: JSON.parse(localStorage.getItem('total_price')).toFixed(2),
          cart_products: JSON.parse(localStorage.getItem('cart')),

          customer_name: this.store.content.customerInfo.name,
          customer_last_name: this.store.content.customerInfo.last_name,
          customer_address: this.store.content.customerInfo.address,
          customer_phone_number: this.store.content.customerInfo.phone_number,
          customer_email: this.store.content.customerInfo.email,
          restaurant_id: JSON.parse(localStorage.getItem('cart'))[0].restaurant_id,
        }

        console.log(data)

      axios.post('http://127.0.0.1:8000/api/orders/', data,{
        headers:{'Content-Type':'multipart/form-data' }
      }
   )

      .then(response =>{
        // console.log(response.data)
        if( response.data.orders=='ok'){

          return router.push({name : 'PaymentPage'})
        //   console.log('funziona')

        }

      })

      .catch(err=>{

        if(err){
          
          console.log(err.response.data.errors)
          return this.dbErrors=err.response.data.errors;

        }

      })

    }

  },

  mounted(){

   

  }

}
  
</script>

<template>

<div class="container">
 
  <div class="row" >
    <div class="col-6">

      <div v-if="dbErrors" class="alert alert-danger">

        <div v-for="Singleerror in dbErrors" >
          {{Singleerror.toString()}}
        </div>

      </div>

      <form @submit.prevent="checkOrder()" >



        <div class="form-floating">

          <label class="form-label" for="name">Name</label>

          <input class="form-control" id="name" type="text" name="name" placeholder="client name" v-model="store.content.customerInfo.name" required>

        </div>

        <div class="form-floating">

          <label class="form-label" for="last-name">Last Name</label>

          <input class="form-control" id="last-name" type="text" name="last_name" placeholder="client last name" v-model="store.content.customerInfo.last_name" required>

        </div>

        <div class="form-floating">

          <label class="form-label" for="address">Address</label>

          <input class="form-control" id="address" type="text" name="address" placeholder="client address" v-model="store.content.customerInfo.address" required>

        </div>

        <div class="form-floating">

          <label class="form-label" for="phone-number">Phone</label>

          <input class="form-control" id="phone-number" type="tel" name="phone_number" placeholder="clientphonenumber" v-model="store.content.customerInfo.phone_number" required>

        </div>

        <div class="form-floating">

          <label class="form-label" for="email">Email</label>

          <input class="form-control" id="email" type="email" name="email" placeholder="client email" v-model="store.content.customerInfo.email" required>

        </div>

        <input type="submit"/>

      </form>
      
    </div>

  </div>




</div>





  




</template>

<style lang="scss">



</style>