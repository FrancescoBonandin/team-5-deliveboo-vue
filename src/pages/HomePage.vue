<script >

import axios from 'axios';

export default {


  components:{

    
    

  },

  data(){

    return {

    restaurants : [],

    selectedCategories : [],

    categories :[],

    selectedRestaurants : []

    }

  },

  computed:{

    findRestaurants(){

      // this.restaurants = this.selectedCategory


      for (let index = 0; index < this.selectedCategories.length; index++) {

        this.selectedRestaurants = this.selectedCategories[index].restaurants;

        console.log(this.selectedRestaurants)

        for (let index = 0; index < this.selectedRestaurants.length; index++) {

          const restaurant = this.selectedRestaurants[index];

          if (this.restaurants.includes(restaurant)) {

            console.log('nessun ristorante')
            
          }
          else{

            this.restaurants.push(restaurant)

            console.log(this.restaurants);

          }

        }

      }

    }

  },

  methods:{

    pushRestaurants(arrayR){

      arrayR.forEach(restaurant => {

        if (restaurant.some(element=>{return this.restaurants.includes(element)})) {

          console.log('presente')
          
        }else{

          console.log('da aggiunger')

        }
        
      });

      // this.restaurants = this.restaurants.push(arrayR)


    },
  
    // selected( param, param2){

    //   let res = param.some(element=>{return param2.includes(element)})

    //   // console.log(res);

    // }

  },

  created(){

    axios.get('http://127.0.0.1:8000/api/restaurants/')

    .then(response =>{

    this.restaurants = response.data.restaurants;

    // console.log(this.restaurants);

    })

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

    <input type="checkbox" :id="category.id" v-on:click="pushRestaurants(category.restaurants)"   :name="category" :value="category.id" v-model="selectedCategories">

    <label :for="category.id ">{{ category.category_name }}</label><br>

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
          <img  v-if="restaurant.image" :src="restaurant.image" alt="">

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