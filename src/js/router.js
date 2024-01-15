import { createRouter, createWebHistory } from "vue-router";

import homePage  from '../pages/HomePage.vue';

import restaurantMenu  from '../pages/RestaurantMenu.vue';
import CheckoutPage from '../pages/CheckoutPage.vue';
import OrderSubmitPage from '../pages/OrderSubmitPage.vue';
import OrderSuccessPage from '../pages/OrderSuccessPage.vue';


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
            path : '/restaurant/CheckoutPage/OrderSubmit' ,

            name :  'OrderSubmit' ,

            component : OrderSubmitPage , 
        },
        {
            path : '/restaurant/CheckoutPage/OrderSubmit/OrderSuccess' ,

            name :  'OrderSuccess' ,

            component : OrderSuccessPage , 
        },
 
     ]
 
 });
 
 export {router} ;