import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"


export const useCartStore = defineStore("cart", {
  state: () => {
    return { 
      dishes: useLocalStorage('dishes', []),
     };
  },
  actions: {
    addToCart(dish, quantity)
    {
      let isInCart = 0
      this.dishes.forEach((cartDish) => {
        if(cartDish.id == dish.id){
          isInCart = 1
          cartDish['quantity'] = quantity
          console.log(this.dishes)
        }
      })
      if (isInCart == 0){
        dish['quantity'] = quantity
        this.dishes.push(dish)
        console.log(this.dishes)
      }
      
    },
    removeDish(i){
      this.dishes.splice(i, 1)
    },
    deleteCart(){
      this.dishes= []
    }
  },
  getters: {
    totalPrice(state) {
      let totalPrice = 0
      this.dishes.forEach((dish)=> totalPrice += dish.price * dish.quantity)
      return totalPrice.toFixed(2)
    }
  },
});