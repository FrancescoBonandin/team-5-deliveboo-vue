
<script>

  import axios from 'axios';
  
  export default {

    components:{

    

    },

    data(){

      return {

      dishes :[],

      }

    },

    methods:{

      
    },

    created(){

      axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id)

        .then(response =>{

        console.log(response.data.restaurant);

        this.dishes = response.data.restaurant.dishes

      })

    }

  }
    
</script>

<template>

  <div v-for="dish in dishes">

    <ul>

      <li>{{ dish.name }}</li>
      
    </ul>

  </div>

</template>

<style lang="scss">

  

</style>