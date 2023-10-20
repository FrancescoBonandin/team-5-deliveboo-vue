<script>
  
export default {

  components:{

    
  },

  props:{

    productsPrices : Array,

    cart : Array,

  },

  data(){

    return {

      index : null,

      sum : 0,

      quantity : 0,
      
    }

  },

  computed:{

    displayCart(){

      let newCart = new Set(this.cart.map((product)=>product));

      let displayables = (Array.from(newCart))

      console.log('--- CART DISPLAY ---');

      console.log(displayables)

      return displayables

    },

    finalPrice(){

      // this.sum = this.productsPrices.reduce((a , b) => {

      //     return a + b ;

      // })

      // return this.sum

    }

  },

  methods:{

    removeProduct(product, index, cart){

      if (product.quantity > 0) {

        let oldQuantity = product.quantity

        product['quantity'] = oldQuantity - 1
        
      }
      else if (product.quantity == 0){

        this.cart      

      }
      
    

  },

  addCart(product){

    if(product.hasOwnProperty('quantity')){

      let oldQuantity = product.quantity

      product['quantity'] = oldQuantity + 1

      console.log('aumenta la quantita esistente');

    }else{

      product['quantity'] =  1

      console.log('aumenta la quantita');

    }

    this.cart.push(product)

    console.log('--- CART ---')

    console.log(this.cart);

    },

    // addPrice(product){

    // this.productsPrices.push(Number(product.price))

    // console.log('--- PRICE EACH PRODUCT ---');

    // console.log(this.productsPrices);

    // },

  }
  
}

</script>

<template>

  <div>

    <ul v-for="(product, index) in displayCart ">

      <li v-if="product.quantity > 0">

        <div>

          {{ product.name }}

        </div>

        <div>

          {{ product.price }}

        </div>

        <span>

          {{ product.quantity }}

        </span>

        <button class="remove-item" @click="removeProduct(product, index, cart ) ">

          remove product 

        </button>

        <button  @click="addCart(product)">

          add product

        </button>

      </li>

    </ul>

    <div>

      {{ finalPrice }}

    </div>

  </div>
  
</template>

<style lang="scss" scoped>



</style>