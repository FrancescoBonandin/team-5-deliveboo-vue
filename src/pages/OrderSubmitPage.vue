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
<div class="container-fluid submit-page position-relative border">
  <div class="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
      <div class="col-10 ">
          <div v-for="product in cart" class="light-bg-card mb-3 text-center p-2">
  
            <h4 class="card-title">
              {{ product.name }} X {{ product.quantity }}
            </h4>

            <div class="row justify-content-between align-items-center">
                
                <div class="col-5">
                  <img :src="product.full_image" alt="" class="img-fluid rounded-3">

                </div>

                <div class="col-7">

                  <div>
                    {{ product.ingredients }}
                  </div>

                  <div>
                    {{ product.description }}
                  </div>
                  
                  <div>
                    partial price:{{ product.price*product.quantity}}
                  </div>

                </div>
              </div>
          </div>
  
          <div class="light-bg-card text-center p-2">
            <h3>
                Dati Ordine
            </h3>

            <div v-for="info in store.content.customerInfo">
                {{info}}
            </div>

            <button @click="SendOrder() " class="btn btn-primary">
                conferma l' ordine
            </button>
              
          </div>
      </div>
  </div>
  
</div>

</template>

<style lang="scss" scoped>
  .submit-page {
    background-image: url('../../public/img/deliveboo client simple 2.jpg');

    background-size: cover;

    background-position: bottom;

    min-height: calc(100vh - 7.1875rem);
  }


</style>