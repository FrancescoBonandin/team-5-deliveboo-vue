import { createRouter, createWebHistory } from "vue-router";

import homePage  from '../pages/HomePage.vue';

import restaurantMenu  from '../pages/RestaurantMenu.vue';
import PaymentPage  from '../pages/PaymentPage.vue';
import CheckoutPage from '../pages/CheckoutPage.vue';
import OrderSubmitPage from '../pages/OrderSubmitPage.vue';


const router =  createRouter({

    history :
    
     createWebHistory(),
 
     routes : [
 
         {
             
             path : '/' ,
 
             name :  'home' ,
 
             component : homePage ,
 
         },

         {
             
            path : '/restaurant/:id' ,

            name :  'restaurant-menu' ,

            component : restaurantMenu ,

        },
        
        {
            path : '/restaurant/CheckoutPage' ,

            name :  'CheckoutPage' ,

            component : CheckoutPage , 
        },

        {
            path : '/restaurant/CheckoutPage/PaymentPage' ,

            name :  'PaymentPage' ,

            component :PaymentPage , 
        },

        {
            path : '/restaurant/CheckoutPage/PaymentPage/OrderSubmit' ,

            name :  'OrderSubmit' ,

            component : OrderSubmitPage , 
        },
 
     ]
 
 });
 
 export {router} ;