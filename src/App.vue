<script >

  import headerApp   from './components/Header.vue';

  import mainApp  from './components/Main.vue';

  import footerApp  from './components/Footer.vue';

  export default {

    components:{

      headerApp,

      mainApp,

      footerApp

    },

    data(){

      return {}

    },

    methods:{

      
    }
    
  }

 </script>

 <template>

   <headerApp/>

   <mainApp/>

   <footerApp/>

 </template>

 <style lang="scss">

  *{

    margin : 0;

    padding: 0;

    box-sizing: border-box;

    body{

      width : 100vw

    }

  }

 </style>