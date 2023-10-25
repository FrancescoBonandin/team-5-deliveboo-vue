<script>

import { store } from "../../js/store"
  
export default {

  components:{

    
  },

  props:{

  },

  data(){

    return {

      store,
      
    }

  },

  computed:{

    arrayCart(){

      let  arrayCart = Array.from(this.store.content.cart)

      return arrayCart

    },

    displayPrice(){

      let currentPrice

      if(this.store.content.trigger == true){

        currentPrice = JSON.parse(localStorage.getItem('total_price'))

      }else{

        currentPrice = JSON.parse(localStorage.getItem('total_price'))

      }

      return currentPrice

    }

  },

  methods:{

    removeProduct(product){

      if(this.store.content.cart.has(product)){

        this.store.content.cart.forEach(item => {

          if(item.id == product.id && item.quantity == 1 ){

            this.store.content.cart.delete(item)

          }
          else if(item.id == product.id && item.quantity > 0 ) {

            item.quantity = item.quantity - 1

          }
          
        })

      }

    },
      
    addProduct(product){

      console.log('add product to cart');

      console.log(this.store.content.cart);

      if(this.store.content.cart.has(product)){

        this.store.content.cart.forEach(item => {

          if(item.id == product.id){

            item.quantity = item.quantity + 1

          }
          
        })

      }
      else{

        this.store.content.cart.add(product)

      }

    },

    updateLocal(){

      localStorage.removeItem('cart') 

      localStorage.setItem('cart', JSON.stringify(Array.from(this.store.content.cart)))

      localStorage.removeItem('total_price',)

      localStorage.setItem('total_price', JSON.stringify(this.store.content.currentPrice))

      this.store.content.cart = new Set(this.store.content.cart)

    },

    updateTotal(){

      this.store.content.prices = []

        Array.from(this.store.content.cart).forEach(element => this.store.content.prices.push(Number(element.price).toFixed(2) * Number(element.quantity).toFixed(2))) 

        console.log(this.store.content.prices);

        if(this.store.content.prices.length == 0){

          this.store.content.currentPrice = 0

        }else{

          this.store.content.currentPrice = this.store.content.prices.reduce(function(a, b,){

            let sum = a + b 

            return sum.toFixed(2)

          })

        }

      console.log(this.store.content.currentPrice);

    },

    buyProducts(cart, total){

      if(cart.length > 0){

        this.store.content.order.products = cart

        this.store.content.order.total = total

        console.log(this.store.content.order)

      }else{

        console.log('il carrello è vuoto');

      }

    }
           
  },

  created () {

    if(Array(JSON.parse(localStorage.getItem('cart'))).length == 0 ){

      this.store.content.cart = new Set()

      localStorage.removeItem('cart',)

      localStorage.removeItem('total_price',)

      localStorage.setItem('cart', this.store.content.cart)

      localStorage.setItem('total_price', this.store.content.currentPrice)

      console.log('new empty set');

    }else{
    
      console.log('new set with local storage values');

      this.store.content.cart = new Set(JSON.parse(localStorage.getItem('cart')))

      this.store.content.currentPrice = Number(JSON.parse(localStorage.getItem('total_price')))

    }

  }
      
}

</script>

<template>

  <div id="my-cart">

    <ul v-for="(product) in arrayCart">

      <li class="cart-item" >

        <div>

          {{ product.name }}

        </div>

        <div>

          {{ product.price }}

        </div>

        <span>

          {{ product.quantity }}

        </span>

        <button class="remove-item" @click="removeProduct(product), updateTotal(), updateLocal() ">

          remove product 

        </button>

        <button  @click="addProduct(product), updateTotal(), updateLocal()">

          add product

        </button>

      </li>

    </ul>

    <div class="total-price"  v-if="this.store.content.currentPrice > 0">

     {{ store.content.currentPrice.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}}

    </div>

    <div class="buy-button">

      <button  @click=" buyProducts( arrayCart, store.content.currentPrice)" >

        
        <router-link  :to="{name : 'CheckoutPage'}">finalizza acquisto</router-link>
      </button>

    </div>

  </div>
  
  
</template>

<style lang="scss" scoped>

  #my-cart{

  width: 18.75rem;

  margin-bottom: 18.75rem;

  border: 2px solid red;

  position:absolute;

  top:0;

  right:0;

    .cart-item{

      border: 1px solid violet;

      margin: .3125rem;
      
      padding: .3125rem;

      button {

        margin:.3125rem

      }

    }

    .total-price{

      border: 1px solid grey;

      margin: .3125rem;

      padding: .3125rem;

    }

    .buy-button{

      border: 1px solid blue;

      margin: .3125rem;

      padding: .3125rem;

    }
  }


</style>