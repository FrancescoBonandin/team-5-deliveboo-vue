<script >

import cartComponent  from '../HeaderComponent/Cart.vue';
  
export default {

  components:{

    cartComponent,

  },

  props:{


  },

  data(){

    return {}

  },

  computed:{


  },

  methods:{

    
  }
  
}

</script>

<template>

<div class="container position-absolute top-50 start-50 translate-middle">

    <div class="row p-3">

        <div class="col-6 d-flex aling-item-center ">

            <div class="w-50px mx-2">

                <img class="w-100" src="/public/img/deliveboo-logo.png" alt="">

            </div>

            <div class="">

                <h1 class="deliveboo-primary-t-color">

                    deliveboo

                </h1>

            </div>

        </div>

        <div class="col-6 d-flex aling-item-center justify-content-end ">

          <div class=" align-self-center">

            <div class="text-end">

                <a class="deliveboo-primary-t-color nav-link text-decoration-none fs-5 text-capitalize" href="http://127.0.0.1:8001/login">accesso admin</a>

            </div>

          </div>

        </div>

        <div class=" col-2 z-3" >

          <cartComponent/>

        </div>

    </div>

</div>

</template>

<style lang="scss" scoped>

@use '../../scss/style.scss';

.w-50px{

  width: 3.125rem
 
}



</style>