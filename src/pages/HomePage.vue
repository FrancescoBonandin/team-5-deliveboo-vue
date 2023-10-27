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

    results : null,

    trigger: false,

    lastResult : null

    }

  },

  computed:{

   showResults(){

    return this.results

   },

  },

  methods:{

    countResults(){

      this.results = this.filteredRestaurants.length

    },

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

        this.results = this.filteredRestaurants.length

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

<div class="p-2 jumbo-client  display-screen-plus-nav position-relative">

  <div class="mt-3">

    <div class="d-flex flex-wrap justify-content-center">

      <div class="col-lg-11">

        <div class=" d-flex flex-wrap justify-content-center align-item-center">

          <div class="m-1"  v-for="category in categories"> 

            <div class="">

              <input type="checkbox" class="btn-check" @click="" :id="category.id" :name="category" :value="category.id" v-model="selectedCategories">

              <label class="btn fs-7 btn-outline-light" :for="category.id ">{{ category.category_name }}</label>

            </div>

          </div>

        </div>

      </div>

      <div class="col-lg-2 d-flex align-item-center justify-content-center">

        <div class="d-flex justify-content-center align-item-center">

          <div class=" align-self-center">

            <button class="btn btn-primary my-3 fs-4" @click="findRestaurant(selectedCategories)">trova ristorante</button>

          </div>

        </div>

      </div>

    </div>

  </div>

  <div id="results" class="results-container custom-shadow m-special  col-lg-5 col-md-8 light-bg-card p-3" >

    <div class="fs-2">

        <div class="text-center">

          <h2 class="fs-0 deliveboo-primary-t-color">Scegli le categorie</h2>

        </div>
        
      <div class="text-center">

        <span class="">

          <i class="fa-solid fa-pizza-slice m-1"></i>

          <i class="fa-solid fa-bowl-food m-1"></i>

          <i class="fa-solid fa-ice-cream m-1"></i>

          <i class="fa-solid fa-fish m-1"></i>

          <i class="fa-solid fa-martini-glass-citrus m-1"></i>

          <i class="fa-solid fa-burger m-1"></i>
        
        </span>

      </div>

      <div class="text-center primary-bg-card p-1 " v-if="results == 0 " >

        <span class="">nessun risultato</span>

      </div>

      <div class="text-center" v-if="results > 0 && selectedCategories.length > 0 ">

        <span class="mx-3">{{ this.results }}</span>

        <span class="">ristoranti trovati</span>

      </div>

      <div class="" v-if=" results > 0 && selectedCategories.length > 0 ">

        <a href="#restaurants" class="d-flex justify-content-center align-item-center btn btn-success fs-3">

          <div>

            mostra

          </div>

          <div>

            <i class="fa-solid fa-utensils mx-1"></i>

          </div>

        </a>

      </div>

    </div>

  </div>

</div>

<div id="restaurants" class=" pt-nav-heigth main-min-content-container bg-restaurants container-fluid position-relative">

  <ul class="row no-dot-list p-2">

    <div v-if="results == 0 || results == null" class="d-flex justify-content-center align-item-center position-absolute top-50 start-50 translate-middle ">

      <div class="d-flex justify-content-center align-item-center flex-wrap " >

          <h2 class="fs-1 w-100 text-center">

            scegli le categorie e premi<span class="text-primary"> 'trova ristorante'</span> 

          </h2>

          <img class="foto-md_frame" src="../../public/img/giphy.gif"  alt="">

      </div>

    </div>

    <template v-if="results > 0" v-for="(restaurant, index) in filteredRestaurants">

      <li  class="p-2 col-lg-4 no-dot-list ">

        <div class="">
      
          <router-link class="text-decoration-none" :to="{name : 'restaurant-menu' , params : { id : restaurant.id}}"> 

            <div class="restaurant-card p-2 d-flex align-item-center flex-wrap custom-shadow">

              <div class="col-12 restaurant-foto-container primary-border-card  ">

                <img  class="foto-frame"  v-if="restaurant.image" :src="restaurant.full_image" alt="">

              </div>

              <div class="col-12 text-center h-70px">

                <h5 class="text-decoration-none d-flex align-item-center justify-content-center badge rounded-pill text-bg-success fs-5 bg-green text-break mt-3">

                  {{ restaurant.restaurant_name }}

                </h5>

              </div>

              <div class="d-flex flex-wrap justify-content-centerw-100 h-60px">

                <div class="text-reset text-center" v-for="category in restaurant.categories ">

                  <span class="">{{ category.category_name }}-</span> 

                </div>

              </div>

            </div>

          </router-link>
          
        </div>

      </li>

    </template>

  </ul>

</div>


</template>

<style lang="scss" scoped>

  @use '../scss/style.scss';

  .jumbo-client{

    background-image:url('../../public/img/deliveboo client simple.jpg');

    background-size:cover ;

    background-position: top;

    padding-top: 7.5rem;


  }

  .bg-restaurants{

    background-image: url('../../public/img/deliveboo client simple 2.jpg');

    background-size: cover;

    background-position: bottom;

  }

  .restaurant-card{

    height: 19.6875rem;

    background-color: rgba(255, 255, 255, 0.797);

    border-radius: .625rem;

    transition: background-color .3s ease-in-out;

  }

  .restaurant-card:hover{

    background-color: #00000055;

  }

.green-text{

  color: #4caf50;

}

.bg-green{

  background-color:#4caf50 ;
}

.no-dot-list{

  list-style: none;

  list-style-type: none;

  list-style-image:none;

}

.restaurant-foto-container{

  height: 9.375rem;

  border-radius: .3125rem;

  background-image:url( '../../public/img/no image.jpg');

  background-position: center;

  background-size: cover;

}

.lh-60{

line-height: 3.75rem;

}

.top-55{

  top:70%

}

.outline-black{

  text-shadow: 
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000,
      
  }

.pt-nav-heigth{

  padding-top: 7.5rem;

}

.m-special{

  margin:auto;

  margin-top: 9.375rem

}

@media screen and (max-width: 600px){

.m-special{

  margin-top: 95px;

  margin: auto;

}

}

@media screen and (max-width: 600px){

.m-special{

  margin-top: 95px;

  margin: auto;

}

}

@media screen and (min-width: 1400px){

.m-special{

  position:absolute;

  top:50%;

  left:50%;

  transform: translate(-50%, -50%) ;


}

.bg-restaurants{

background-image: url('../../public/img/deliveboo client simple 2.jpg');

background-size: cover;

background-position: top;

}

}


</style>