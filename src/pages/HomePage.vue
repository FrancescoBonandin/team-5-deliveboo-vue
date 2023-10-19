<script >

import axios from 'axios';

export default {


  components:{

    
    

  },

  data(){

    return {

    restaurants : [],

    selectedCategories : [],

    categories : []

    }

  },

  computed:{

    

  },

  methods:{

    findRestaurant(categories_ids){

      axios.get('http://127.0.0.1:8000/api/restaurants/')

      .then(response =>{

      this.restaurants = response.data.restaurants;

      console.log('funziona');

      })

    }
    
  
  },

  created(){

  //   axios.get('http://127.0.0.1:8000/api/restaurants/')

  //   .then(response =>{

  //   this.restaurants = response.data.restaurants;

  //   // console.log(this.restaurants);

  //   })

    axios.get('http://127.0.0.1:8000/api/categories/')

    .then(response =>{

    // console.log(response);

    this.categories = response.data.categories

    })

  }

}
  
</script>

<template>

<div>

  <div v-for="category in categories">

    <!-- v-on:click="pushRestaurants(category.restaurants)" -->

    <input type="checkbox" :id="category.id" :name="category" :value="category.id" v-model="selectedCategories">

    <label :for="category.id ">{{ category.category_name }}</label><br>

  </div>

  <div>

    <button @click="findRestaurant(selectedCategories)" ></button>

  </div>

  <div>

    {{ selectedCategories }}

  </div>
  
</div>


<ul v-for="restaurant in restaurants">

  <!-- <li v-if="selectedCategory.some(element => restaurant.categories.includes(element))">  -->

    <!-- <button v-on:click="selected(selectedCategory,  )"></button> -->

  <li>

    <div>

      <router-link  :to="{name : 'restaurant-menu' , params : { id : restaurant.id}}"> 

        <div>

          {{ restaurant.restaurant_name }}

        </div>

        <div>

          <!-- provvisorio -->
          <img  v-if="restaurant.image" :src="restaurant.full_image" alt="">

          <!-- <img  v-if="restaurant.image" :src="'http://127.0.0.1:8000/storage' + restaurant.image" alt=""> -->

        </div>


        <div v-for="category in restaurant.categories ">

            {{ category.id }}

        </div>

      </router-link>
    
    </div>

</li>

</ul>


</template>

<style lang="scss">



</style>