'use strict'


let services = {
"стрижка": "60 грн", 
"гоління": "80 грн",
"Миття голови": "100 грн"

};

services ["Розбити скло"] = "200 грн";
services ["Депіляція"] = "350 грн";
services ["Манікюр"] = "600 грн";


let serviceMethods = {
    price() {
      let total = 0;
         for (let key in services) {
            total += parseInt(services[key]);
         }
      return total + " грн";
    },

    minPrice() {
      let min = null;
         for (let key in services) {
       
         if(min === null || parseInt(services[key]) < min) {
            min = parseInt(services[key]);
         }
            
         }
         return min + " грн";
      },

   maxPrice() {
      let max = null;
         for (let key in services) {

            if (max === null || parseInt(services[key]) > max) {
               max = parseInt(services[key]);
            }
            
            }
            return max + " грн";
         }

    }



console.log(serviceMethods.price());
console.log(serviceMethods.minPrice());
console.log(serviceMethods.maxPrice());