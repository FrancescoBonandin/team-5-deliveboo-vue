<script >

import axios from 'axios';
  
  export default {

    components:{

      

    },

    data(){

      return {

      restaurants : []

      }

    },

    methods:{

      
    },

    created(){

      axios.get('http://127.0.0.1:8000/api/restaurants/')

      .then(response =>{

      this.restaurants = response.data.restaurants;

      console.log(this.restaurants);

      })

    }

  }
    
 </script>

 <template>

  <ul v-for="restaurant in restaurants ">

   <li>

      <div>

        <router-link  :to="{name : 'restaurant-menu' , params : { id : restaurant.id}}"> >

          <div>

            {{ restaurant.restaurant_name }}

          </div>

          <div>

            <!-- provvisorio va fatto  -->
            <img  v-if="restaurant.image" :src="restaurant.image" alt="">

            <!-- <img  v-if="restaurant.image" :src="'http://127.0.0.1:8000/storage' + restaurant.image" alt=""> -->

          </div>

        </router-link >
      
      </div>

   </li>

  </ul>
  

 </template>

 <style lang="scss">

  

 </style>