<script >
  
export default {

  components:{

    
  },

  props:{

  },

  data(){

    return {

      footerInfo : [ 
                      {
        
                        'title' : 'info',
                        
                        'links' : ['Domande frequenti','Accedi','Registrati su Deliveboo','Miglior Prezzo Garantito,','Scarica l`app di Just Eat']
    
                      },

                      {
        
                        'title' : 'cittá',
                        
                        'links' : ['Roma','Milano','Bologna','Padova','Trento','Venezia','Brescia',' Napoli', 'Treviso' ]

                      },

                      {
                        
                        'title' : 'catene',
                        
                        'links' : ['Burger King','Accedi','Mc Donald','Zushi','RoadHouse', 'Taco Bel','Pizza Hut']

                      },
    
                    ]

    }

  },

  computed:{


  },

  methods:{

    
  }
  
}

</script>

<template>

  <div class="d-flex align-item-center justify-content-between p-2 py-4 flex-wrap">


    <div class="d-flex">

      <span class="mx-3" v-for="info in footerInfo"  >

        <h3>{{ info.title }}</h3>

        <ul class=" no-dot-list p-0 ">

          <li v-for="link in info.links" :key="index" class="fs-7 py-1">
            
            <a href="" class="text-black link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dec-color " >{{ link}}</a>
          
          </li>

        </ul>

      </span>

    </div>

    <div class="align-self-end m-5">

      <h3 class="">made by <span class="fs-3 deliveboo-primary-t-color">TEAM-5</span> </h3>

    </div>

  </div>

  

</template>

<style lang="scss" scoped>

.no-dot-list{

list-style: none;

list-style-type: none;

list-style-image:none;

}

.link-dec-color{

  border-bottom: #fe9800 ;

}




</style>