import { createRouter, createWebHistory } from "vue-router";

import homePage  from '../pages/HomePage.vue';

import restaurantMenu  from '../pages/RestaurantMenu.vue';
import PaymentPage  from '../pages/PaymentPage.vue';


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
            path : '/restaurant/PaymentPage' ,

            name :  'PaymentPage' ,

            component :PaymentPage , 
        }
 
     ]
 
 });
 
 export {router} ;