<script >
  import headerApp   from './components/HeaderApp.vue';

  import mainApp  from './components/MainApp.vue';

  import footerApp  from './components/FooterApp.vue';

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

  }

 </style>