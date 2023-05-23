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
      if(dish.restaurant_id != this.dishes[0].restaurant_id){
        if (confirm("Questo piatto appartiene a un ristorante diverso dagli altri nel tuo carrello. Vuoi eliminare il carrello e crearne uno nuovo?")) {
          this.deleteCart();
          dish['quantity'] = quantity
          this.dishes.push(dish)

        } else {
          return
        }
      }
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
    },
    numberOfItems(state) {
      let numberOfItems = 0
      this.dishes.forEach((dish)=> numberOfItems += dish.quantity)
      return numberOfItems
    }
  },
});