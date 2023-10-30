<script>

import { store } from "../js/store";
import {router} from '../js/router'
import axios from 'axios'
  
export default {

  components:{


  },

  data(){

    return {

      store,

      cart:JSON.parse(localStorage.getItem('cart')),

      total_price:JSON.parse(localStorage.getItem('total_price')),

      dbErrors:null,

    }

  },

  computed:{


  },


  methods:{

    confirmedCheck(){

      this.store.content.paid = false

    },

    SendOrder(){

    let data={ 
        cart_total_price: JSON.parse(localStorage.getItem('total_price')),
        cart_products: JSON.parse(localStorage.getItem('cart')),

        customer_name: this.store.content.customerInfo.name,
        customer_last_name: this.store.content.customerInfo.last_name,
        customer_address: this.store.content.customerInfo.address,
        customer_phone_number: this.store.content.customerInfo.phone_number,
        customer_email: this.store.content.customerInfo.email,
        restaurant_id: JSON.parse(localStorage.getItem('cart'))[0].restaurant_id,

   }

   console.log(data)

 axios.post('http://127.0.0.1:8000/api/orders/submit', data,{
   headers:{'Content-Type':'multipart/form-data' }
 }
)

 .then(response =>{
   console.log(response.data)
   if( response.data.order=='ok'){

    console.log('funziona')
    localStorage.removeItem('cart');
    localStorage.removeItem('total_price');

    for(let key in this.store.content.customerInfo){

      this.store.content.customerInfo[key]=null

    }

    for(let key in data){

      data[key]=null

    }
    

      this.store.content.cart=new Set()

      this.store.content.currentPrice=0

      localStorage.setItem('total_price', JSON.stringify(this.store.content.currentPrice))

      localStorage.setItem('cart', JSON.stringify(this.store.content.cart))

      return router.push({name : 'OrderSuccess'})

    
  }

 })

 .catch(err=>{

   if(err){
     
     console.log(err)
    //  return this.dbErrors=err.response.data.errors;

   }

 })

},


  }
  
}

</script>

<template>

<router-link :to="{name :'CheckoutPage'}">

  <button class="btn btn-primary m-3"  @click="confirmedCheck()">

    indietro

  </button>

</router-link>

<div class="container-fluid d-flex align-item-center justify-content-center submit-page position-relative  p-2">

  <div class="row  w-75 justify-content-center align-items-center">

    <div class="light-bg-card text-center p-2 align-self-center col-lg-4  col-md-12 custom-shadow">

        <h3>

          Dati Ordine

        </h3>

        <div class="py-1" v-for="info in store.content.customerInfo">

          <span>{{info}}</span>

        </div>

        <button @click="SendOrder() " class="btn btn-primary m-1">

          conferma l' ordine

        </button>
          
    </div>

    <div class="col-lg-7 col-md-12 m-2 jumbo-client-container overflow-y-auto rounded  concave-shadow">

      <div v-for="product in cart" class="row light-bg-card mb-3 text-center p-2 my-1 custom-shadow ">
          
        <div class="col-lg-4 col-sm-12 justify-content-center aling-item-center  d-flex ">

          <div class="align-self-center">

            <h4 class="">

              {{ product.name }}

            </h4>

            <h4>

              X {{ product.quantity }}

            </h4>

          </div>

        </div>

        <div class="col-lg-6 col-sm-12 row justify-content-between ">
              
          <div class="col">
            
            <img :src="product.full_image" alt="" class="img-fluid rounded-3 foto-frame">

          </div>

        </div>

        <div class="col-lg-2 col-sm-12 d-flex">
              
          <div class="align-self-center justify-self-center m-auto ">

            <div>partial price:</div> 
            
            <div>{{ product.price*product.quantity}}&euro;</div>

          </div>

        </div>

      </div>

    </div>

  </div>
  
</div>

</template>

<style lang="scss" scoped>

@use '../scss/style.scss';
  .submit-page {
    background-image: url('../../public/img/deliveboo client simple 2.jpg');

    background-size: cover;

    background-position: bottom;

    min-height: calc(100vh - 7.1875rem);

    margin-top: 115px;
  }

.concave-shadow{

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

}
</style>