import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"


export const useCartStore = defineStore("cart", {
  state: () => {
    return { 
      dishes: useLocalStorage('dishes', [])
     };
  },
  actions: {
    addDish(dish) {
        let isAlreadyInCart = 0;
        for (let otherDishes of this.dishes)
        {
            if(dish.id == otherDishes.id)
            {
                isAlreadyInCart = 1;
            }
        }
        if(isAlreadyInCart){
            for (let otherDishes of this.dishes)
            {
                if(dish.id == otherDishes.id)
                {
                    otherDishes['quantity'] += 1
                    console.log(otherDishes)
                }
            }
        }
        else{
            dish['quantity'] = 1
            this.dishes.push(dish);
        }
        console.log(isAlreadyInCart)
    },
    deleteDish(key) {
        delete this.dishes[key];
    },
    deleteCart(){
        this.dishes = []
    },
    reset() {
      this.count = 0;
    }
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
    squareCount: (state) => {
      return state.count ** 2;
    },
  },
});