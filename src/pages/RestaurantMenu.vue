
<script>

  import axios from 'axios';
  
  export default {

    components:{

    

    },

    props:{

      productsPrices : Array,

      cart : Array,

      order : Array

    },

    data(){

      return {

      dishes :[],

      quantity : 0,

      }

    },

    computed:{

      

    },

    methods:{

      addCart(product , cart){

        cart.push(product)

        let setCart = new Set(cart.map((product)=>product));

        let cleanCart = (Array.from(setCart))
          
        cleanCart.forEach(item => {

          if(item.id == product.id ){

            item.quantity = item.quantity + 1

          }

        })

        console.log('NEW CART');

        console.log(cleanCart);

      },

      // addPrice(product){

      //   this.productsPrices.push(Number(product.price))

      //   console.log('--- PRICE EACH PRODUCT ---');

      //   console.log(this.productsPrices);

      // }

    },

    created(){

      axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id)

        .then(response =>{

        this.dishes = response.data.restaurant.dishes

        this.dishes.forEach(dish => {

        dish['quantity'] = 0

        console.log(dish)
            
        });


      })

    }

  }
    
</script>

<template>

  <div v-for="dish in dishes">

    <ul>

      <li>{{ dish.name }}</li>
      
    </ul>

    <button  @click="addCart(dish , cart, )">aggiungi al carrello</button>

  </div>

</template>

<style lang="scss">

  

</style>