import { reactive } from "vue";

export const store = reactive({

    content : {

        Price : 0,

        cart : new Set(),

        prices : [],

        currentPrice : 0,

        sum : 0,

        order : {

            'products' : null,

            'total'    : 0

        }

    }

})