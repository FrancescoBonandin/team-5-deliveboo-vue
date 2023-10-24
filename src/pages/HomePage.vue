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

  created(){

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

  <ul v-for="restaurant in filteredRestaurants">
  
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