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

  <div id="dish-showcase">

    <div class="dish-card" v-for="dish in dishes">

      <ul>

        <li>{{ dish.name }}</li>

      </ul>

      <button @click="addProduct(dish, cart), updateTotal(dish), saveInLocal(dish)">aggiungi al carrello</button>

    </div>

  </div>

</template>

<style lang="scss">

#dish-showcase {
  
  width: 600px;

  margin: auto;

  display: flex;

  justify-content: space-between;

  border: 2px solid green;

  .dish-card {

    border: 2px solid yellow;

    margin: 0.625rem;

    padding: 0.3125rem;

  }

}

</style>
