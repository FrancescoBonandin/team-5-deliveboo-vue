import { reactive } from "vue";

export const store = reactive({

    content : {

        Price : 0,

        cart : new Set(),

        prices : [],

        currentPrice : 0,

        restaurantId : 0,

        sum : 0,

        order : {

            'products' : null,

            'total'    : 0

        },

        customerInfo : {

            'name' : null,
            'last_name' : null,
            'address' : null,
            'phone_number' : null,
            'email' : null,
      
        },
        
        paid: false

    }

})