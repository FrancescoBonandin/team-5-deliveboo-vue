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

      show : false
      
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

    showCart(){

      if (this.show == false) {

        this.show = true
        
      }else {

        this.show = false
        
      }

    },

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

  <div  id="cart-logo" v-if="show == false">

    <div class="position-relative">

      <div @click="showCart()" class=" rounded square-container heavy-shadow">
      
        <img class="w-100" src="../../../public/img/450618.webp" alt="">
    
      </div>

      <div v-if="arrayCart.length > 0" class="full-badje">


      </div>

    </div>

  </div>

  <div v-if="show == true" class="position-absolute" id="cart-container">

    <div>

      <div @click="showCart()" class="primary px-1 exit-cart-logo">
        
        <i class="fa-solid fa-up-right-from-square fs-4"></i>
      
      </div>

    </div>

    <ul class="my-cart list-unstyled d-flex flex-column frame-shadow rounded  p-1 position-relative">

      <li class="position-absolute top-50 start-50 translate-middle text-center" v-if="arrayCart.length == 0">

        <h5 class="text-uppercase deliveboo-primary-t-color">

          carrello vuoto

        </h5>

      </li>

      <li class="cart-item d-flex flex-column custom-shadow justify-content-between my-1 rounded bg-dark text-light " v-for="(product) in arrayCart" >

        <div class="px-1">

          {{ product.name }}

        </div>

        <div class="px-1" >

          {{ product.price }} &euro;

        </div>

        <div class="d-flex deliveboo-primary-border rounded m-1">

          <span class="w-50 text-center  ">

          {{ product.quantity }}

          </span>

          <div class="w-50 text-light">

            <button class="m-1 cart-item-btn" @click="removeProduct(product), updateTotal(), updateLocal() ">

              -

            </button>

            <button class="m-1 cart-item-btn "  @click="addProduct(product), updateTotal(), updateLocal()">

              +

            </button>

          </div>

        </div>

      </li>

    </ul>

    <div class="d-flex my-1 rounded">

      <div class="total-price w-50 text-center align-self-center" >

        <span class="primary-bg-card border border-black p-1 fs-4" v-if="this.store.content.currentPrice > 0">
        
          {{ store.content.currentPrice.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}} &euro;
        
        </span>

      </div>

      <div class="buy-button w-50 p-1">

        <button class="rounded btn btn-dark"  @click=" buyProducts( arrayCart, store.content.currentPrice)" >

          finalizza acquisto

        </button>

      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>

#cart-logo{

  position: absolute;

  bottom: -11.875rem;

  right: .625rem;

  cursor: pointer;
  
}

.full-badje{

  width:.75rem;

  height: .75rem;

  border-radius:100%;

  position: absolute;

  top:-0.375rem;

  right:-0.375rem;

  background-color: red
}

.exit-cart-logo{

  cursor: pointer;

}

.exit-cart-logo:hover{

  color: #008309
}

#cart-container{

  bottom: -25rem;

  right: .9375rem;
  
  width: 15.625rem;

  height: 18.75rem;

  .my-cart{

    overflow-y: auto;

    background-color: transparent;
  
    display: flex;

    flex-wrap: wrap;

    height:18.75rem;

    background-color: rgba(0, 0, 0, 0.578);

    .cart-item{

      width: 100%;

      height: 5.625rem

    }

    .cart-item-btn{

      border-radius: .3125rem;

      border-style: none;

      font-size: 1.0625rem;

      width: 23px;

      color:white;

      background-color: transparent;
      
    }

    .cart-item-btn:hover{

      background-color: rgba(255, 255, 255, 0.901);

      color:black;

    }

  }

}

.frame-shadow{

  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.heavy-shadow{

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}

.square-container{

  width: 3.125rem;

  height: 3.125rem;

  background-color:  #4caf50;;

}

.square-container:hover{
  
  background-color:  #26c32b;

}


</style>