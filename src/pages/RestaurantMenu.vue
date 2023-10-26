<script>

  import axios from 'axios';

  import { store } from "../js/store"

  export default {

    components:{



    },

    props:{



    },

    data(){

      return {

      dishes :[],

      found : false,

      store 

      }

    },

    computed:{


    },

    methods:{

      addProduct(product){
        
        console.log('add product from menu')

        console.log(this.store.content.cart);

        if(this.store.content.cart.has(product)||Array.from(this.store.content.cart).find(e => e.id == product.id)){

          this.store.content.cart.forEach(item => {

            if(item.id == product.id){

              console.log('product all ready exist')

              item.quantity = item.quantity + 1

            }

          })

        }
        else if (this.store.content.cart.size === 0){

          this.store.content.cart.add(product)

        }
        else if(Array.from(this.store.content.cart).find(e => e.restaurant_id == product.restaurant_id)){

          this.store.content.cart.add(product)

        }

      },

      updateTotal(product){

        this.store.content.prices = []

        Array.from(this.store.content.cart).forEach(element => this.store.content.prices.push(Number(element.price).toFixed(2) * Number(element.quantity).toFixed(2))) 

        console.log(this.store.content.prices);

          this.store.content.currentPrice = this.store.content.prices.reduce(function(a, b,){

            let sum = a + b 

            return sum.toFixed(2)

          })

        console.log(this.store.content.currentPrice);

      },

      saveInLocal (product){

        localStorage.removeItem('cart',)

        localStorage.setItem('cart', JSON.stringify(Array.from(this.store.content.cart)))

        this.store.content.cart = new Set (this.store.content.cart)

        localStorage.removeItem('total_price',)

        localStorage.setItem('total_price', JSON.stringify(this.store.content.currentPrice))

      },

    },

    created(){

      axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id)

        .then(response =>{

        this.dishes = response.data.restaurant.dishes

        this.dishes.forEach(dish => {

        dish['quantity'] = 1

        });

        console.log(this.dishes);

      })

    }

  }
</script>

<template>

  <div class="display-scren-plus-nav p-1 menu-bg-img position-relative">

    <div v-if="dishes.length == 0" class="position-absolute top-50 start-50 translate-middle">

      <h2 class="fs-1 text-primary text-center light-bg-card t-center ">siamo spiacenti questo ristorante non ha ancora nessun piatto <i class="fa-regular d-block fs-0 fa-face-frown"></i> </h2> 

    </div>

    <div>

      <router-link :to="{name :'home'}">

          <button class="btn btn-primary m-3">

              indietro

          </button>

      </router-link>

    </div>

    <div id="dish-showcase">

      <div class="dish-card rounded text-dark custom-shadow row" v-for="dish in dishes">

          <div class="col-lg  col-md-12  text-center">

            <button class="btn btn-success"  @click="addProduct(dish, cart), updateTotal(dish), saveInLocal(dish)">aggiungi al carrello</button>

          </div>

          <div class="col-lg col-md-12  text-center"><h5 class="text-uppercase">{{ dish.name }}</h5></div>

          <div class="col-lg  col-md-12 text-center"> <h3 class="deliveboo-primary-t-color">Descrizione : </h3>{{ dish.description}}</div>

          <div class="col-lg  col-md-12 text-center">{{ dish.price}} &euro; </div>
        
          <div class="col-lg col-md-12 m-1 w-250"> <img class="foto-frame" :src="dish.full_image" alt=""> </div>
        
      </div>

    </div>

  </div>

</template>

<style lang="scss">

#dish-showcase {
  
  width: 90%;

  margin: auto;

  display: flex;

  flex-direction: column;

  margin-top: 7.1875rem;

  justify-content: space-between;

  .dish-card {

    display: flex;

    justify-content: space-between;

    align-items: center;

    flex-wrap: wrap;

    margin: 0.625rem;

    padding: 0.3125rem;

    background-color: rgba(255, 255, 255, 0.925);

  }

}

.menu-bg-img{

background-image: url( '../../public/img/menu bg.jpg');

background-size: cover;

background-repeat: no-repeat;

background-position:center;

}

</style>
