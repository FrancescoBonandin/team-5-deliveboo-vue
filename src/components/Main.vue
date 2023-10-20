
<script>
  
  import { store } from "../js/store"

  export default {

    components:{

     

    },

    data(){

      return {

        store,

      }

    },

    computed:{


    },

    methods:{

      
    }
    
  }

 </script>

 <template>

    <router-view

    :productsPrices = store.content.productsPrices

    :cart = store.content.cart

    :order = store.content.order
    
    ></router-view>

 </template>

 <style lang="scss" scoped>

  

 </style>